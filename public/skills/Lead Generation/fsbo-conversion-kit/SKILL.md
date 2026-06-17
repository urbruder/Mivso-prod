---
name: fsbo-conversion-kit
description: "Use this skill whenever an agent wants to convert a for-sale-by-owner lead without sounding pushy. Triggers include FSBO outreach, commission objection, owner selling alone, FSBO call script, or convert a FSBO seller. Produces a polished Word document with a value-first outreach plan, scripts, objection responses, and follow-up sequence."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Creates a practical FSBO conversion package that helps the agent lead with useful seller support before asking for an appointment. The finished Word document includes outreach copy, discovery questions, objection responses, and a meeting close.

## How to Run This Skill
1. Tell Claude: "Create a FSBO conversion kit"
2. Provide:
- The FSBO property address and asking price
- Any public listing copy or seller notes the agent has
- Known seller motivation and timeline
- The agent’s strongest value points, such as pricing, negotiation, buyer screening, marketing, or safety
3. Claude will ask up to 4 clarifying questions about seller motivation, price confidence, prior agent experience, and the agent’s preferred close before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| FSBO property | Address, asking price, property type, and any known listing details | 88 Maple Ave, asking $510,000, 3 bed 2 bath |
| Seller motivation | Why the owner appears to be selling and how urgent the sale may be | Relocating for work within 60 days |
| Known objection | The seller’s likely reason for selling alone | Wants to avoid paying commission |
| Agent value proof | Relevant stats, services, negotiation experience, or recent comparable result | Helped a nearby seller get multiple offers in 8 days |
| Desired appointment | The meeting or next step the agent wants | 15-minute pricing and buyer-screening review |

## Output Format
A Word document named FSBO_Conversion_Kit_<property street>_<date>.docx. Structure: cover summary, FSBO opportunity snapshot, 7-touch outreach plan, phone opener, voicemail, email, text messages, commission-objection response page, discovery question list, appointment close, and follow-up tracker table. Approximate length: 6–9 pages.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting and use the FSBO objection map to frame the seller conversation.
2. Summarize the seller’s likely goal in one paragraph without assuming facts not provided.
3. Create a value-first opening that offers a useful resource, such as pricing feedback, buyer-screening questions, showing safety ideas, or a net-proceeds review.
4. Write a 7-touch sequence with day, channel, exact copy, purpose, and next action.
5. Write a phone script that asks permission, respects the FSBO path, and transitions into a practical seller problem the agent can solve.
6. Create objection responses for commission, timing, already have buyers, had a bad agent experience, and just testing the market.
7. Add a meeting agenda that positions the agent as a backup plan or strategy partner, not a hard closer.
8. Format the Word document with tables, bold callouts, and a final one-page quick-reference script sheet.

## Fair Housing & Compliance Notes
Do not state or imply that commissions are fixed, standard, required, or non-negotiable. Do not guarantee that using an agent produces a higher net result. Avoid legal advice about contracts, disclosures, or agency duties. Include a reminder that the agent should follow brokerage policy and local solicitation rules.

## Sample Trigger Phrases
- Write my FSBO conversion script
- Help me pre-handle the commission objection
- Create a value-first FSBO follow-up plan
- I need a kit for a seller trying to sell alone
- Build an appointment script for a FSBO lead
