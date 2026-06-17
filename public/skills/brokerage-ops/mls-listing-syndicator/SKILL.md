---
name: mls-listing-syndicator
description: "Use this skill whenever a broker, listing manager, or marketing coordinator needs to coordinate a new MLS listing across brokerage website, agent website, social channels, email, portals, print, and internal announcements. Produces an Excel listing syndication workbook with channel checklist, asset map, posting copy, timing plan, and compliance review."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a launch control sheet that helps the brokerage make sure a new listing is consistent, compliant, and promoted across the right channels at the right time.

## How to Run This Skill
1. Tell Claude: "Build an MLS listing syndication plan"
2. Provide:
- Listing address, MLS number if available, launch date, list price, and property facts
- Brokerage channels and agent channels to update
- Photo, video, 3D tour, flyer, website, and social assets available
- MLS, brokerage, seller, or local advertising restrictions
- Tone and campaign angle for the listing
3. Claude will ask up to 7 clarifying questions about listing facts, launch timing, channels, asset readiness, compliance restrictions, seller preferences, and copy tone before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Listing facts | Address, MLS number, price, beds, baths, size, features, launch date | 45 Cedar Ct, MLS 123456, $725,000, launches Friday |
| Channels | Where the listing should appear or be announced | Brokerage site, agent site, Instagram, Facebook, email, internal Slack |
| Assets | Media and marketing pieces available | 35 photos, 90-second video, 3D tour, flyer PDF |
| Restrictions | MLS, seller, brokerage, or advertising limits | No coming-soon language after active status; no school-quality claims |
| Campaign angle | Main story or buyer hook | Updated single-story home near trails with flexible office |

## Output Format
An Excel workbook named MLS_Listing_Syndication_<address>_<date>.xlsx. Sheets: Launch Dashboard, Channel Checklist, Asset Inventory, Copy Bank, Timing Plan, Compliance Review, Post-Launch Follow-Up. Channel Checklist columns: Channel, Owner, Asset Needed, Copy Needed, Scheduled Date, Posted Date, Link or Proof, Status, Compliance Notes. Copy Bank includes short captions, email teaser, website blurb, internal announcement, and seller update copy.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before building the workbook and use its channel checklist and compliance guardrails.
2. Create Launch Dashboard first, showing launch date, listing status, asset readiness, channel readiness, and compliance-review status.
3. Create Channel Checklist with a row for each brokerage, agent, social, email, print, and internal channel the user provides.
4. Create Asset Inventory showing which assets exist, which channels need them, who owns them, and what is missing.
5. Create Copy Bank with channel-specific copy that is consistent, accurate, and avoids risky Fair Housing or MLS language.
6. Create Timing Plan that sequences MLS activation, website updates, email, social posts, internal alert, seller update, and post-launch checks.
7. Create Compliance Review with flags for price, status, attribution, photo rights, seller permissions, Fair Housing, MLS display rules, and required disclaimers.
8. Create Post-Launch Follow-Up with tasks for link checks, seller recap, engagement snapshot, and correction of broken or inconsistent posts.

## Fair Housing & Compliance Notes
Do not invent MLS rules or imply that the skill can push to MLS without the brokerage-approved process. Follow seller instructions, MLS advertising rules, photo-license rights, Fair Housing, brokerage branding rules, and local required disclosures. Avoid protected-class and school-quality claims.

## Sample Trigger Phrases
- Create a listing syndication checklist
- Coordinate this MLS launch across channels
- Build a launch plan for my new listing
- Make social and website copy for this MLS listing
- Help me syndicate a listing without missing steps
