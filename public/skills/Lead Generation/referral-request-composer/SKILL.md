---
name: referral-request-composer
description: "Use this skill whenever an agent wants to ask for referrals in a warm, specific, well-timed way after a closing, life event, market win, review, or client check-in. Triggers include referral request, ask past client for referrals, warm referral text, review-to-referral, or referral campaign. Produces a polished Word document with personalized referral asks, scripts, and thank-you follow-up."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Creates referral request language that feels timely and personal instead of awkward. The agent receives a Word document with referral asks for text, email, phone, social direct message, and thank-you follow-up.

## How to Run This Skill
1. Tell Claude: "Compose referral requests for my clients"
2. Provide:
- The client or contact relationship
- The recent trigger, such as closing, anniversary, review, equity update, or helpful conversation
- The kind of referral the agent wants
- Preferred tone and channels
3. Claude will ask up to 4 clarifying questions about relationship warmth, timing trigger, ideal referral type, and whether any incentive is involved before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Contact relationship | How the agent knows the person | Past seller client who closed last month |
| Referral trigger | Why now is a natural time to ask | They just left a 5-star review |
| Ideal referral | Who the agent wants to be introduced to | Anyone thinking of selling in the next year |
| Channel | Text, email, call, handwritten note, or direct message | Text and email |
| Tone | How direct or soft the ask should be | Grateful, casual, and specific |

## Output Format
A Word document named Referral_Request_Composer_<date>.docx. Structure: referral strategy summary, timing map, text message variations, email variations, phone script, direct-message versions, thank-you notes, and CRM follow-up reminder table. Approximate length: 4–6 pages.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting and choose the correct referral angle based on the relationship and timing trigger.
2. Summarize why the referral ask is timely in one sentence.
3. Write referral asks for text, email, phone, and direct message, each with a soft and a direct variation.
4. Make the ask specific enough to be useful but not so narrow that the contact feels pressured.
5. Add a thank-you response for three outcomes: referral sent, no referral now, and contact asks for more information.
6. Create a short CRM follow-up table with reminder timing and notes to record.
7. If an incentive or gift is mentioned, add a broker-policy reminder and avoid promising anything that may be restricted.
8. Format the Word document as a copy-ready script pack.

## Fair Housing & Compliance Notes
Do not offer referral compensation, gifts, or incentives unless the agent confirms brokerage policy and local rules allow it. Do not pressure clients or imply an obligation to refer. Avoid protected-class language when describing ideal referrals. Keep referral asks relationship-based and professional.

## Sample Trigger Phrases
- Write a referral ask for a past client
- Ask my sphere for referrals without sounding needy
- Compose referral texts after a closing
- Create a referral request campaign
- Turn this review into a referral ask
