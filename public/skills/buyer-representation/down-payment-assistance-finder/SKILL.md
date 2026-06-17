---
name: down-payment-assistance-finder
description: "Use this skill whenever an agent says 'Build a down-payment assistance finder', 'Create a down-payment assistance finder for this client', 'Help me prepare a down-payment assistance finder', or needs support for this job: Surfaces and explains DPA programs the buyer may qualify for. Produces a client-ready Excel workbook named Down_Payment_Assistance_Finder.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Surfaces and explains DPA programs the buyer may qualify for. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a down-payment assistance finder"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Buyer eligibility facts | County, city, income range, household size, first-time status, occupation, and veteran status if buyer chooses to share | First-time buyer, Orange County, 2-person household |
| Purchase target | Price range, property type, occupancy, loan type, and timing | $475,000 condo, primary residence, FHA |
| Program sources | Links, lender notes, state agency pages, or program names to evaluate | State HFA program and city grant page |
| Buyer priorities | Lowest cash to close, forgivable aid, monthly payment, speed, or flexibility | Minimize cash to close |

## Output Format
An Excel workbook named `Down_Payment_Assistance_Finder.xlsx` with the following structure:

- Buyer Eligibility Inputs sheet with location, income range, household size, buyer status, occupation, loan type, and property type
- Program Comparison sheet with program name, geography, benefit, income cap, purchase price cap, occupancy rules, repayment, deadline, source, and fit rating
- Next Steps sheet with lender questions, documents to gather, and application timing

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Use only current program details supplied by the client or available to Claude through active research tools. If no current source is available, create a research checklist instead of inventing programs.
4. Compare program fit using objective eligibility criteria such as geography, income, property type, occupancy, and loan type.
5. Flag unknown eligibility items and lender-confirmation questions.
6. Create a clean next-step plan with documents to gather and who to contact.
7. Avoid promising approval or benefit amount.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not guarantee eligibility or availability. Treat income, household, veteran, and occupation details as sensitive and use them only when the buyer voluntarily provides them for program matching.

## Sample Trigger Phrases
- "Build a down-payment assistance finder"
- "Create a down-payment assistance finder for this client"
- "Help me prepare a down-payment assistance finder"
- "Turn these notes into a down-payment assistance finder"
- "I need a client-ready down-payment assistance finder"
