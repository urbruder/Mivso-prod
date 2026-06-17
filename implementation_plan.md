# MIVSO Session + Paywall Flow

Implement a persistent session and Stripe paywall flow for the MIVSO website — Supabase for auth/database, Stripe for payments, all vanilla JS with CDN imports.

## Supabase Project Details (from MCP)

| Key | Value |
|-----|-------|
| Project ID | `pewinzitxgtnadmsyhxy` |
| API URL | `https://pewinzitxgtnadmsyhxy.supabase.co` |
| Anon Key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBld2lueml0eGd0bmFkbXN5aHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwODk3OTUsImV4cCI6MjA5NjY2NTc5NX0.yzqoc1amNtHEA9U3vexfowonHak7Ak2BUfNWZvEBs0w` |
| Existing tables | None |

---

## Proposed Changes

### 1. Supabase Database (via MCP `apply_migration`)

Create the `users` table and RLS policies in a single migration.

```sql
-- users table
CREATE TABLE public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  has_paid BOOLEAN NOT NULL DEFAULT FALSE,
  stripe_customer_id TEXT,
  paid_at TIMESTAMPTZ
);

-- RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own row"
  ON public.users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own row"
  ON public.users FOR UPDATE
  USING (auth.uid() = id);

-- Service role needs to INSERT/UPSERT from webhooks, which bypasses RLS by default
```

> [!NOTE]
> The Stripe webhook uses the **service role key**, which bypasses RLS — so no INSERT policy is needed for the webhook flow.

---

### 2. Frontend Pages

#### [NEW] [products.html](file:///d:/mivso/public/products.html)

Full products/skills page with the same MIVSO brand styling (same nav, fonts, colors extracted from `index.html`). Features:

- **On load**: calls `supabase.auth.getSession()`
- **No session → Locked view**: shows 2–3 free sample skill cards in full, remaining cards blurred with a lock overlay, and a "Get Full Access" CTA button that triggers Stripe Checkout
- **Session + `has_paid = false`**: same locked view, payment pending messaging
- **Session + `has_paid = true`**: full unlocked product list (6 skill cards visible)
- Supabase JS loaded via CDN: `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js`
- Uses `const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)`
- Nav updated: adds "Products" link, logout button when signed in

#### [NEW] [auth-callback.html](file:///d:/mivso/public/auth-callback.html)

Simple redirect page:
- Supabase JS CDN loaded
- Calls `supabase.auth.exchangeCodeForSession()` to handle PKCE magic link redirect
- Shows a brief "Signing you in…" message
- Redirects to `/products` on success
- Shows error message on failure

---

### 3. API Routes (Vercel Serverless)

#### [NEW] [create-checkout.js](file:///d:/mivso/api/create-checkout.js)

- POST handler receiving `{ email }` in body
- Uses `stripe` npm package (Vercel auto-installs from `package.json`)
- Creates a Stripe Checkout Session:
  - `mode: 'payment'` (one-time)
  - `line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }]`
  - `customer_email: email`
  - `success_url` → site `/products?paid=true`
  - `cancel_url` → site `/products?cancelled=true`
- Returns `{ url }` for client-side redirect

#### [NEW] [stripe-webhook.js](file:///d:/mivso/api/stripe-webhook.js)

- POST handler for Stripe webhook events
- **Requires raw body** — `vercel.json` must set `bodyParser: false` for this route
- Verifies Stripe webhook signature using `STRIPE_WEBHOOK_SECRET`
- Handles `checkout.session.completed`:
  1. Extracts `customer_email` and `customer` (Stripe customer ID) from event
  2. Uses Supabase **service role** client to upsert into `users` table:
     - Sets `has_paid = true`, `stripe_customer_id`, `paid_at = now()`
  3. Calls `supabase.auth.admin.generateLink({ type: 'magiclink', email, options: { redirectTo: 'https://YOUR_DOMAIN/auth-callback' } })` to send the magic link
- Returns 200

#### [NEW] [package.json](file:///d:/mivso/package.json)

```json
{
  "private": true,
  "dependencies": {
    "stripe": "^17.0.0",
    "@supabase/supabase-js": "^2.49.0"
  }
}
```

> [!IMPORTANT]
> `@supabase/supabase-js` is needed server-side for the webhook. `stripe` is needed for both API routes.

---

### 4. Configuration

#### [MODIFY] [vercel.json](file:///d:/mivso/vercel.json)

Add the `functions` block to disable body parsing for the Stripe webhook route:

```diff
 {
     "$schema": "https://openapi.vercel.sh/vercel.json",
     "cleanUrls": true,
+    "functions": {
+        "api/stripe-webhook.js": {
+            "maxDuration": 10
+        }
+    },
     "headers": [
```

> [!NOTE]
> Vercel's Node.js runtime doesn't have a `bodyParser: false` config in `vercel.json` — instead, we'll read the raw body from `req` directly using `micro`'s `buffer()` helper (or manual stream reading) inside the webhook handler. This is the standard pattern for Stripe signature verification on Vercel.

#### [MODIFY] [index.html](file:///d:/mivso/public/index.html)

Add a "Products" nav link to the header navigation and footer links.

---

### 5. Environment Variables

> [!IMPORTANT]
> The following must be added to the **Vercel dashboard** (Settings → Environment Variables) before deploying:

| Variable | Where to get it | Used in |
|----------|----------------|---------|
| `SUPABASE_URL` | `https://pewinzitxgtnadmsyhxy.supabase.co` (already known) | `products.html`, API routes |
| `SUPABASE_ANON_KEY` | Already retrieved above | `products.html`, `auth-callback.html` |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Dashboard → Settings → API → `service_role` key | `stripe-webhook.js` |
| `STRIPE_SECRET_KEY` | Stripe Dashboard → API keys | `create-checkout.js`, `stripe-webhook.js` |
| `STRIPE_WEBHOOK_SECRET` | Stripe Dashboard → Webhooks → Signing secret | `stripe-webhook.js` |
| `STRIPE_PRICE_ID` | Stripe Dashboard → Products → Price ID (e.g. `price_xxx`) | `create-checkout.js` |

> [!WARNING]
> The `SUPABASE_ANON_KEY` and `SUPABASE_URL` will be **hardcoded** in the frontend HTML files (they are designed to be public/publishable). The service role key is **server-side only** and must never appear in frontend code.

---

## Open Questions

> [!IMPORTANT]
> **Domain URL**: The Stripe Checkout `success_url` / `cancel_url` and Supabase magic link `redirectTo` need your production domain. Should I use `https://mivso.com`, `https://mivso.vercel.app`, or another domain? For now I'll use a relative path pattern for Vercel (`https://${req.headers.host}/...`).

> [!IMPORTANT]
> **Stripe Price**: You need to create a Product + Price in Stripe Dashboard first (or I can use a placeholder `STRIPE_PRICE_ID` env var). What should the product name and price be?

> [!IMPORTANT]  
> **Supabase Auth Redirect URL**: You need to add your site URL to the Supabase Dashboard under Authentication → URL Configuration → Redirect URLs (e.g. `https://your-domain.com/auth-callback`). I'll document this but can't configure it via MCP.

---

## Verification Plan

### Automated Tests
- After creating files, run `node -e "require('./api/create-checkout.js')"` to verify the serverless functions parse without syntax errors (dependency check only)

### Manual Verification
1. Deploy to Vercel (`git push` triggers auto-deploy)
2. Add all 6 environment variables in Vercel dashboard
3. Create a Stripe product + price, set `STRIPE_PRICE_ID`
4. Create a Stripe webhook endpoint pointing to `https://your-domain/api/stripe-webhook` for `checkout.session.completed`
5. Visit `/products` → should see locked view
6. Click "Get Full Access" → redirects to Stripe Checkout
7. Complete test payment → webhook fires → magic link email sent
8. Click magic link → `/auth-callback` → redirected to `/products` with full access

---

## File Summary

| File | Action | Description |
|------|--------|-------------|
| Supabase `users` table | CREATE | Migration via MCP |
| `public/products.html` | NEW | Products page with paywall |
| `public/auth-callback.html` | NEW | Magic link callback handler |
| `api/create-checkout.js` | NEW | Stripe Checkout session creation |
| `api/stripe-webhook.js` | NEW | Stripe webhook handler |
| `package.json` | NEW | Dependencies for serverless functions |
| `vercel.json` | MODIFY | Add functions config |
| `public/index.html` | MODIFY | Add Products nav link |
