---
name: long-cycle-buyer-nurture
description: "Use this skill whenever an agent needs a 6-to-18-month buyer nurture plan for early-stage buyers, first-time buyers, relocation buyers, or paused buyers. Triggers include long-cycle buyer nurture, buyer drip, future buyer campaign, keep buyers warm, or 18-month buyer plan. Produces an Excel workbook with education calendar, message copy, readiness signals, and follow-up tracker."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Creates a long-term buyer nurture plan that educates buyers without overwhelming them. The agent receives an Excel workbook with monthly topics, check-ins, readiness signals, and messages that gradually move buyers toward consultation and pre-approval.

## How to Run This Skill
1. Tell Claude: "Build a long-cycle buyer nurture plan"
2. Provide:
- Buyer segment and expected timeline
- Buyer experience level, budget, desired property type, and areas if known
- Known blockers such as credit, down payment, lease timing, relocation, or uncertainty
- Preferred channels and frequency
3. Claude will ask up to 5 clarifying questions about buyer timeline, readiness blockers, education needs, channels, and conversion milestones before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Buyer segment | Who the nurture plan is for | First-time buyers 12 months out |
| Timeline | Expected buying window | 6–18 months |
| Known blockers | What prevents action now | Saving down payment and lease ends next spring |
| Search context | Budget, area, property type, and must-haves if known | $450,000 townhome or condo |
| Channel mix | Email, text, call, webinar, home search, or mixed | Monthly email and quarterly check-in call |

## Output Format
An Excel workbook named Long_Cycle_Buyer_Nurture_<segment>_<date>.xlsx with four sheets: 18-Month Calendar, Buyer Education Library, Readiness Signals, and Follow-Up Tracker. Calendar columns: Month, Buyer Stage, Theme, Message Angle, Channel, CTA, Resource, Follow-Up Action, Status. Include separate paths for 6-month, 12-month, and 18-month buyers.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting and use the buyer readiness ladder to pace the campaign.
2. Create an 18-month calendar that can be shortened to 6 or 12 months depending on the buyer timeline.
3. Write education topics that build readiness: financing basics, search criteria, market expectations, offer process, inspections, closing costs, and timing.
4. Create message copy for email, text, and call prompts with a soft CTA for each month.
5. Add a Readiness Signals sheet that helps the agent know when to move the buyer from nurture to active consultation.
6. Create follow-up actions for pre-approval, saved search setup, buyer consult, home tour, and offer strategy conversation.
7. Avoid over-contacting; keep touchpoints useful, short, and connected to the buyer’s stated timeline.
8. Format the workbook so the agent can filter by buyer stage and next action.

## Fair Housing & Compliance Notes
Do not give lending, tax, or legal advice. Do not steer buyers toward or away from neighborhoods based on protected-class traits or school claims. Keep affordability language general and encourage buyers to speak with a qualified lender. Treat buyer financial details as confidential.

## Sample Trigger Phrases
- Build an 18-month buyer nurture campaign
- Keep early-stage buyers warm
- Write monthly emails for future buyers
- Create a buyer readiness drip
- Make a nurture plan for paused buyers
