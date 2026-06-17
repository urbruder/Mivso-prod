---
name: expired-listing-re-engager
description: "Use this skill whenever an agent wants to win an expired listing, diagnose why the prior listing failed, or create a relist outreach plan. Triggers include expired listing, relist sequence, win back a seller, old listing did not sell, or diagnose my failed listing. Produces a polished Word document with a failure diagnosis, scripts, and a multi-touch re-engagement plan."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Turns an expired or withdrawn listing into a respectful seller re-engagement package. The agent receives a polished Word document with a plain-English diagnosis, outreach sequence, call script, email, text messages, and a relist meeting agenda.

## How to Run This Skill
1. Tell Claude: "Build an expired listing re-engagement kit"
2. Provide:
- The property address and basic listing facts
- Prior list price, days on market, price reductions, and known showing feedback
- Seller context, preferred tone, and any relationship history
- The agent’s proposed next step, such as a relist meeting or pricing review
3. Claude will ask up to 4 clarifying questions about the likely reason the listing failed, the seller relationship, timeline, and the desired call to action before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property address | The expired, canceled, or withdrawn listing address | 123 Oak Street |
| Prior listing facts | List price, days on market, reductions, showing count, feedback, and marketing notes | $625,000, 91 days on market, one reduction, feedback said photos were dark |
| Seller context | What the seller wanted and what may be sensitive now | Seller still wants to move before fall but feels frustrated |
| Agent proof | Relevant success story, local sale, relaunch strategy, or positioning point | Sold two nearby homes after pricing and photo refreshes |
| Preferred tone | The voice the outreach should use | Warm, consultative, not pushy |

## Output Format
A Word document named with the property street name and current date, such as Expired_Listing_Reengagement_123_Oak_2026-06-17.docx. Structure: 1-page executive summary, failure-diagnosis table, seller-facing relist story, 10-day outreach sequence, phone script, voicemail, email, text messages, leave-behind meeting agenda, and next-step checklist. Approximate length: 5–8 pages.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting and use the failure-diagnosis grid to organize the analysis.
2. Identify the most likely reasons the listing did not sell using only the facts provided: pricing, presentation, access, marketing reach, timing, condition, or communication gaps.
3. Write a short seller-facing diagnosis that is empathetic and avoids blaming the seller, the prior agent, or the market unfairly.
4. Create a 10-day outreach sequence with day, channel, message goal, exact message copy, and follow-up action.
5. Write one call script, one voicemail, two email variations, and three concise text messages that invite a conversation instead of demanding the listing.
6. Include a relist meeting agenda with three sections: what happened, what changes now, and what the seller can expect in the first 14 days.
7. Format the Word document with clear headings, tables for the diagnosis and sequence, short paragraphs, and a final printable checklist.
8. Name the file using the property street name and current date, then present the completed Word document to the client.

## Fair Housing & Compliance Notes
Do not disparage another agent, brokerage, or seller. Do not claim a guaranteed sale, guaranteed price, or standard commission. Avoid protected-class references, school-quality claims, or neighborhood demographic language. Use only property facts, market activity supplied by the agent, and professional recommendations.

## Sample Trigger Phrases
- Build an expired listing re-engagement kit for 123 Oak
- Help me win back this expired seller
- Diagnose why this listing failed and write a relist sequence
- Create outreach for a canceled listing
- Write my expired listing call script and emails
