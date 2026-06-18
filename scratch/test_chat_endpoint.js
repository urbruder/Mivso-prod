async function run() {
    console.log('--- 1. Testing Input Validation ---');
    try {
        const res = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        });
        console.log('Validation Status (Expected 400):', res.status);
        console.log('Validation Response:', await res.json());
    } catch (err) {
        console.error('Validation test failed:', err.message);
    }

    console.log('\n--- 2. Testing Chat Completion ---');
    try {
        const res = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [
                    { role: 'user', content: 'What is the price of the MIVSO standard tier?' }
                ]
            })
        });
        console.log('Chat Status (Expected 200):', res.status);
        const data = await res.json();
        console.log('Chat Response (Expected reply):', JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Chat completion test failed:', err.message);
    }

    console.log('\n--- 3. Testing Rate Limiting (25 requests max) ---');
    // Let's call the API 26 times in total
    // We already called it once in step 2. We will call it 25 more times.
    console.log('Sending 25 subsequent requests to trigger rate limit...');
    for (let i = 2; i <= 26; i++) {
        try {
            const res = await fetch('http://localhost:3000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [
                        { role: 'user', content: `Test message ${i}` }
                    ]
                })
            });
            console.log(`Request #${i} Status:`, res.status);
            if (res.status === 429) {
                const data = await res.json();
                console.log('Rate Limit Triggered (Expected 429):', JSON.stringify(data, null, 2));
                break;
            }
        } catch (err) {
            console.error(`Request #${i} failed:`, err.message);
        }
    }
}

run();
