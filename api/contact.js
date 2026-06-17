const { createClient } = require('@supabase/supabase-js');

module.exports = async function handler(req, res) {
    // Handle CORS preflight
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, company, message } = req.body || {};

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: "Name, email, and message are required fields." });
        }

        if (!email.includes('@')) {
            return res.status(400).json({ error: "Please provide a valid email address." });
        }

        // Initialize Supabase with service role key to bypass RLS
        const supabase = createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_SERVICE_ROLE_KEY
        );

        // Insert into public.leads
        const { error } = await supabase
            .from('leads')
            .insert([{ name, email, company: company || null, message }]);

        if (error) {
            console.error('Supabase insert error:', error.message);
            return res.status(500).json({ error: "Failed to save your message. Please try again." });
        }

        return res.status(200).json({ message: "Thanks! We'll be in touch soon." });
    } catch (err) {
        console.error('Contact API error:', err);
        return res.status(500).json({ error: "Failed to save your message. Please try again." });
    }
};
