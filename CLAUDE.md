# MIVSO — Project Documentation & Source of Truth

This document serves as the comprehensive source of truth for the MIVSO project. It covers architecture, workflows, environment setup, and deployment strategies.

> **Last updated**: Sorted skills in category accordions to display free/unlocked skills at the top and locked skills at the bottom. Split "The Difference" section into separate cards, and styled section headings into pill shapes for elevated design. Beautified "The Difference" section and "How It Works" labels. Added "How It Works" section, standardized typography across UI cards, and updated checkout banner button to smooth-scroll to Pricing. Added the "Personas" grid section below the skills catalog to showcase all 7 personas. Added "The Difference" section and updated the "What's Inside" catalog headline in products.html to match new design specs. Navbar consistency (all 3 pages: Home | Products | Services | How it works | About | Get in touch), SKILL.md always index 0 + REQUIRED, all companion files OPTIONAL.

---

## Section 1 — Project Identity

**MIVSO** is a platform offering portable, pre-built, and custom AI skills and autonomous agents that you can deploy. It sells premium access to these AI skills behind a one-time paywall.

**Tech Philosophy**: 
MIVSO strictly adheres to a minimalist, dependency-light frontend.
* **Vanilla HTML, CSS, and JS only**
* **No frontend frameworks** (No React, Vue, etc.)
* **No bundlers** (No Webpack, Vite, etc.)
* **CDN-only imports** (Supabase SDK is loaded directly via CDN script tags)

---

## Section 2 — Full Architecture

MIVSO uses a split architecture to maintain a lightweight frontend while keeping secret keys secure on the backend.

### Architecture Layers
1. **Frontend (`/public`)**: Serves the user interface. It runs completely in the browser and handles UI state. *Why it can't handle payments natively*: The frontend cannot hold secret keys (like `STRIPE_SECRET_KEY` or `SUPABASE_SERVICE_ROLE_KEY`) because they would be exposed to users, leading to unauthorized access or theft.
2. **Local Dev Server (`server.js`)**: An Express.js server used *strictly for local testing*. It mimics Vercel's behavior by serving the `/public` files and routing `/api/*` endpoints. 
3. **Vercel Serverless (Production)**: In production, Vercel hosts the static frontend and automatically converts the `.js` files in `/api` into serverless functions.
4. **Stripe**: Handles the checkout UI, payment processing, and sends server-to-server webhook notifications when payments succeed.
5. **Supabase**: Handles the Database (PostgreSQL) and Authentication (GoTrue). We ONLY use Supabase for generating tokens and sessions; we explicitly do NOT use Supabase to send emails due to strict free tier limits (3/hour).
6. **Emailit**: Handles actual email delivery via REST API (v2). Our backend extracts the magic link from Supabase and sends it to the user directly using `POST https://api.emailit.com/v2/emails`.

### ASCII Architecture Diagram

```text
       [USER BROWSER]
       /products.html
             |
   (1) POST /api/create-checkout
             |
             v
 [BACKEND: Vercel / server.js]  ----> (2) Creates Checkout Session
             |                                    |
   Returns Stripe URL                             v
             |                                 [STRIPE]
             v                                    |
    (3) User pays on Stripe                       |
             |                                    |
             v                                    | (4) Webhook Event
(5) Redirect to /products?paid=true               v
                                       [BACKEND: /api/stripe-webhook]
                                                  |
                                                  v
                                             [SUPABASE] 
                                    - Create Auth User
                                    - Set has_paid = true
                                    - Return `action_link`
                                                  |
                                                  v
                                             [EMAILIT]
                                      - Dispatch Branded Email
```

---

## Section 3 — Directory & File Reference

| File / Folder | Purpose | Layer / Environment | Git Status |
|---------------|---------|---------------------|------------|
| `/public/index.html` | The landing page. Includes the global AI Assistant chat widget. | Frontend (All) | Commit |
| `/public/products.html` | The main product grid containing the paywall logic, Stripe redirect, and UI unlock states. Also includes the global AI Assistant chat widget. Premium cards for paid users now have `data-skill-id` attributes and click handlers that navigate to `/skill-detail.html?skill=<slug>`. | Frontend (All) | Commit |
| `/public/skill-detail.html` | Detail page for a single skill, gated behind a full auth guard (`session` + `has_paid`). Shows the skill hero, file download list, and platform integration guides across 6 tabs. | Frontend (All) | Commit |
| `/public/skills-data.js` | Plain JS file (no framework) that exports `REAL_ESTATE_SKILLS_METADATA` (a 200-entry object keyed by slug) and `loadSkillData(slug)`. Each metadata entry contains `name`, `persona`, `tier`, `lever`, and `desc`. Loaded via `<script src>` in `products.html` and `skill-detail.html`. | Frontend (All) | Commit |
| `/public/auth-callback.html` | Invisible receiver page that captures PKCE tokens from the magic link email, establishes the session, and redirects to `/products`. | Frontend (All) | Commit |
| `/api/create-checkout.js` | Generates secure Stripe Checkout sessions. MUST NEVER expose Stripe Secrets to client. | Backend (All) | Commit |
| `/api/chat.js` | Backend endpoint for the AI Assistant chat widget. | Backend (All) | Commit |
| `/api/contact.js` | Backend endpoint for handling lead/contact form submissions. | Backend (All) | Commit |
| `/api/stripe-webhook.js` | Listens for Stripe payments. Creates Supabase users and manually triggers emails via Emailit. Uses Service Role Key to bypass RLS. | Backend (All) | Commit |
| `/utils/sendEmail.js` | Emailit REST API wrapper to deliver branded transactional emails. | Backend (All) | Commit |
| `server.js` | Local Express server simulating Vercel. **Does not run in production** (Vercel ignores it). | Backend (Local Dev) | Commit |
| `vercel.json` | Configuration for Vercel deployment (e.g., increasing max duration for webhooks). | Production Config | Commit |
| `package.json` | Defines backend dependencies (`stripe`, `@supabase/supabase-js`, `express`, `cors`, `dotenv`). | Backend (All) | Commit |
| `.env` | Holds all secret keys. **MUST NEVER BE COMMITTED TO GIT.** | Environment | **DO NOT COMMIT** |

---

## Section 4 — Environment Variables

| Variable | Description | Where to find | Used By | Status | Exposure |
|----------|-------------|---------------|---------|--------|----------|
| `SUPABASE_URL` | Project API URL | Supabase > Project Settings > API | Backend | Filled | Safe |
| `SUPABASE_ANON_KEY` | Public key for frontend auth | Supabase > Project Settings > API | Frontend | Filled | Safe |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin key to bypass RLS | Supabase > Project Settings > API | Backend | Filled | **SECRET** |
| `STRIPE_SECRET_KEY` | API key to create checkouts | Stripe Dashboard > Developers > API keys | Backend | Filled | **SECRET** |
| `STRIPE_WEBHOOK_SECRET` | Used to verify webhook signature | Stripe CLI or Dashboard | Backend | Pending | **SECRET** |
| `STRIPE_PRICE_ID` | Production ID for the product | Stripe Dashboard > Products | Backend | Pending | **SECRET** |
| `EMAILIT_API_KEY` | API Key for Emailit REST API | Emailit Dashboard > API Keys | Backend | Filled | **SECRET** |
| `EMAIL_FROM` | Sender address (must be verified domain in Emailit) | Hardcoded (e.g., support@mivso.com) | Backend | Filled | Safe |
| `PORT` | Local dev server port | Local choice (usually 3000) | Local Dev | Filled | Safe |

**Note on Emailit Auth:** `sendEmail.js` uses `Authorization: Bearer ${EMAILIT_API_KEY}` to authenticate with the Emailit REST API. The sending domain (`EMAIL_FROM`) must be verified in the Emailit dashboard. Rate limit: ~10 req/s, daily limit varies by plan.

---

## Section 5 — Local Development Setup

To run the project locally from scratch:
```bash
npm install
npm run dev
```
*(The app will be available at `http://localhost:3000`)*

### Local Testing Workarounds
Because Stripe Webhooks cannot easily reach `localhost` without the Stripe CLI, two local testing mechanisms exist:

**1. The UI Backdoor (Frontend Bypass)**
If you enter `test@example.com` into the email modal and click submit, the frontend will *instantly* mock a successful login state and unlock the UI. It bypasses Stripe and the backend entirely. Useful for quick CSS/UI testing.

**2. The Fake Webhook Trigger (`POST /api/test-webhook-trigger`)**
Because installing the Stripe CLI can be tedious, `server.js` exposes this route. It contains the exact same logic as the real webhook (creates user, updates DB) but **skips Stripe signature verification**. 
* **Real Emails:** Even though this is local testing, this fake trigger **does** call the Emailit utility! If you use your real email during the test flow, you will receive an actual branded email containing a real magic link straight to your inbox.
* **How it works**: In `products.html`, when the user clicks "checkout", their email is saved to `sessionStorage`. After they pay using the test card and Stripe redirects back to `http://localhost:3000/products?paid=true`, the frontend automatically reads the email and fires `POST /api/test-webhook-trigger`. This perfectly simulates the webhook flow locally.

### Full Local Test Flow Step-by-Step
1. Visit `http://localhost:3000/products`.
2. Click **Get full access**, enter your real email, click **Continue**.
3. You are redirected to Stripe. Pay using test card: `4242 4242 4242 4242` (any future date, any CVC).
4. Stripe redirects you back to `http://localhost:3000/products?paid=true`.
5. The frontend automatically triggers `/api/test-webhook-trigger` in the background.
6. The backend creates your Supabase account, sets `has_paid = true`.
7. You see a toast: "✓ Test mode: provisioning your account...".
8. The backend extracts the `action_link` and **sends you a real branded email** via Emailit.
9. Open your email inbox, click the magic link button "Access my products →".
10. You land on `/auth-callback.html` which creates the secure session and redirects you to `/products`.
11. `/products` reads your session, queries the database, sees you paid, and unlocks the UI!

---

## Section 6 — The Complete Paywall Flow (Production)

In production on Vercel, the fake webhook trigger is ignored, and the flow works as follows:

1. **User Landing**: User visits `/products`. The JS checks `supabase.auth.getSession()`. If no session, the premium content is blurred.
2. **Checkout Initiation**: User enters email. Frontend POSTs to `/api/create-checkout`. The Vercel Serverless function securely uses `STRIPE_SECRET_KEY` to generate a Stripe Checkout URL and returns it.
3. **Payment**: User completes payment on Stripe. Stripe redirects user back to `/products?paid=true`. The user sees a toast saying "Payment successful! Check your email."
4. **Stripe Webhook (Background)**: Stripe securely POSTs to `/api/stripe-webhook`.
   - **Signature Verification**: The function uses `STRIPE_WEBHOOK_SECRET` to verify the payload came from Stripe.
   - **User Creation**: Uses Supabase Admin API (`generateLink({ type: 'magiclink' })`) to create the user identity and extract the `action_link`.
   - **Database Update**: Uses `SUPABASE_SERVICE_ROLE_KEY` to upsert `{ id, email, has_paid: true }` into `public.users`.
   - **Email Dispatch**: Calls the custom `sendEmail` utility, which sends the branded HTML email containing the magic link URL via the Emailit REST API.
5. **Magic Link Fulfillment**: User clicks the email link, lands on `/auth-callback.html`. The frontend performs the PKCE exchange via `supabase.auth.exchangeCodeForSession()`, saving the token locally, and redirects to `/products`.
6. **UI Unlock**: `/products` sees the valid session, performs an RLS-secured query to the `users` table, verifies `has_paid: true`, and removes the CSS blur/paywall elements. Each unlocked premium card now displays a "View skill →" hint and is fully clickable.
7. **Skill Detail Navigation**: Clicking an unlocked premium card navigates the user to `/skill-detail.html?skill=<slug>` (e.g. `?skill=claude-research-skill`). The skill slug is stored in `data-skill-id` on each card and is also the key used in `SKILLS` inside `skills-data.js`.
8. **Skill Detail Auth Guard**: On page load, `skill-detail.html` re-runs the same auth check — `getSession()` → query `has_paid`. If either check fails, the user is redirected back to `/products`. No skill content is ever exposed to unauthenticated or unpaid visitors.
9. **Skill Detail Rendered**: Once verified, the page reads the `?skill=` query param, looks up the matching entry in `SKILLS`, and renders the hero, download file list, and 6-tab platform integration guide.
10. **File Downloads**: Each file row has an individual Download button. The "Download all files" button loops through every file with a 300 ms delay between downloads. Downloads use `fetch()` → `Blob` → `URL.createObjectURL` — no external download library needed.
11. **Platform Guides**: Six tabs (Claude, Claude Code, OpenAI Codex, OpenRouter, Cursor, Windsurf) show numbered step-by-step guides with inline code blocks. Each code block has a "Copy → Copied ✓" button using `navigator.clipboard`.

---

## Section 7 — Supabase Reference

* **Project ID**: `pewinzitxgtnadmsyhxy`

### Database Schema (`public.users`)
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `uuid` | Primary Key, references `auth.users(id)` | User identity |
| `email` | `text` | Unique | User email |
| `has_paid` | `boolean` | Default `false` | Access control flag |
| `stripe_customer_id` | `text` | Nullable | Link back to Stripe |
| `paid_at` | `timestamptz` | Nullable | Timestamp of payment |

### Security & Row Level Security (RLS)
* **RLS is ENABLED** on the `users` table.
* **Policy**: `Users can read/update their own row` (`auth.uid() = id`).
* The frontend uses the `SUPABASE_ANON_KEY`. It can only read the row for the currently logged-in user.
* The backend webhooks use the `SUPABASE_SERVICE_ROLE_KEY` which entirely bypasses RLS, allowing it to insert/update rows for anyone (which is necessary during the webhook phase).

### Auth Settings & Intentional Email Bypass
* Email Auth (Magic Link) is enabled.
* Site URL and Redirect URIs must be configured in the Supabase Dashboard to allow redirects back to `http://localhost:3000/auth-callback.html` (and the Vercel domain later).
* **Important Bypass Note**: We intentionally DO NOT let Supabase send our emails. Supabase's free tier is strictly limited to 3 emails per hour. Instead, our backend simply asks Supabase to generate the raw `action_link` URL, and we hand that URL to Emailit to deliver the email.

---

## Section 8 — Email Service (Emailit REST API)

To circumvent Supabase limits, we use **Emailit's REST API (v2)** via native `fetch`.

### Emailit Setup & Limits
* **API Endpoint**: `POST https://api.emailit.com/v2/emails` with `Authorization: Bearer <API_KEY>`.
* **How to get API Key**: Go to Emailit Dashboard → API Keys → Create API Key.
* **Domain Verification**: Before deploying to production, you must verify your sender domain in the Emailit dashboard (Sender Authentication). Otherwise, emails may be rejected.
* **Rate Limits**: ~10 requests/second. Daily sending limit depends on your Emailit plan.
* **No SDK needed**: We use native `fetch` (supported in Node 18+ and Vercel serverless). No `nodemailer` or third-party dependency required.

---

## Section 9 — Stripe Reference

* **Status**: Currently using a Stripe Test account. Production account is pending manager setup.
* **Pricing**: We do NOT have a `STRIPE_PRICE_ID` yet. The checkout currently uses inline `price_data` to hardcode a $200 charge for "MIVSO Full Access". When going live, this should be swapped for a real Price ID.
* **Webhook Endpoint**: 
  - Local testing: Handled via the `/api/test-webhook-trigger` fake route.
  - Production: Register `https://<your-vercel-domain>/api/stripe-webhook` in the Stripe Dashboard.
* **Webhook Secret**: Once registered in Stripe, they will provide a `whsec_...` signing secret. This MUST be saved as `STRIPE_WEBHOOK_SECRET` in Vercel.

---

## Section 10 — Deployment to Vercel

### Steps to Deploy
1. Push the code to a GitHub repository.
2. Log into Vercel and import the repository.
3. Before the first deployment finishes, go to the project's **Environment Variables** settings in Vercel.

### Required Vercel Environment Variables
You MUST add the following variables in Vercel:
* `SUPABASE_URL`
* `SUPABASE_SERVICE_ROLE_KEY`
* `STRIPE_SECRET_KEY` (Live key starting with `sk_live_...`)
* `STRIPE_WEBHOOK_SECRET` (Live webhook secret)
* `EMAILIT_API_KEY`
* `EMAIL_FROM`
*(Do not include `PORT` or `SUPABASE_ANON_KEY` as anon key is hardcoded in frontend).*

### Important Production Notes
* **Vercel ignores `server.js`**. It relies solely on `vercel.json` and the `/api/` directory.
* **CRITICAL**: Before deploying to production, you MUST remove or heavily guard the `/api/test-webhook-trigger` route in `server.js` (and the trigger code in `products.html`). Otherwise, anyone could provision an account for free.

---

## Section 11 — Known Limitations & TODO

### Current Limitations
* **No Stripe CLI**: Bypassed locally using the test-trigger route.
* **Test Mode**: Only testing keys are currently available.
* **Skill files not yet hosted**: The file paths defined in `skills-data.js` (e.g. `/skills/claude-research-skill/SKILL.md`) do not yet exist in `/public`. Download buttons will show an error toast until the actual skill files are placed there.

### TODO Before Going Live
1. [ ] **Manager task**: Set up the real Stripe Production account.
2. [ ] **Email task**: Verify sender domain (`support@mivso.com`) in Emailit to ensure high deliverability. Monitor daily sending limits based on Emailit plan.
3. [ ] **Stripe task**: Create the actual Product/Price in Stripe and get the `STRIPE_PRICE_ID`. Update `create-checkout.js` to use `price: process.env.STRIPE_PRICE_ID` instead of inline `price_data`.
4. [ ] **Code Cleanup**: Remove the developer backdoor (`test@example.com`) from `/public/products.html`.
5. [ ] **Code Cleanup**: Remove the `/api/test-webhook-trigger` auto-fetch block from `/public/products.html`.
6. [ ] **Code Cleanup**: Remove the `/api/test-webhook-trigger` route from `server.js`.
7. [ ] **Dashboard Setup**: Register the live Vercel URL in the Stripe Webhooks dashboard.
8. [ ] **Vercel Setup**: Add all Live environment variables to Vercel (including Emailit).
9. [ ] **Skill Content**: Create the actual skill directories under `/public/skills/<slug>/` and populate `SKILL.md`, `prompts.md`, and any supporting files for each skill.
10. [ ] **Skill Data**: Add entries to `skills-data.js` for any new skills added to the products grid in `products.html`. The `skillId` key in the `products` array must match the key in the `SKILLS` object exactly.

---

## Section 12 — Skill Detail System

This section documents the `skill-detail.html` feature added after the initial paywall build.

### How Skills Are Defined
All skill content is defined in `/public/skills-data.js` as a plain JS object `SKILLS`. Each key is the skill's **slug** (kebab-case, e.g. `"claude-research-skill"`). Each value has:

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Human-readable skill name (used as H1 on the detail page) |
| `tagline` | string | One-line subtitle shown below the name |
| `tags` | string[] | Array of uppercase tag labels rendered as pill badges |
| `description` | string | Full paragraph description |
| `files` | object[] | Each file: `{ name, path, required }`. **`SKILL.md` is always index 0 (sorted first) and always `required: true`. Every other file (`REFERENCE.md`, `prompts.md`, etc.) is `optional: true`.** `path` is relative to the server root (e.g. `/skills/listing-and-seller/expired-listing-re-engager/SKILL.md`). |
| `platforms` | string[] | Which platform tabs to show (currently all 6 are always rendered) |

### How a New Skill Is Wired Up
To add a new premium skill end-to-end:
1. Add the product entry to the `products` array in `products.html`, including a `skillId` field matching the slug.
2. Add the matching entry to `SKILLS` in `skills-data.js`.
3. Place the actual skill files in `/public/skills/<slug>/` on the server.

### Auth Guard on `skill-detail.html`
The page runs a double check on every load — no HTML content is rendered until both checks pass:
1. `supabase.auth.getSession()` → must return a valid session.
2. Query `public.users` for `has_paid` → must be `true`.

If either check fails, the user is immediately redirected to `/products` with no skill content shown.

### Platform Guide Tabs
Six tabs are statically rendered in the HTML. Their content is hardcoded because the integration steps are the same for every skill (the user just uploads `SKILL.md` to whichever platform they use):

| Tab | Platform |
|-----|----------|
| Claude | claude.ai — file attachment flow |
| Claude Code | Terminal-based claude CLI + `CLAUDE.md` persistence |
| OpenAI Codex | System prompt injection via Playground or API |
| OpenRouter | System prompt field + API `messages` array |
| Cursor | `.cursorrules` / Settings → Rules for AI |
| Windsurf | Cascade chat panel + `.windsurfrules` file |

---

## Section 13 — Dynamic Skills System

### Overview

Skills are **auto-discovered** from the `/public/skills/` folder structure at runtime. There are no hardcoded skill arrays in `products.html`. The server reads the filesystem category and skill subfolders and returns a manifest; the frontend consumes the manifest, maps them to rich metadata using `skills-data.js`, and renders the interactive skills catalog.

**Skill Catalog: 200 skills across 14 categories**

| # | Category Folder | Manifest Slug | Skills | Tiers |
|---|---|---|---|---|
| 1 | `Lead Generation/lead-generation` | `lead-generation` | 18 | T1–T3 |
| 2 | `listing-and-seller` | `listing-and-seller` | 25 | T1–T3 |
| 3 | `buyer-representation` | `buyer-representation` | 27 | T1–T3 |
| 4 | `marketing-and-content` | `marketing-and-content` | 31 | T1–T3 |
| 5 | `negotiation` | `negotiation` | 13 | T1–T3 |
| 6 | `transaction-mgmt` | `transaction-mgmt` | 14 | T1–T3 |
| 7 | `client-retention` | `client-retention` | 14 | T1–T3 |
| 8 | `business-ops` | `business-ops` | 14 | T1–T3 |
| 9 | `compliance-and-admin` | `compliance-and-admin` | 11 | T1–T3 |
| 10 | `brokerage-ops` | `brokerage-ops` | 13 | T3 only |
| 11 | `commercial-re` | `commercial-re` | 9 | T3 only |
| 12 | `property-mgmt` | `property-mgmt` | 6 | T3 only |
| 13 | `mortgage` | `mortgage` | 2 | T3 only |
| 14 | `title-and-escrow` | `title-and-escrow` | 3 | T3 only |

---

### The `/api/skills-manifest` Endpoint

**File**: `/api/skills-manifest.js` (Vercel serverless function)  
**Local Dev**: Also registered as `GET /api/skills-manifest` in `server.js`  
**Method**: `GET`  
**Auth**: None required (returns names/slugs only)

**Response Shape**:
```json
{
  "categories": [
    {
      "name": "01. Lead Generation",
      "slug": "01-lead-generation",
      "skills": [
        {
          "name": "Expired Listing Re Engager",
          "slug": "expired-listing-re-engager",
          "folder": "01. Lead Generation",
          "free": true,
          "files": ["SKILL.md"]
        }
      ]
    }
  ]
}
```

**Logic**:
- Uses `path.join(process.cwd(), 'public', 'skills')` to scan the filesystem.
- Prettifies category names by stripping numerical sort prefixes in the frontend (e.g. `01. Lead Generation` becomes `Lead Generation`).
- Categories and skills are sorted alphabetically, ensuring consistent catalog layout.

---

### FREE vs PREMIUM (Tier-Based) Gating

Under the Real Estate AI skills model, access is gated based on three pricing tiers:

| Skill Tier | Price | Access Rights / Gating Rule |
|------------|-------|-----------------------------|
| **Tier $19** (Top 50) | $19 | **FREE PREVIEW**: Always visible, unblurred, and downloadable by guests and all users without auth. Ranks 1–50. |
| **Tier $29** (Top 100) | $29 | **PREMIUM**: Locked/blurred for guests and $19 tier users. Unlocked for users with `tier >= 29`. Ranks 51–100. |
| **Tier $39** (Top 200) | $39 | **PREMIUM**: Locked/blurred for guests, $19 tier, and $29 tier users. Unlocked only for users with `tier = 39`. Ranks 101–200. |

**Persona types in `skills-data.js`:**
- `BUYER & SELLER` — general residential agents (CSS: `badge-persona-buyer_and_seller`)
- `BUYER` — buyer-side skills (CSS: `badge-persona-buyer`)
- `SELLER` — seller-side skills (CSS: `badge-persona-seller`)
- `BROKER/TEAM` — brokerage operations (CSS: `badge-persona-broker-team`)
- `CRE` — commercial real estate (CSS: `badge-persona-cre`)
- `PM` — property management (CSS: `badge-persona-pm`)
- `TITLE` — title & escrow (CSS: `badge-persona-title`)
- `MORTGAGE` — mortgage origination (CSS: `badge-persona-mortgage`)

Access checks are executed client-side in `/public/products.html` (for blurring/gating rows) and in `/public/skill-detail.html` (via `loadSkillData()` and Supabase session verification to prevent direct access to premium folders). If a user attempts to view a gated detail page without the appropriate tier, they are redirected back to the products catalog.

---

### How to Add a New Skill

Drop a folder into the correct category directory:

```
/public/skills/<Category Name>/<skill-slug>/
  SKILL.md         ← always required, always shown first
  REFERENCE.md     ← optional (shown after SKILL.md)
  prompts.md       ← optional (shown after SKILL.md)
```

**File ordering rule in `skills-data.js` → `loadSkillData()`**:
- Files are sorted so `SKILL.md` is always index 0, regardless of filesystem order
- `required` is set to `true` only for `SKILL.md`; all other files default to `optional`
- Sort is stable — non-SKILL.md files retain their original relative order

**Rules**:
- Folder name = slug (used in URLs and file paths — never rename after publishing)
- The manifest endpoint picks it up automatically on next request — no code changes needed
- First 3 alphabetically in a category = free; 4th+ = premium

---

### File Download Path Encoding

When building file download URLs, **each segment must be encoded separately**:

```js
`/skills/${encodeURIComponent(categoryFolder)}/${encodeURIComponent(skillSlug)}/${encodeURIComponent(fileName)}`
```

❌ Do NOT encode the whole URL at once — this will double-encode separating slashes.  
✅ Encode each path segment (category, slug, filename) individually.

---

### `skills-data.js` — `REAL_ESTATE_SKILLS_METADATA` + `loadSkillData(slug)`

`REAL_ESTATE_SKILLS_METADATA` is a keyed object with **200 entries** (one per skill slug). Each entry has:
- `name` — canonical display name matching the CATEGORY_SUMMARY.md
- `persona` — one of: `BUYER & SELLER`, `BUYER`, `SELLER`, `BROKER/TEAM`, `CRE`, `PM`, `TITLE`, `MORTGAGE`
- `tier` — `19`, `29`, or `39`
- `lever` — `Revenue ↑`, `Cost ↓`, or `Opportunity & Risk`
- `desc` — one-sentence description shown in the catalog row

The async `loadSkillData(slug)` function:
1. Fetches `/api/skills-manifest`
2. Finds the skill matching `slug`
3. Returns a skill object with `name`, `tagline`, `tags`, `description`, `free`, `category`, `files`, `platforms`
4. Returns `null` if slug not found or manifest fails

---

### `skill-detail.html` — Auth Guard Logic

```
IF skill.free === true:
  → No auth check. Render immediately for everyone.

IF skill.free === false (PREMIUM):
  → getSession() — if no session → redirect to /products
  → query has_paid — if false → redirect to /products
  → if both pass → render page
```

---

### Local Dev vs Production

| Environment | Skills manifest served by |
|-------------|--------------------------|
| Local dev (`npm run dev`) | `server.js` — `GET /api/skills-manifest` route |
| Production (Vercel) | `/api/skills-manifest.js` serverless function |

Both use identical logic with `process.cwd()` to resolve the skills directory.

---

## Section 14 — AI Assistant & Contact Form

### AI Assistant Chat Widget
A global, floating AI assistant chat widget is embedded on the main entry points (`index.html` and `products.html`). 
- **Frontend**: A custom vanilla JS/CSS floating action button (FAB) that opens a chat panel. It handles its own UI state, including message bubbles, typing indicators, and message history array (`role`, `content`).
- **Backend (`/api/chat.js`)**: An endpoint that receives the chat history, communicates with an AI provider (e.g. Claude or OpenAI), and returns a textual response. The widget expects `{ "reply": "message string" }`.

### Contact Form
The main contact/lead generation form (located on the landing page) sends data to the server without page reloads.
- **Frontend**: Prevents default form submission, serializes data, and uses `fetch` to POST to `/api/contact`. Updates the UI with success/error messages directly.
- **Backend (`/api/contact.js`)**: An endpoint that processes the lead submission (e.g., storing it in Supabase, or sending an email notification). It returns `{ "message": "Success text" }` on success or `{ "error": "Error text" }` on failure.
