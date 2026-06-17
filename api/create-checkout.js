const Stripe = require('stripe');

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email, tier } = req.body || {};

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

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
            success_url: `https://${req.headers.host}/products?paid=true`,
            cancel_url: `https://${req.headers.host}/products?cancelled=true`,
        });

        return res.status(200).json({ url: session.url });
    } catch (err) {
        console.error('Stripe Checkout error:', err);
        return res.status(500).json({ error: 'Failed to create checkout session' });
    }
};
