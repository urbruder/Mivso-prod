---
name: annual-business-plan-builder
description: "Use this skill whenever an agent says 'Build an annual business plan builder', 'Create an annual business plan builder for this client', 'Help me prepare an annual business plan builder', or needs support for this job: Turns a GCI goal into an activity-based annual business plan. Produces a client-ready Excel workbook named Annual_Business_Plan_Builder.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Turns a GCI goal into an activity-based annual business plan. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build an annual business plan builder"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Annual income goal | Target GCI or net income | $300,000 GCI |
| Production assumptions | Average sale price, commission, split, and expenses | $650,000 average price, 2.5 percent side, 80 percent split |
| Conversion rates | Lead-to-appointment, appointment-to-client, and client-to-closing assumptions | 15 percent, 50 percent, 70 percent |
| Lead sources and capacity | Channels, budget, workweeks, hours, and constraints | Open houses, referrals, farming, 46 workweeks |

## Output Format
An Excel workbook named `Annual_Business_Plan_Builder.xlsx` with the following structure:

- Goal Inputs sheet with annual GCI target, average price, average commission, split, conversion rates, and workweeks
- Activity Plan sheet translating the GCI goal into annual, quarterly, monthly, weekly, and daily activities
- Marketing and Lead Source Plan sheet with channels, budget, expected appointments, expected closings, and owner
- Quarterly Review sheet with actuals, variance, lessons, and next-quarter adjustments

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Start with the GCI or net-income goal and work backward into closings, clients, appointments, leads, and daily actions.
4. Show assumptions clearly so the agent can adjust conversion rates and price points.
5. Create monthly and weekly targets that are realistic for the agent capacity supplied.
6. Include a lead-source plan and budget guardrail so the plan is not just a dream number.
7. Add quarterly review prompts that turn the plan into a management tool.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Label all production math as planning estimates, not guarantees. Do not recommend marketing tactics that violate fair housing advertising limits.

## Sample Trigger Phrases
- "Build an annual business plan builder"
- "Create an annual business plan builder for this client"
- "Help me prepare an annual business plan builder"
- "Turn these notes into an annual business plan builder"
- "I need a client-ready annual business plan builder"
