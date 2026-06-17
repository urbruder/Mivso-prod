# MIVSO — Production Readiness Audit Report

This document outlines the security, configuration, and integration audit conducted on the MIVSO codebase to prepare the application for a safe and robust production release.

---

## 📋 Executive Summary Table

| Category | Severity | Issue / Finding | File Path(s) | Description |
| :--- | :--- | :--- | :--- | :--- |
| **1. Stripe & Webhooks** | 🔴 Critical | Missing Webhook Signature Verification | [api/stripe-webhook.js](file:///d:/mivso/api/stripe-webhook.js#L13-L19) | Webhook payload parses body directly without signature verification; anyone can forge payments and get free access. |
| **2. Developer Backdoors** | 🔴 Critical | Frontend Webhook Local Auto-Fetch | [public/products.html](file:///d:/mivso/public/products.html#L2262-L2266) | Bypasses paywall locally on `?paid=true` by directly calling `/api/test-webhook-trigger`. Bypasses checkout flow. |
| **3. Supabase Auth** | 🔴 Critical | Redirect URIs Pointing to Localhost | Supabase Dashboard | Supabase Auth magic link redirect URLs point to `http://localhost:3000` instead of the Vercel production domain. |
| **4. Env Variables** | 🔴 Critical | Missing Stripe Price ID Env Vars in Docs | [api/create-checkout.js](file:///d:/mivso/api/create-checkout.js#L23-L29) | `CLAUDE.md` documentation lists single `STRIPE_PRICE_ID` instead of `STRIPE_PRICE_ID_19`, `STRIPE_PRICE_ID_29`, and `STRIPE_PRICE_ID_39` used in code. |
| **5. Core Features** | 🔴 Critical | Broken AI Assistant Endpoint | [api/chat.js](file:///d:/mivso/api/chat.js#L1) | The serverless function file is empty (0 bytes), making the AI Assistant widget completely non-functional. |
| **6. Gating & Security** | 🟡 Warning | Client-Side Gating of Static Files | [public/skills/](file:///d:/mivso/public/skills/) | Premium skills under the public folder are accessible via direct URLs (predictable paths), bypassing payment gates. |
| **7. vercel.json** | 🟡 Warning | Low maxDuration on Webhook Handler | [vercel.json](file:///d:/mivso/vercel.json#L5-L7) | Webhook maxDuration is set to 10 seconds. Latin America/US API latency (Stripe + Supabase + Emailit) may exceed this and trigger timeouts. |
| **8. Email Service** | 🟡 Warning | Emailit Domain Verification Pending | [utils/sendEmail.js](file:///d:/mivso/utils/sendEmail.js#L12) | Sending domain `support@mivso.com` must be verified via SPF/DKIM in Emailit dashboard to avoid spam folders. |
| **9. Stripe Keys** | 🟢 Info | Stripe Keys Migration to Live Mode | [.env](file:///d:/mivso/.env#L4-L8) / Vercel Settings | Local environment uses Stripe test keys (`sk_test_...`, `whsec_...`). Live keys (`sk_live_...`) must be deployed. |
| **10. Local Dev Only** | 🟢 Info | Local Dev Express Server Config | [server.js](file:///d:/mivso/server.js) | Confirmed that `server.js` and `PORT` are local-only and safely ignored by Vercel. |
| **11. Supabase RLS** | 🟢 Info | Supabase Row Level Security Verified | Supabase Database | Confirmed RLS is enabled on `public.users` and `public.leads` tables. |

---

## 🔴 Critical Issues (Must Fix Before Launch)

### 1. Missing Webhook Signature Verification
* **File Path**: [api/stripe-webhook.js](file:///d:/mivso/api/stripe-webhook.js#L11-L20)
* **Why it breaks / vulnerability**: In local dev and in the current production webhook, the incoming request body is parsed directly without signature verification. Anyone can POST fake payloads mimicking a `checkout.session.completed` event to `/api/stripe-webhook` with a target email and tier. The handler will immediately generate a Supabase auth link, set the database flag `has_paid: true`, and send access.
* **Before / After Code Change**:
  * **Before**:
    ```javascript
    const Stripe = require('stripe');
    const { createClient } = require('@supabase/supabase-js');
    const sendEmail = require('../utils/sendEmail');

    module.exports = async function handler(req, res) {
        if (req.method !== 'POST') { ... }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        let event;
        try {
            event = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        } catch (err) {
            console.error('Failed to parse webhook body:', err.message);
            return res.status(400).send('Invalid JSON body');
        }

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            // ... processing logic ...
        }
    ```
  * **After**:
    To properly verify Stripe signatures on Vercel, we must disable default body parsing for this serverless function and parse the raw request body.
    ```javascript
    const Stripe = require('stripe');
    const { createClient } = require('@supabase/supabase-js');
    const sendEmail = require('../utils/sendEmail');

    // Disable Vercel body parser to get the raw body needed for signature verification
    module.exports.config = {
        api: {
            bodyParser: false,
        },
    };

    // Helper function to read raw request body
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
            // ... rest of processing logic remains identical ...
        }
    ```
* **Step-by-step fix instructions**:
  1. Replace the top sections of [api/stripe-webhook.js](file:///d:/mivso/api/stripe-webhook.js) with the verified version above.
  2. Register your Vercel production webhook URL (`https://your-domain.com/api/stripe-webhook`) in your Stripe Live Dashboard.
  3. Retrieve the signing secret (`whsec_...`) and add it to your Vercel project environment variables as `STRIPE_WEBHOOK_SECRET`.

---

### 2. Frontend Webhook Local Auto-Fetch Backdoor
* **File Path**: [public/products.html](file:///d:/mivso/public/products.html#L2262-L2266)
* **Why it breaks / vulnerability**: In local development, the frontend auto-fetches `/api/test-webhook-trigger` to simulate Stripe's webhook when redirecting to `/products?paid=true`. In production, this allows users to bypass the paywall entirely if they manually append `?paid=true` to their URL and have their session storage populated, or if they just trigger a POST to `/api/test-webhook-trigger` (which on Vercel will 404, but is still bad practice and leaks local dev workarounds).
* **Before / After Code Change**:
  * **Before**:
    ```javascript
                if (email && tier) {
                    showToast('✓ Payment received! Check your email for your access link.', 'ok');
                    fetch('/api/test-webhook-trigger', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, tier: parseInt(tier) })
                    }).catch(err => console.error('Test webhook trigger failed:', err));
                    sessionStorage.removeItem('checkout_email');
                    sessionStorage.removeItem('checkout_tier');
                } else {
    ```
  * **After**:
    In production, the frontend must not attempt to trigger any webhook endpoint. The backend webhook is handled server-to-server by Stripe.
    ```javascript
                if (email && tier) {
                    showToast('✓ Payment received! Check your email for your access link.', 'ok');
                    sessionStorage.removeItem('checkout_email');
                    sessionStorage.removeItem('checkout_tier');
                } else {
    ```
* **Step-by-step fix instructions**:
  1. Modify [public/products.html](file:///d:/mivso/public/products.html#L2262-L2266) to remove the `fetch('/api/test-webhook-trigger', ...)` block entirely.
  2. Keep the `sessionStorage.removeItem` lines so the local state cleans up correctly after a redirect.

---

### 3. Supabase Auth Redirect URIs Configuration
* **File Path**: Supabase Dashboard (Auth -> URL Configuration)
* **Why it breaks in production**: When the user clicks the magic link in the Emailit email, Supabase processes the token and redirects the user to the URL specified by `redirectTo`. In `/api/stripe-webhook.js`, this parameter is configured dynamically:
  ```javascript
  redirectTo: `https://${host}/auth-callback`
  ```
  If `https://${host}/auth-callback` (the Vercel production domain) is not listed in Supabase Allowed Redirect URLs, Supabase will refuse to redirect the user to the production site and will instead redirect them back to the hardcoded `Site URL` configuration (which currently points to `http://localhost:3000` in local dev setup). This leaves live production users stuck on a broken `localhost` page.
* **Fix**:
  1. Open the [Supabase Dashboard](https://supabase.com).
  2. Navigate to **Authentication -> URL Configuration**.
  3. Change the **Site URL** to your live production domain (e.g., `https://mivso.com`).
  4. In the **Redirect URLs** section, add your production domains:
     - `https://mivso.com/auth-callback`
     - `https://mivso.vercel.app/auth-callback` (or your specific Vercel preview URLs)

---

### 4. Missing Stripe Price ID Environment Variables in Docs
* **File Path**: [api/create-checkout.js](file:///d:/mivso/api/create-checkout.js#L23-L29) / [CLAUDE.md](file:///d:/mivso/CLAUDE.md#L220-L228)
* **Why it breaks in production**: The checkout API handler retrieves price IDs dynamically using:
  ```javascript
  const priceIdKey = `STRIPE_PRICE_ID_${parsedTier}`;
  const priceId = process.env[priceIdKey];
  ```
  This means the environment variables `STRIPE_PRICE_ID_19`, `STRIPE_PRICE_ID_29`, and `STRIPE_PRICE_ID_39` must be set in Vercel. However, `CLAUDE.md` Section 10 only lists a generic `STRIPE_PRICE_ID` and does not mention these tier-specific variables. If the deployment engineer only copies variables from the documentation list, checkout sessions will instantly fail with a 500 error: `Price configuration missing for tier X`.
* **Fix**:
  1. Create three separate products/prices in the Stripe Live Dashboard corresponding to your three pricing tiers:
     - Tier $19 (Starter/Top 50)
     - Tier $29 (Growth/Top 100)
     - Tier $39 (Pro/Top 200)
  2. Add the three resulting price IDs to your Vercel project environment variables:
     - `STRIPE_PRICE_ID_19` (e.g., `price_live_...`)
     - `STRIPE_PRICE_ID_29` (e.g., `price_live_...`)
     - `STRIPE_PRICE_ID_39` (e.g., `price_live_...`)

---

### 5. Broken AI Assistant Endpoint
* **File Path**: [api/chat.js](file:///d:/mivso/api/chat.js#L1)
* **Why it breaks**: The `api/chat.js` file is currently empty (0 bytes) and there is no chat route set up in `server.js` for local dev. Any click on the chat FAB widget will send a request to `/api/chat` which returns empty results or errors out, displaying a "Connection hiccup" error toast to the user.
* **Fix**:
  Implement a lightweight chat handler inside [api/chat.js](file:///d:/mivso/api/chat.js) that integrates with an AI provider (such as Anthropic or OpenAI) and returns the reply matching the frontend format:
  ```javascript
  // api/chat.js
  module.exports = async function handler(req, res) {
      if (req.method !== 'POST') {
          return res.status(405).json({ error: 'Method not allowed' });
      }
      try {
          const { messages } = req.body || {};
          if (!messages || !Array.isArray(messages)) {
              return res.status(400).json({ error: 'Messages history is required' });
          }

          // Replace with your actual AI API call (e.g., OpenAI or Anthropic fetch)
          const reply = "This is a placeholder reply. To activate, connect api/chat.js to Anthropic Claude or OpenAI GPT-4 API.";

          return res.status(200).json({ reply });
      } catch (err) {
          console.error('Chat API error:', err);
          return res.status(500).json({ error: 'Failed to process chat' });
      }
  };
  ```

---

## 🟡 Warning Issues (Important Optimizations)

### 6. Client-Side Gating & Predictable Static Paths for Premium Files
* **File Path**: [public/skills/](file:///d:/mivso/public/skills/)
* **Why it represents a risk**: The client-side logic blurs the products grid rows and restricts access on `skill-detail.html`. However, the premium files are stored as plain files inside the `/public` folder (e.g., `/public/skills/buyer-representation/vacation-second-home-advisor/SKILL.md`). Because the folder structure is completely static and the paths are predictable, any user (or web crawler) who knows the folder naming convention can download the premium `SKILL.md` files directly using their browser or `curl` (e.g., `https://mivso.com/skills/buyer-representation/vacation-second-home-advisor/SKILL.md`) without paying or registering.
* **Recommended Architecture Fix**:
  1. Move the `/public/skills` directory to a non-public folder in the project root, such as `/skills` (this keeps it accessible to the Node.js serverless environment but hides it from direct Vercel static asset routing).
  2. Implement an authenticated download serverless function at `/api/download-skill.js`:
     ```javascript
     // api/download-skill.js
     const fs = require('fs');
     const path = require('path');
     const { createClient } = require('@supabase/supabase-js');

     module.exports = async function handler(req, res) {
         const { category, slug, file } = req.query || {};
         if (!category || !slug || !file) {
             return res.status(400).json({ error: 'Missing parameters' });
         }

         // 1. Check if the skill is free
         // In MIVSO, the first 3 skills in a category (alphabetically) are free.
         // You can check your manifest or metadata to determine if it is free.
         const isFree = false; // Add your free-tier check logic here

         if (!isFree) {
             // 2. Validate session from Request Authorization headers
             const authHeader = req.headers.authorization;
             if (!authHeader) {
                 return res.status(401).json({ error: 'Unauthorized: Session missing' });
             }

             const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
             const token = authHeader.replace('Bearer ', '');
             const { data: { user }, error: authError } = await supabase.auth.getUser(token);

             if (authError || !user) {
                 return res.status(401).json({ error: 'Unauthorized: Invalid session' });
             }

             // 3. Query DB to check if they paid
             const adminSupabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
             const { data: userData } = await adminSupabase
                 .from('users')
                 .select('has_paid, tier')
                 .eq('id', user.id)
                 .single();

             if (!userData || !userData.has_paid) {
                 return res.status(403).json({ error: 'Payment required' });
             }
         }

         // 4. Read the file from the non-public root directory
         const filePath = path.join(process.cwd(), 'skills', category, slug, file);
         if (!fs.existsSync(filePath)) {
             return res.status(404).json({ error: 'File not found' });
         }

         res.setHeader('Content-Type', 'text/markdown');
         return res.status(200).send(fs.readFileSync(filePath, 'utf8'));
     };
     ```
  3. Modify `skill-detail.html` download logic to fetch files via the API endpoint:
     ```javascript
     async function downloadFile(category, slug, name) {
         const session = await sb.auth.getSession();
         const res = await fetch(`/api/download-skill?category=${category}&slug=${slug}&file=${name}`, {
             headers: {
                 'Authorization': `Bearer ${session.data.session?.access_token || ''}`
             }
         });
         // ... blob download handling ...
     }
     ```
* **Status**: If you wish to launch quickly and accept the risk of users sharing direct URLs, you can defer this change. However, you should document that this risk is accepted.

---

### 7. Stripe Webhook Timeout Limit
* **File Path**: [vercel.json](file:///d:/mivso/vercel.json#L5-L7)
* **Why it breaks**: The webhook serverless function is configured with a `maxDuration` of `10` seconds. In production, when Stripe sends a webhook:
  1. The server generates a magic link in Supabase.
  2. The server queries/upserts user status in Supabase.
  3. The server calls the Emailit REST API to dispatch the transactional email.
  If any of these services experience high latency (especially cold starts or international DNS delays), the transaction might exceed 10 seconds. Vercel will terminate the serverless function midway, leaving users with successful Stripe charges but no database records or magic link emails.
* **Before / After Configuration**:
  * **Before**:
    ```json
        "functions": {
            "api/stripe-webhook.js": {
                "maxDuration": 10
            }
        }
    ```
  * **After**:
    ```json
        "functions": {
            "api/stripe-webhook.js": {
                "maxDuration": 30
            }
        }
    ```
* **Step-by-step fix instructions**:
  1. Edit [vercel.json](file:///d:/mivso/vercel.json) and change `maxDuration` under `api/stripe-webhook.js` to `30`.

---

### 8. Emailit Domain Verification
* **File Path**: [utils/sendEmail.js](file:///d:/mivso/utils/sendEmail.js#L12)
* **Why it breaks**: The transactional email utility hardcodes the `from` email address from the `EMAIL_FROM` env var, which defaults to `support@mivso.com`. If you have not verified ownership of the `mivso.com` domain inside the Emailit Dashboard using SPF and DKIM records, mail servers (Gmail, Outlook) will reject these transactional emails or mark them as spam, meaning users will never receive their magic link access.
* **Fix**:
  1. Log into your **Emailit Dashboard**.
  2. Go to **Domains / Sender Authentication** and click **Add Domain** for `mivso.com`.
  3. Copy the generated TXT records for SPF and DKIM.
  4. Paste these TXT records into your DNS provider settings (e.g. GoDaddy, Namecheap, Route53).
  5. Click **Verify** in Emailit to ensure DNS records propagate.

---

## 🟢 Confirmed Safe (No Action Required)

* **Local Express Dev Server (`server.js`)**: Confirmed safe. Vercel ignores `server.js` and only deploys `.js` files in `/api` as serverless functions.
* **Port Env Variable (`PORT`)**: Confirmed safe. The variable is only used in `server.js` and does not need to be added to Vercel env vars.
* **Supabase Row Level Security (RLS)**: Verified using Supabase MCP. RLS is **ENABLED** on the `public.users` table and `public.leads` table. This ensures users cannot read or modify other users' access levels using client keys.
* **Supabase Anon Key**: The key hardcoded in the client HTML is confirmed safe because RLS is active. Anon key can only read the logged-in user's data.
* **Static Vanilla JS Serving**: Confirmed safe. The site serves vanilla HTML/CSS/JS without compilation steps, reducing deployment pipeline failure points.
* **Skills Integrity**: Checked all 200 categories and skill slugs. Verified that **100% of skills** have a corresponding `SKILL.md` file in their folder and that their slugs match the metadata mapping in `skills-data.js` perfectly.

---

## 🔐 Vercel Environment Variables Checklist

Ensure these variables are filled in the **Vercel Settings -> Environment Variables** dashboard before launching.

| Variable Name | Required? | Purpose | Dev Value (`.env`) | Production / Live Value | Current Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `SUPABASE_URL` | Yes | Points backend to database | `https://pewinzitxgtnadmsyhxy.supabase.co` | Same | ✅ Filled |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Bypasses RLS to write users | `eyJhbGciOiJIUzI...` | Same | ✅ Filled / SECRET |
| `STRIPE_SECRET_KEY` | Yes | Creates checkouts | `sk_test_51TEuhg...` | `sk_live_...` (Live Secret Key) | 🔴 Pending Live Key |
| `STRIPE_WEBHOOK_SECRET` | Yes | Verifies Stripe webhook origin | `whsec_IUAsyXlB...` | `whsec_...` (Live Webhook Secret) | 🔴 Pending Live Key |
| `STRIPE_PRICE_ID_19` | Yes | Price ID for Starter ($19) | `price_1TjCIPDP...` | `price_live_...` | 🔴 Pending Live Key |
| `STRIPE_PRICE_ID_29` | Yes | Price ID for Growth ($29) | `price_1TjCJvDP...` | `price_live_...` | 🔴 Pending Live Key |
| `STRIPE_PRICE_ID_39` | Yes | Price ID for Pro ($39) | `price_1TjCL3DP...` | `price_live_...` | 🔴 Pending Live Key |
| `EMAILIT_API_KEY` | Yes | Authenticates Emailit client | `secret_1bj1G...` | Same | ✅ Filled / SECRET |
| `EMAIL_FROM` | Yes | Verified sender email address | `support@mivso.com` | Same (or custom verified email) | ✅ Filled |
| `PORT` | No | Local express port | `3000` | *Do not add to Vercel* | 🚫 Local Dev Only |
| `SUPABASE_ANON_KEY` | No | Client authentication key | *Hardcoded in HTML* | *Do not add to Vercel* | 🚫 Client-Side Only |

---

## 🧪 Pre-Launch Smoke Test Checklist

Execute these steps in order to ensure the complete payment → magic link → unlock flow works end-to-end in production.

- [ ] **Step 1: Check Domain Verifications**
  - Verify that the domain `mivso.com` is authenticated in the Emailit dashboard with SPF and DKIM checks showing "Active".
- [ ] **Step 2: Database and RLS Check**
  - Ensure the `users` and `leads` tables exist in the live Supabase project database and that Row Level Security (RLS) is enabled.
- [ ] **Step 3: Webhook Verification**
  - Check the Stripe Dashboard and verify that a webhook is created pointing to `https://mivso.com/api/stripe-webhook` for the `checkout.session.completed` event.
- [ ] **Step 4: Clean Up Dev Backdoors**
  - Verify that `/api/test-webhook-trigger` is removed from [public/products.html](file:///d:/mivso/public/products.html) and check that `/api/test-webhook-trigger.js` does not exist in the `/api` folder.
- [ ] **Step 5: Supabase Auth Redirects Configuration**
  - Verify that `https://mivso.com/auth-callback` is in the Supabase Redirect URLs list.
- [ ] **Step 6: Initiate Live Purchase**
  - Go to `https://mivso.com/products` in an Incognito window (unauthenticated state).
  - Select the Pro ($39) pricing plan, enter a real test email (e.g., your personal email), and click **Continue**.
- [ ] **Step 7: Complete Payment on Stripe**
  - Verify that you are redirected to the Stripe Checkout page.
  - Complete the checkout using a live credit card (you can set up a $1 test coupon or use test mode with live keys switched off, but performing at least one live transaction is highly recommended to confirm production banking connection).
- [ ] **Step 8: Payment Redirect to Products**
  - Verify that after successful checkout, Stripe redirects you to `https://mivso.com/products?paid=true`.
  - Check that a toast alert appears: `✓ Payment received! Check your email for your access link.`
- [ ] **Step 9: Check Inbox for Magic Link**
  - Open the inbox for the email address used during checkout.
  - Find the email with the subject: `Your MIVSO access link`.
  - Check that the sender address is `support@mivso.com` (or your verified domain address) and that the email is not in the spam folder.
- [ ] **Step 10: Perform Authentication Flow**
  - Click the **Access my products →** button in the email.
  - Verify that you land on `https://mivso.com/auth-callback` (without `.html` since Vercel uses clean URLs).
  - Verify that the page shows the loading spinner, exchanges the PKCE code, and redirects you back to `/products`.
- [ ] **Step 11: Verify Premium Content Unlocked**
  - Verify that the catalog page shows `PRO Tier $39` in the header.
  - Check that all skills in the grid are unblurred and fully clickable.
- [ ] **Step 12: Test Download Gating**
  - Click on one of the premium cards (e.g., `FSBO Conversion Kit`).
  - Verify you land on `/skill-detail.html?skill=fsbo-conversion-kit`.
  - Click **Download** on the `SKILL.md` file. Confirm the file downloads locally and is populated.
