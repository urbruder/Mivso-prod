// api/chat.js
// Vercel serverless function for the AI Assistant Chat Widget

module.exports = async function handler(req, res) {
    // Enable CORS for frontend API calls
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
        const { messages } = req.body || {};
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages history is required' });
        }

        const apiKey = process.env.ANTHROPIC_API_KEY;

        // Graceful fallback if no API key is configured yet
        if (!apiKey) {
            console.warn('[api/chat.js] ANTHROPIC_API_KEY is not set. Returning fallback message.');
            return res.status(200).json({
                reply: "Assistant temporarily unavailable. Please use the contact form below to get in touch, and we will get back to you shortly!"
            });
        }

        // Forward conversation to Anthropic Messages API using native fetch
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20241022',
                max_tokens: 1024,
                system: "You are the MIVSO AI Assistant. You help real estate agents choose the right AI skills tier ($19 / $29 / $39) and explain MIVSO's pre-built autonomous agents and AI capabilities. Keep your replies concise and conversational.",
                messages: messages.map(msg => ({
                    role: msg.role === 'assistant' ? 'assistant' : 'user',
                    content: msg.content
                }))
            })
        });

        if (!response.ok) {
            const errBody = await response.text();
            console.error('Anthropic API error response:', errBody);
            throw new Error(`Anthropic API responded with status ${response.status}`);
        }

        const data = await response.json();
        const replyText = data.content && data.content[0] ? data.content[0].text : '';

        return res.status(200).json({ reply: replyText });
    } catch (err) {
        console.error('Chat API error:', err);
        // Fallback message on error so the widget does not appear broken
        return res.status(200).json({
            reply: "Assistant temporarily unavailable. Please use the contact form below to get in touch, and we will get back to you shortly!"
        });
    }
};
