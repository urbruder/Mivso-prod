// api/chat.js
// Vercel serverless function for the AI Assistant Chat Widget (Straico Integration)

const DEFAULT_MODEL = 'openai/gpt-4o-mini';
const SYSTEM_PROMPT = "You are the MIVSO AI Assistant. You help real estate agents choose the right AI skills tier ($19 / $29 / $39) and explain MIVSO's pre-built autonomous agents and AI capabilities. Keep your replies concise and conversational.";

// Use global to persist across local hot-reloads in server.js dev environment
global.rateLimitMap = global.rateLimitMap || new Map();
const rateLimitMap = global.rateLimitMap;

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

    // 1. Check Straico API Key existence
    const apiKey = process.env.STRAICO_API_KEY;
    if (!apiKey) {
        console.error('[api/chat.js] STRAICO_API_KEY is not configured in the environment.');
        return res.status(500).json({ error: 'Internal Server Error: Straico API key is not configured on the server.' });
    }

    try {
        const { messages } = req.body || {};
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Messages history is required' });
        }

        // 2. Enforce Daily Rate Limit (Max 25 requests per UTC calendar day per IP)
        const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket.remoteAddress || 'unknown';
        const todayUtc = new Date().toISOString().split('T')[0];
        const rateLimitKey = `${ip}::${todayUtc}`;

        const count = rateLimitMap.get(rateLimitKey) || 0;
        if (count >= 25) {
            console.warn(`[api/chat.js] Rate limit reached for IP: ${ip} on UTC: ${todayUtc}`);
            return res.status(429).json({
                reply: "You've reached the daily limit of 25 messages. Please come back tomorrow!"
            });
        }
        rateLimitMap.set(rateLimitKey, count + 1);

        // 3. Trim Chat History before sending to Straico
        const systemMsg = { role: 'system', content: SYSTEM_PROMPT };
        let nonSystemMsgs = messages.filter(m => m.role !== 'system');

        // Keep only the last 10 non-system messages
        if (nonSystemMsgs.length > 10) {
            nonSystemMsgs = nonSystemMsgs.slice(-10);
        }

        // Helper to approximate word count
        function countWords(msgs) {
            return msgs.reduce((total, msg) => {
                const text = typeof msg.content === 'string' ? msg.content : '';
                return total + text.trim().split(/\s+/).filter(Boolean).length;
            }, 0);
        }

        // Drop oldest message pairs if total word count (including system message) exceeds 5,000 words
        while (nonSystemMsgs.length > 0 && countWords([systemMsg, ...nonSystemMsgs]) > 5000) {
            if (nonSystemMsgs.length >= 2) {
                nonSystemMsgs = nonSystemMsgs.slice(2); // Drop the oldest user/assistant pair
            } else {
                nonSystemMsgs = nonSystemMsgs.slice(1); // Drop single remaining message
            }
        }

        const finalMessages = [systemMsg, ...nonSystemMsgs];

        // 4. Send Request to Straico with 25-Second Timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 25000);

        let response;
        try {
            response = await fetch('https://api.straico.com/v0/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: DEFAULT_MODEL,
                    messages: finalMessages.map(msg => ({
                        role: msg.role === 'assistant' ? 'assistant' : msg.role === 'system' ? 'system' : 'user',
                        content: msg.content
                    }))
                }),
                signal: controller.signal
            });
        } catch (err) {
            if (err.name === 'AbortError') {
                console.error('[api/chat.js] Request to Straico timed out after 25 seconds.');
                return res.status(504).json({ error: 'Gateway Timeout: Request to Straico timed out.' });
            }
            throw err; // Re-throw other fetch errors to be caught in outer try-catch
        } finally {
            clearTimeout(timeoutId);
        }

        // 5. Check Straico Response Status
        if (!response.ok) {
            const errBody = await response.text();
            console.error('[api/chat.js] Straico API error response:', response.status, errBody);
            return res.status(502).json({ error: `Bad Gateway: Straico API responded with status ${response.status}.` });
        }

        // 6. Parse and Validate Response Body Shape
        const data = await response.json();
        if (!data || !data.choices || !data.choices[0] || !data.choices[0].message || typeof data.choices[0].message.content !== 'string') {
            console.error('[api/chat.js] Unexpected response shape from Straico:', JSON.stringify(data));
            return res.status(502).json({ error: 'Bad Gateway: Unexpected response shape from Straico API.' });
        }

        const replyText = data.choices[0].message.content;
        return res.status(200).json({ reply: replyText });

    } catch (err) {
        console.error('[api/chat.js] Server error in chat handler:', err);
        return res.status(502).json({ error: 'Bad Gateway: An error occurred while communicating with the AI service.' });
    }
};

/**
 * PRODUCTION-GRADE RATE LIMITING PATH WITH REDIS / VERCEL KV
 * 
 * If you want strict cross-instance rate limiting that works seamlessly across all Vercel function
 * environments without clearing counts on worker recycling, replace the Map logic above with:
 * 
 * const { kv } = require('@vercel/kv'); // or use @upstash/redis
 * 
 * In the handler:
 * 
 * const limit = 25;
 * const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket.remoteAddress || 'unknown';
 * const todayUtc = new Date().toISOString().split('T')[0];
 * const rateLimitKey = `ratelimit:${ip}:${todayUtc}`;
 * 
 * try {
 *     const currentRequests = await kv.incr(rateLimitKey);
 *     if (currentRequests === 1) {
 *         // Set TTL to expire key at end of calendar day (or 24h)
 *         await kv.expire(rateLimitKey, 86400);
 *     }
 *     if (currentRequests > limit) {
 *         return res.status(429).json({
 *             reply: "You've reached the daily limit of 25 messages. Please come back tomorrow!"
 *         });
 *     }
 * } catch (kvErr) {
 *     console.error('Vercel KV Error, falling back to permissive mode:', kvErr);
 *     // Optionally proceed with best-effort in-memory map or log and pass
 * }
 */
