---
name: neighborhood-farming-engine
description: "Use this skill whenever an agent wants a hyper-local farming campaign for a neighborhood, subdivision, condo building, or geographic farm. Triggers include neighborhood farming, quarterly mailer plan, door-knock talking points, local market campaign, or farm my database. Produces an Excel workbook with a 12-week campaign calendar, mailer copy, talking points, and lead tracker."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Builds a complete 12-week neighborhood farming plan that an agent can execute across mailers, door-knocking, email, social posts, and follow-up. The output is an Excel workbook that organizes campaign timing, copy, local stats, and lead capture.

## How to Run This Skill
1. Tell Claude: "Build a neighborhood farming campaign"
2. Provide:
- The neighborhood, subdivision, condo building, or farm area
- The audience focus, such as homeowners, move-up sellers, downsizers, investors, or buyers
- Any recent sales, inventory, price, or days-on-market stats the agent wants to use
- Preferred channels, budget, offer, and call to action
3. Claude will ask up to 5 clarifying questions about the farm area, audience, available stats, channels, and lead capture offer before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Farm area | The exact neighborhood, building, or geographic area | Cedar Ridge subdivision |
| Audience focus | Who the campaign should speak to | Homeowners considering a sale in the next 12 months |
| Local stats | Recent sales, inventory, median price, days on market, or other agent-provided facts | 6 sales in 90 days, median sale price $615,000 |
| Channels | Mailer, door-knock, email, social, phone, event, or mixed plan | Mailer plus two door-knock weekends |
| Offer or CTA | What the agent wants people to do | Request a free 2026 home value review |

## Output Format
An Excel workbook named Neighborhood_Farming_<farm area>_<date>.xlsx with five sheets: Campaign Calendar, Mailer Copy, Door-Knock Talking Points, Local Stats Bank, and Lead Tracker. Campaign Calendar columns: Week, Theme, Audience, Channel, Asset, Key Message, CTA, Due Date, Owner, Status. Approximate size: 12 campaign weeks plus 20–40 reusable message blocks.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting and use the 12-week farm themes to build a balanced campaign.
2. Create a 12-week calendar with a clear weekly theme, channel, deliverable, call to action, and follow-up step.
3. Write at least six mailer copy blocks: market update, recent sale story, seller education, buyer demand note, homeowner checklist, and invitation offer.
4. Create door-knock talking points that are conversational, local, and useful without making unsupported claims.
5. Create a Local Stats Bank sheet that separates agent-provided facts from suggested data points the agent may add later.
6. Create a Lead Tracker sheet with columns for name, address, source, conversation note, interest level, next step, follow-up date, and status.
7. Use a clean workbook layout with frozen headers, readable column widths, status dropdown guidance, and a summary row for campaign totals.
8. Name the file using the farm area and current date, then present the completed Excel workbook.

## Fair Housing & Compliance Notes
Do not use demographic, racial, religious, familial-status, disability, national-origin, or school-quality claims. Do not steer buyers toward or away from areas. Use property and market facts only. If using local statistics, label agent-provided data clearly and avoid unsupported superlatives such as safest, best, or exclusive.

## Sample Trigger Phrases
- Build a 12-week farming plan for Cedar Ridge
- Create neighborhood mailers and door-knock scripts
- Help me farm this subdivision
- Make a quarterly local market campaign
- Create a farm tracker and content calendar
