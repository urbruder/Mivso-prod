---
name: rate-buydown-comparison
description: "Use this skill whenever an agent says 'Build a rate buydown comparison', 'Create a rate buydown comparison for this client', 'Help me prepare a rate buydown comparison', or needs support for this job: Compares 2-1 buydowns, points, and permanent buydowns for a buyer's scenario. Produces a client-ready Excel workbook named Rate_Buydown_Comparison.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Compares 2-1 buydowns, points, and permanent buydowns for a buyer's scenario. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a rate buydown comparison"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Purchase scenario | Price, down payment, loan amount, loan type, and estimated closing costs | $700,000 price, 10 percent down |
| Rate options | No buydown rate, permanent buydown quote, temporary buydown quote, and lender fee details | 6.875 percent no points; 6.5 percent with 1 point |
| Seller credit or concession | Any seller-paid credit available for buydown or closing costs | $10,000 seller credit |
| Buyer hold plan | How long the buyer expects to own or keep the loan | Likely 5 to 7 years |

## Output Format
An Excel workbook named `Rate_Buydown_Comparison.xlsx` with the following structure:

- Loan Inputs sheet with purchase price, loan amount, down payment, rate, points, buydown cost, seller credit, and hold period
- Scenario Comparison sheet comparing no buydown, permanent points, temporary buydown, and price reduction if supplied
- Buyer Summary sheet with monthly payment difference, cash-to-close impact, breakeven month, risks, and lender questions

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Compare only scenarios the buyer or lender supplied. Do not invent rate quotes.
4. Show monthly payment, upfront cost, breakeven, and cash-to-close effect for each scenario.
5. Explain the tradeoff between lower payment now and upfront cost or seller credit use.
6. Flag that temporary buydowns may increase payment later and require lender explanation.
7. Write a buyer-safe summary with questions for the lender.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
This is education, not mortgage advice. Use lender-supplied numbers and tell the buyer to confirm APR, eligibility, payment schedule, and disclosures with the lender.

## Sample Trigger Phrases
- "Build a rate buydown comparison"
- "Create a rate buydown comparison for this client"
- "Help me prepare a rate buydown comparison"
- "Turn these notes into a rate buydown comparison"
- "I need a client-ready rate buydown comparison"
