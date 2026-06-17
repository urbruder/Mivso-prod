---
name: investment-property-analyzer
description: "Use this skill whenever an agent says 'Build an investment-property analyzer', 'Create an investment-property analyzer for this client', 'Help me prepare an investment-property analyzer', or needs support for this job: Cap-rate, cash-on-cash, and rent-estimate analysis for buyer-investors. Produces a client-ready Excel workbook named Investment_Property_Analyzer.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Cap-rate, cash-on-cash, and rent-estimate analysis for buyer-investors. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build an investment-property analyzer"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property facts | Address, unit count, price, current rent, projected rent, condition, and occupancy | Triplex at $780,000 with two occupied units |
| Expense assumptions | Taxes, insurance, HOA, maintenance, vacancy, management, utilities, reserves, and capex | 10 percent repairs, 8 percent vacancy |
| Financing | Down payment, rate, term, lender fees, and closing costs | 25 percent down, 7.25 percent rate |
| Investor criteria | Minimum return, cash flow, risk limits, and hold period | Must cash flow at least $300 per month |

## Output Format
An Excel workbook named `Investment_Property_Analyzer.xlsx` with the following structure:

- Deal Inputs sheet with price, rent, expenses, vacancy, repairs, capex, financing, closing costs, and exit assumptions
- Returns Dashboard with cash flow, NOI, cap rate, cash-on-cash return, DSCR, breakeven rent, and sensitivity tables
- Risk and Diligence sheet with lease review, rent verification, condition, local rental rules, insurance, taxes, and financing questions

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Create an investor-grade first-pass analysis with editable assumptions and clear caveats.
4. Calculate NOI, cash flow, cap rate, cash-on-cash return, DSCR, and sensitivity to rent, vacancy, repairs, and rate.
5. Separate actual rents from projected rents and require a note about verification.
6. Flag deal killers such as negative cash flow, poor DSCR, unverified rents, weak reserves, or local rental restrictions.
7. Write a short memo that tells the buyer whether to pursue, renegotiate, or pass based on their criteria.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not guarantee returns or rental performance. Recommend verification of leases, rents, expenses, insurance, taxes, financing, permits, and local rental rules.

## Sample Trigger Phrases
- "Build an investment-property analyzer"
- "Create an investment-property analyzer for this client"
- "Help me prepare an investment-property analyzer"
- "Turn these notes into an investment-property analyzer"
- "I need a client-ready investment-property analyzer"
