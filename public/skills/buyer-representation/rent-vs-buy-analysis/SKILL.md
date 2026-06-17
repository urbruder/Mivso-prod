---
name: rent-vs-buy-analysis
description: "Use this skill whenever an agent says 'Build a rent-vs-buy analysis', 'Create a rent-vs-buy analysis for this client', 'Help me prepare a rent-vs-buy analysis', or needs support for this job: Plain-English breakeven analysis for fence-sitting buyers. Produces a client-ready Excel workbook named Rent_vs_Buy_Analysis.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Plain-English breakeven analysis for fence-sitting buyers. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a rent-vs-buy analysis"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Rent scenario | Current rent, expected increases, renter insurance, utilities, and move costs | $2,800 rent, 4 percent annual increase |
| Buy scenario | Price, down payment, loan terms, taxes, insurance, HOA, maintenance, and closing costs | $550,000 purchase, 5 percent down |
| Time horizon | How long the buyer expects to stay | 5 years |
| Assumptions | Appreciation, selling cost, investment return on cash, and tax assumptions if supplied | 3 percent appreciation, 6 percent sale cost |

## Output Format
An Excel workbook named `Rent_vs_Buy_Analysis.xlsx` with the following structure:

- Inputs sheet with rent, purchase price, down payment, loan terms, taxes, insurance, HOA, maintenance, appreciation, rent growth, and hold period
- Comparison Dashboard with monthly cost, cash required, net worth impact, breakeven year, sensitivity table, and lifestyle notes
- Client Summary sheet with a plain-English explanation of what would need to be true for buying to make sense

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Build a clear comparison that separates monthly payment from total wealth impact.
4. Keep assumptions visible and editable. Do not hide appreciation, rent growth, or maintenance estimates.
5. Show breakeven timing and what assumptions change the answer.
6. Write a balanced client summary that includes non-financial considerations without steering the client.
7. Flag tax and mortgage assumptions for professional review.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not provide tax, mortgage, or investment advice. Label all projections as estimates and recommend confirmation with lender, CPA, and financial advisor.

## Sample Trigger Phrases
- "Build a rent-vs-buy analysis"
- "Create a rent-vs-buy analysis for this client"
- "Help me prepare a rent-vs-buy analysis"
- "Turn these notes into a rent-vs-buy analysis"
- "I need a client-ready rent-vs-buy analysis"
