---
name: open-house-mega-event-planner
description: "Use this skill whenever an agent wants to turn an open house into a promoted neighborhood event with neighbors, vendors, door-knocking, social posts, and lead capture. Triggers include mega open house, open house event plan, vendor open house, neighbor invite, or open house promotion. Produces an Excel workbook with event timeline, promo calendar, vendor plan, door-knock plan, and day-of checklist."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Builds a full event plan for a high-attendance open house. The agent receives an Excel workbook that coordinates promotion, neighbors, vendors, signage, day-of tasks, and post-event lead capture.

## How to Run This Skill
1. Tell Claude: "Plan an open house mega-event"
2. Provide:
- The listing address, date, time, price point, and target turnout
- Promotion channels, budget, and available vendor or community partners
- Neighborhood invite plan, door-knock radius, and lead capture method
- Any brokerage rules, seller preferences, or property access constraints
3. Claude will ask up to 5 clarifying questions about event goal, budget, partners, promotion channels, and lead capture requirements before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Listing details | Property address, date, time, and price point | 14 Willow Court, Sunday 1–4 PM, $720,000 |
| Event goal | The main purpose of the event | Drive buyer traffic and meet future sellers nearby |
| Promotion channels | Where the event will be promoted | Door-knocking, postcards, Instagram, email, signs |
| Partners | Vendors, lender, title, stager, photographer, or local business | Lender providing payment scenarios |
| Lead capture method | How visitor information will be collected | QR form plus sign-in backup sheet |

## Output Format
An Excel workbook named Open_House_Mega_Event_<property street>_<date>.xlsx with six sheets: Event Timeline, Promo Calendar, Vendor and Partner Plan, Door-Knock Plan, Day-Of Checklist, and Lead Capture Plan. Include columns for task, owner, deadline, status, asset needed, cost, and notes. Approximate size: 30–60 event tasks plus copy prompts and follow-up triggers.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before planning and use the mega-event timeline to sequence tasks.
2. Create an event strategy summary that names the goal, target audience, and success metrics.
3. Build a timeline from 14 days before the event through 3 days after the event.
4. Create a Promo Calendar with social posts, email, door-knock, neighbor invites, signs, partner promotion, and reminder messages.
5. Create a Vendor and Partner Plan with role, deliverable, disclosure note, arrival time, and follow-up responsibility.
6. Create a Door-Knock Plan with routes, talking points, invite copy, and follow-up notes.
7. Create a Day-Of Checklist covering signage, safety, property setup, lead capture, talking points, and post-event recap.
8. Format the workbook as an operational event planner with status fields and clear owner assignments.

## Fair Housing & Compliance Notes
Follow seller instructions, brokerage open house policy, local signage rules, and vendor disclosure requirements. Avoid RESPA-sensitive arrangements unless the agent confirms broker approval. Do not promote based on protected-class language or neighborhood demographic claims. Respect privacy and consent in lead capture.

## Sample Trigger Phrases
- Plan a mega open house for my listing
- Create an open house event checklist
- Build a vendor and neighbor promo plan
- Make a door-knock plan for my open house
- Turn this open house into a lead-gen event
