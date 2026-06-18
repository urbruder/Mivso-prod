require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

async function run() {
    const apiKey = (process.env.STRAICO_API_KEY || '').trim();
    if (!apiKey) {
        console.error('STRAICO_API_KEY is not defined in .env');
        return;
    }

    console.log('Testing v0/chat/completions with plain string content...');
    try {
        const res = await fetch('https://api.straico.com/v0/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'openai/gpt-4o-mini',
                messages: [
                    { role: 'user', content: 'Hello! Who are you?' }
                ]
            })
        });
        
        console.log('Status:', res.status);
        const text = await res.text();
        console.log('Response:', text);
    } catch (err) {
        console.error('Error:', err.message);
    }
}

run();
