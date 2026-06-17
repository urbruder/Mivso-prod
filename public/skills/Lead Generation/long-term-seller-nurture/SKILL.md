---
name: long-term-seller-nurture
description: "Use this skill whenever an agent needs a 12-month nurture plan for sellers who are 6, 12, or 24 months away from listing. Triggers include long-term seller nurture, future seller campaign, monthly equity email, seller drip, or 1-year seller plan. Produces an Excel workbook with monthly themes, emails, texts, postcard ideas, and follow-up tracker."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Builds a seller nurture system for homeowners who are not ready to list yet. The agent receives an Excel workbook with monthly education topics, message copy, CTAs, and follow-up actions designed to stay top-of-mind.

## How to Run This Skill
1. Tell Claude: "Build a long-term seller nurture plan"
2. Provide:
- The seller segment and likely timeline
- Known motivation, property type, and neighborhood if available
- Market facts or homeowner topics the agent wants to include
- Preferred channels and how often the agent wants to follow up
3. Claude will ask up to 5 clarifying questions about seller timeline, topics, channels, local data, and desired appointment triggers before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Seller segment | The group being nurtured | Homeowners 12–18 months from selling |
| Timeline | How far out the sellers may be | About one year |
| Property context | Neighborhood, home type, price band, or owner situation if known | Suburban move-up sellers |
| Local facts | Market or equity facts supplied by the agent | Inventory is up 14 percent year over year |
| Channel mix | Email, text, postcard, call, video, or mixed | Monthly email plus quarterly call |

## Output Format
An Excel workbook named Long_Term_Seller_Nurture_<segment>_<date>.xlsx with four sheets: 12-Month Calendar, Message Library, Seller Signals, and Follow-Up Tracker. Calendar columns: Month, Theme, Seller Concern, Channel, Email Subject, Message Summary, CTA, Follow-Up Action, Status. Message Library includes email, text, postcard, and call prompt variations.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting and use the 12-month seller topic ladder.
2. Create a 12-month nurture calendar that alternates education, market insight, equity conversation, prep checklist, and appointment invitation.
3. Write monthly email subject lines, short message summaries, text prompts, and optional postcard angles.
4. Add a Seller Signals sheet that lists behaviors indicating the seller may be moving from nurture to active lead.
5. Create follow-up actions for each signal, such as equity review request, home improvement question, moving timeline mention, or tax concern.
6. Include a tracker for last touch, next touch, interest level, motivation note, and appointment status.
7. Keep tax, equity, and pricing language educational and recommend professional advice where needed.
8. Format the workbook for easy filtering by month, channel, and lead stage.

## Fair Housing & Compliance Notes
Do not provide tax, legal, or financial advice. Do not reference protected classes or make assumptions about age, family status, disability, religion, national origin, or neighborhood demographics. Do not guarantee future home value, appreciation, sale price, or market direction.

## Sample Trigger Phrases
- Create a 12-month seller nurture plan
- Write monthly emails for future sellers
- Build a long-term seller drip campaign
- Keep 1-year-out sellers warm
- Make an equity check-in calendar
