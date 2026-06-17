---
name: gci-and-commission-forecast-planner
description: "Use this skill whenever an agent says 'Build a gci and commission forecast planner', 'Create a gci and commission forecast planner for this client', 'Help me prepare a gci and commission forecast planner', or needs support for this job: Projects commission income from pipeline and close probabilities. Produces a client-ready Excel workbook named GCI_Commission_Forecast_Planner.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Projects commission income from pipeline and close probabilities. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a gci and commission forecast planner"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Deals and leads | Active listings, buyers, pendings, and hot prospects | 12 opportunities with estimated prices |
| Commission assumptions | Side, commission rate, split, caps, referral fees, transaction fees, and team deductions | 2.5 percent buyer side, 80/20 split, 25 percent referral |
| Probability and timing | Close probability and expected close month for each opportunity | 60 percent likely in September |
| Goal | Annual, quarterly, or monthly GCI target | $250,000 annual GCI |

## Output Format
An Excel workbook named `GCI_Commission_Forecast_Planner.xlsx` with the following structure:

- Pipeline Forecast sheet with deal, side, price, commission rate, split, referral fee, close probability, expected close month, expected GCI, and net commission
- Monthly Dashboard with projected volume, GCI, company dollar, expenses, and variance from goal
- Scenario Planner with conservative, likely, and stretch versions of close probability and price assumptions

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Build the forecast from deal-level rows, not one blended guess.
4. Keep all assumptions visible so the agent can change price, probability, split, and close month.
5. Calculate expected GCI and net commission for each row, then roll up by month and scenario.
6. Flag concentration risk when too much projected income depends on one client, one month, or one lead source.
7. Create a simple activity gap: how many additional appointments or signed clients are needed to hit the goal.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not guarantee commission income. Label projections as estimates based on client-supplied assumptions.

## Sample Trigger Phrases
- "Build a gci and commission forecast planner"
- "Create a gci and commission forecast planner for this client"
- "Help me prepare a gci and commission forecast planner"
- "Turn these notes into a gci and commission forecast planner"
- "I need a client-ready gci and commission forecast planner"
