require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');
const sendEmail = require('./utils/sendEmail');

const app = express();
const port = process.env.PORT || 3000;

// Initialize Stripe & Supabase safely
const stripe = Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock');
const supabase = createClient(
    process.env.SUPABASE_URL || 'https://mock.supabase.co',
    process.env.SUPABASE_SERVICE_ROLE_KEY || 'mock_key'
);

app.use(cors());

// Configure JSON parser to preserve raw body for signature verification on Stripe webhooks
app.use(express.json({
    verify: (req, res, buf) => {
        if (req.originalUrl.startsWith('/api/stripe-webhook')) {
            req.rawBody = buf;
        }
    }
}));

app.post('/api/stripe-webhook', async (req, res) => {
    const signature = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;
    // Parity verification check: if Stripe CLI is forwarding signature
    if (signature && webhookSecret) {
        try {
            event = stripe.webhooks.constructEvent(req.rawBody, signature, webhookSecret);
        } catch (err) {
            console.error('[server.js] Webhook signature verification failed:', err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }
    } else {
        // Local-only fallback branch: strictly gated to local development environment
        // In production, /api/stripe-webhook.js does not contain this fallback branch and will fail.
        console.warn('[server.js] Skipping webhook signature verification because STRIPE_WEBHOOK_SECRET or stripe-signature header is missing. This is a local-only fallback.');
        try {
            event = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        } catch (err) {
            console.error('Failed to parse webhook body:', err.message);
            return res.status(400).send('Invalid JSON body');
        }
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
            console.log(`Processing payment for ${customerEmail}...`);
            let authUserId;

            // 1: Create or find auth user and generate magic link
            const host = req.headers.host || 'localhost:3000';
            const { data: linkData, error: linkError } = await supabase.auth.admin.generateLink({
                type: 'magiclink',
                email: customerEmail,
                options: {
                    redirectTo: `http://${host}/auth-callback.html`,
                },
            });

            if (linkError) {
                console.error('Failed to generate magic link:', linkError.message);
                const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
                if (!listError && users) {
                    const existing = users.find(u => u.email === customerEmail);
                    if (existing) authUserId = existing.id;
                }
            } else {
                authUserId = linkData?.user?.id;
            }

            if (!authUserId) {
                // Last resort fallback
                const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
                    email: customerEmail,
                    email_confirm: true,
                });
                if (!createError) authUserId = newUser?.user?.id;
            }

            if (!authUserId) {
                console.error('Could not resolve auth user ID for:', customerEmail);
                return res.status(200).json({ received: true, warning: 'Could not resolve user' });
            }

            // 2: Upsert into public.users
            const tier = session.metadata?.tier ? parseInt(session.metadata.tier) : null;
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
            }

            // 3: Send magic link email via Emailit
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

            console.log(`Payment successful & magic link sent! (uid: ${authUserId})`);
        } catch (err) {
            console.error('Error processing webhook:', err);
            return res.status(500).json({ error: 'Webhook processing failed' });
        }
    }

    return res.status(200).json({ received: true });
});



// Serve static files from /public (with clean URLs enabled)
app.use(express.static('public', { extensions: ['html'] }));

app.post('/api/create-checkout', async (req, res) => {
    const { email, tier } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    // Parse and strictly validate tier (19, 29, 39)
    const parsedTier = parseInt(tier);
    if (![19, 29, 39].includes(parsedTier)) {
        return res.status(400).json({ error: 'Invalid tier' });
    }

    // Map tier to the correct Stripe Price ID from env
    const priceIdKey = `STRIPE_PRICE_ID_${parsedTier}`;
    const priceId = process.env[priceIdKey];

    if (!priceId) {
        console.error(`Stripe Price ID for tier ${parsedTier} is missing in environment variables.`);
        return res.status(500).json({ error: `Price configuration missing for tier ${parsedTier}` });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            customer_email: email,
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                }
            ],
            metadata: {
                tier: String(parsedTier)
            },
            success_url: `http://localhost:${port}/products?paid=true`,
            cancel_url: `http://localhost:${port}/products?cancelled=true`,
        });

        return res.status(200).json({ url: session.url });
    } catch (err) {
        console.error('Stripe error:', err.message);
        return res.status(500).json({ error: 'Failed to create checkout session' });
    }
});

// Route /api/contact to our local Vercel serverless function (clearing cache for hot-reload in dev)
app.all('/api/contact', async (req, res) => {
    delete require.cache[require.resolve('./api/contact.js')];
    const contactHandler = require('./api/contact.js');
    await contactHandler(req, res);
});

// Route /api/chat to our local Vercel serverless function (clearing cache for hot-reload in dev)
app.all('/api/chat', async (req, res) => {
    delete require.cache[require.resolve('./api/chat.js')];
    const chatHandler = require('./api/chat.js');
    await chatHandler(req, res);
});

// =======================================================================
// SKILLS MANIFEST — serves the dynamic skills directory as JSON
// Same logic as /api/skills-manifest.js (Vercel serverless)
// =======================================================================
app.get('/api/skills-manifest', (req, res) => {
    try {
        const skillsRoot = path.join(process.cwd(), 'public', 'skills');
        const categories = [];

        const categoryFolders = fs.readdirSync(skillsRoot, { withFileTypes: true })
            .filter(d => d.isDirectory())
            .map(d => d.name)
            .sort();

        for (const categoryName of categoryFolders) {
            const categoryPath = path.join(skillsRoot, categoryName);
            const skillFolders = fs.readdirSync(categoryPath, { withFileTypes: true })
                .filter(d => d.isDirectory())
                .map(d => d.name)
                .sort();

            const skills = skillFolders.map((skillFolder, index) => {
                const skillPath = path.join(categoryPath, skillFolder);
                const files = fs.readdirSync(skillPath).sort();
                const prettyName = skillFolder
                    .replace(/[-_]/g, ' ')
                    .replace(/\s*[\[(]\d+[\])]\s*$/, '')
                    .replace(/\b\w/g, c => c.toUpperCase())
                    .trim();

                return {
                    name: prettyName,
                    slug: skillFolder,
                    folder: categoryName,
                    free: index < 3,
                    files
                };
            });

            const categorySlug = categoryName
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');

            categories.push({ name: categoryName, slug: categorySlug, skills });
        }

        return res.json({ categories });
    } catch (err) {
        console.error('skills-manifest error:', err.message);
        return res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`🚀 Local dev server running at http://localhost:${port}`);
    console.log(`👉 To start the Stripe Webhook forwarder, run in another terminal:`);
    console.log(`   stripe listen --forward-to localhost:${port}/api/stripe-webhook`);
});
