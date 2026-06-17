---
name: open-house-follow-up-sequencer
description: "Use this skill whenever an agent has open house sign-in notes and needs segmented follow-up for hot buyers, warm buyers, neighbors, agents, or future sellers. Triggers include open house follow-up, sign-in sheet sequence, visitor segmentation, after open house texts, or nurture open house leads. Produces an Excel workbook with visitor segments, message copy, and follow-up calendar."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Turns raw open house sign-in notes into a structured follow-up plan. The agent receives an Excel workbook that segments visitors, assigns next steps, and provides ready-to-send messages for multiple days after the event.

## How to Run This Skill
1. Tell Claude: "Sequence my open house follow-up"
2. Provide:
- Open house property address and date
- Visitor sign-in names, contact information, notes, and observed interest level
- Any visitor comments, buyer timeline, financing status, or agent representation status
- The agent’s desired outcome, such as showing, buyer consult, listing lead, or neighbor nurture
3. Claude will ask up to 4 clarifying questions about visitor segments, consent, property context, and the main conversion goal before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Open house details | Address, date, price, and property type | 22 Lakeview Drive open house on June 15 |
| Visitor list | Names, contact info, notes, and interest level | Sam, asked about offers, has agent unknown |
| Visitor context | Buyer, neighbor, seller prospect, agent, investor, or unknown | Neighbor considering selling next spring |
| Follow-up channels | Text, email, call, direct mail, or mixed | Text first, then email |
| Goal | What the agent wants to convert | Second showing, buyer consult, listing valuation |

## Output Format
An Excel workbook named Open_House_Follow_Up_<property street>_<date>.xlsx with four sheets: Visitor Segmentation, Follow-Up Calendar, Message Copy, and Agent Call Notes. Visitor Segmentation columns: Visitor Name, Segment, Interest Level, Buyer/Seller Signal, Representation Status, Consent Note, Next Step. Follow-Up Calendar columns: Day, Segment, Channel, Message Goal, Message Copy, Owner, Status. Approximate size: 3–7 days of follow-up plus message copy for each segment.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before segmenting and use the visitor segment definitions consistently.
2. Classify each visitor into Hot Buyer, Warm Buyer, Neighbor Seller Lead, Future Seller, Agent, Investor, Vendor, or Unknown.
3. Create a 3–7 day follow-up calendar for each segment with day, channel, message goal, message copy, and next action.
4. Write messages that reference the property, visitor comments, and a useful next step.
5. Create a separate path for represented buyers that respects agency relationships and avoids interference.
6. Create a seller-lead path for neighbors that offers a market snapshot or home value review without pressure.
7. Create an Agent Call Notes sheet for call outcomes, objections, and follow-up dates.
8. Format the workbook with filters, frozen headers, segment colors, and readable message columns.

## Fair Housing & Compliance Notes
Respect agency relationships and do not solicit a represented buyer in a way that violates local rules. Do not use protected-class language or neighborhood steering. Do not add people to ongoing campaigns without consent where consent is required. Include opt-out language for mass text or email follow-up.

## Sample Trigger Phrases
- Build follow-up for my open house sign-in sheet
- Segment these open house visitors
- Write texts for hot buyers and neighbors after the open house
- Create a 7-day open house follow-up calendar
- Turn these open house notes into a sequence
