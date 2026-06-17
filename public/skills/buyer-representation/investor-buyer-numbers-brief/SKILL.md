---
name: investor-buyer-numbers-brief
description: "Use this skill whenever an agent says 'Build an investor-buyer numbers brief', 'Create an investor-buyer numbers brief for this client', 'Help me prepare an investor-buyer numbers brief', or needs support for this job: Cash-flow, cap-rate, and yield summary for investor buyers. Produces a client-ready Excel workbook named Investor_Buyer_Numbers_Brief.xlsx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Cash-flow, cap-rate, and yield summary for investor buyers. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build an investor-buyer numbers brief"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property | Address, price, units, size, and current or estimated rent | Duplex at $520,000 with two $1,700 rent estimates |
| Operating assumptions | Taxes, insurance, HOA, repairs, vacancy, management, utilities, and reserves | 8 percent vacancy, 7 percent management, $250 monthly reserves |
| Financing assumptions | Down payment, rate, loan term, points, and closing costs | 25 percent down, 7 percent rate, 30 years |
| Investor target | Minimum cash flow, cap rate, or return goal | At least 6 percent cash-on-cash |

## Output Format
An Excel workbook named `Investor_Buyer_Numbers_Brief.xlsx` with the following structure:

- Property Inputs sheet with purchase price, rent estimate, taxes, insurance, HOA, repairs, vacancy, management, financing, and closing costs
- Returns Dashboard with cash flow, cap rate, cash-on-cash return, debt-service coverage, breakeven occupancy, and sensitivity table
- Narrative Brief sheet explaining the opportunity, risks, assumptions, and diligence questions

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Build the return analysis from transparent assumptions and keep all assumptions editable.
4. Calculate cash flow, cap rate, cash-on-cash return, and sensitivity to rent, vacancy, and repairs.
5. Clearly separate buyer-supplied facts from estimates and assumptions.
6. Write a plain-English investor brief that does not oversell the deal.
7. Add diligence questions for rent verification, condition, leases, local rules, insurance, and financing.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not guarantee investment returns. Label estimates and remind the buyer to verify rents, expenses, financing, taxes, insurance, and local rental rules.

## Sample Trigger Phrases
- "Build an investor-buyer numbers brief"
- "Create an investor-buyer numbers brief for this client"
- "Help me prepare an investor-buyer numbers brief"
- "Turn these notes into an investor-buyer numbers brief"
- "I need a client-ready investor-buyer numbers brief"
