const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');
const sendEmail = require('../utils/sendEmail');

// Disable Vercel's default body parser for this serverless function
module.exports.config = {
    api: {
        bodyParser: false,
    },
};

// Helper function to read the raw request body stream
const getRawBody = async (req) => {
    const chunks = [];
    for await (const chunk of req) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
};

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const signature = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!signature || !webhookSecret) {
        console.error('Missing Stripe signature or webhook secret');
        return res.status(400).send('Webhook Error: Missing signature or secret');
    }

    let event;
    try {
        const rawBody = await getRawBody(req);
        event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const customerEmail = session.customer_email || session.customer_details?.email;
        const stripeCustomerId = session.customer;

        if (!customerEmail) {
            console.error('No customer email found in checkout session');
            return res.status(400).json({ error: 'No customer email in event' });
        }

        try {
            // Initialize Supabase with service role key (bypasses RLS)
            const supabase = createClient(
                process.env.SUPABASE_URL,
                process.env.SUPABASE_SERVICE_ROLE_KEY
            );

            const host = req.headers.host || 'mivso.com';
            const protocol = host.includes('localhost') ? 'http' : 'https';
            let authUserId;

            // Step 1: Create or find the auth user and generate a magic link
            // generateLink will create the user in auth.users if they don't exist
            const { data: linkData, error: linkError } = await supabase.auth.admin.generateLink({
                type: 'magiclink',
                email: customerEmail,
                options: {
                    redirectTo: `${protocol}://${host}/auth-callback`,
                },
            });

            if (linkError) {
                console.error('Failed to generate magic link:', linkError.message);
                // Try to find existing user
                const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
                if (!listError && users) {
                    const existing = users.find(u => u.email === customerEmail);
                    if (existing) authUserId = existing.id;
                }
            } else {
                authUserId = linkData?.user?.id;
            }

            if (!authUserId) {
                // Last resort: create the user directly
                const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
                    email: customerEmail,
                    email_confirm: true,
                });
                if (createError) {
                    // User may already exist — try to get them
                    console.warn('Create user fallback:', createError.message);
                } else {
                    authUserId = newUser?.user?.id;
                }
            }

            if (!authUserId) {
                console.error('Could not resolve auth user ID for:', customerEmail);
                // Still return 200 to acknowledge the webhook
                return res.status(200).json({ received: true, warning: 'Could not resolve user' });
            }

            // Step 2: Upsert into public.users with the correct auth user ID
            const tier = session.metadata && session.metadata.tier ? parseInt(session.metadata.tier) : null;
            const { error: upsertError } = await supabase
                .from('users')
                .upsert(
                    {
                        id: authUserId,
                        email: customerEmail,
                        has_paid: true,
                        tier: tier,
                        stripe_customer_id: stripeCustomerId,
                        paid_at: new Date().toISOString(),
                    },
                    { onConflict: 'id' }
                );

            if (upsertError) {
                console.error('Upsert error:', upsertError.message);
                // Try with email conflict
                const { error: emailUpsertError } = await supabase
                    .from('users')
                    .upsert(
                        {
                            id: authUserId,
                            email: customerEmail,
                            has_paid: true,
                            tier: tier,
                            stripe_customer_id: stripeCustomerId,
                            paid_at: new Date().toISOString(),
                        },
                        { onConflict: 'email' }
                    );
                if (emailUpsertError) {
                    console.error('Email upsert also failed:', emailUpsertError.message);
                }
            }

            // Step 3: Send magic link email via Emailit
            if (linkData?.properties?.action_link) {
                const actionLink = linkData.properties.action_link;
                const htmlEmail = `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #000;">
                        <h2>You're in.</h2>
                        <p>Click the button below to access your MIVSO products. This link expires in 24 hours.</p>
                        <a href="${actionLink}" style="display: inline-block; background-color: #000; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; margin: 20px 0;">Access my products &rarr;</a>
                        <p style="font-size: 12px; color: #666; margin-top: 40px;">If you didn't purchase MIVSO access, ignore this email.</p>
                    </div>
                `;
                await sendEmail(customerEmail, "Your MIVSO access link", htmlEmail);
            }

            console.log(`Payment recorded and magic link sent for: ${customerEmail} (uid: ${authUserId})`);
        } catch (err) {
            console.error('Error processing webhook:', err);
            return res.status(500).json({ error: 'Webhook processing failed' });
        }
    }

    return res.status(200).json({ received: true });
};
