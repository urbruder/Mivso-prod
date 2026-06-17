/**
 * Send a transactional email via Emailit REST API (v2).
 *
 * Accepts positional arguments: sendEmail(to, subject, html)
 * This matches the existing call sites in stripe-webhook.js and server.js.
 *
 * Rate limits: ~10 req/s, daily limit varies by plan.
 * Requires EMAILIT_API_KEY and EMAIL_FROM in environment.
 */
const sendEmail = async (to, subject, html) => {
  const apiKey = process.env.EMAILIT_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey) {
    throw new Error('EMAILIT_API_KEY is not set in environment variables');
  }
  if (!from) {
    throw new Error('EMAIL_FROM is not set in environment variables');
  }

  const response = await fetch('https://api.emailit.com/v2/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, subject, html }),
  });

  if (!response.ok) {
    let errorDetail;
    try {
      // Emailit returns { "error": "...", "details": "..." } on failure
      const errorBody = await response.json();
      errorDetail = `${errorBody.error || 'Unknown error'} — ${errorBody.details || ''}`;
    } catch {
      errorDetail = await response.text().catch(() => 'Could not read error body');
    }
    const message = `Emailit API error (${response.status} ${response.statusText}): ${errorDetail}`;
    console.error(message);
    throw new Error(message);
  }

  const result = await response.json();
  console.log(`Email sent successfully to ${to} via Emailit`);
  return result;
};

module.exports = sendEmail;
