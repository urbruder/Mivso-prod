---
name: house-hacking-advisor
description: "Use this skill whenever an agent says 'Build a house-hacking advisor', 'Create a house-hacking advisor for this client', 'Help me prepare a house-hacking advisor', or needs support for this job: Models duplex/ADU owner-occupy strategies for first investors. Produces a client-ready Excel workbook named House_Hacking_Advisor.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Models duplex/ADU owner-occupy strategies for first investors. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a house-hacking advisor"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property option | Address, property type, units, price, rent estimates, ADU potential, and condition | Duplex at $620,000, one unit rents for $2,100 |
| Buyer financing | Loan type, down payment, owner-occupancy requirement, and lender notes | FHA 3.5 percent down owner-occupant |
| Living plan | Which unit the buyer would occupy, roommate tolerance, renovation tolerance, and privacy needs | Will live in smaller unit for 2 years |
| Local rules | Rental, ADU, short-term rental, parking, and permit notes if supplied | City requires rental registration |

## Output Format
An Excel workbook named `House_Hacking_Advisor.xlsx` with the following structure:

- Property Strategy sheet comparing owner-occupied single-family with ADU, duplex, triplex, fourplex, and roommate scenarios when relevant
- Cash Flow sheet with owner payment, tenant rent, vacancy, utilities, repairs, management, reserves, and net housing cost
- Fit and Risk Brief with lender questions, occupancy rules, privacy tradeoffs, local rental rules, and exit options

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Model the buyer housing cost after rental income and realistic reserves.
4. Compare house-hacking options against the buyer lifestyle tolerance, not only the highest rent.
5. Flag occupancy rules, rental restrictions, permit issues, insurance, and lender requirements.
6. Create sensitivity scenarios for lower rent, vacancy, and repairs.
7. Write a plain-English recommendation on whether the strategy is financially and practically viable.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not guarantee rental income or loan approval. Advise verification of rent, leases, local rules, permits, insurance, and lender occupancy requirements.

## Sample Trigger Phrases
- "Build a house-hacking advisor"
- "Create a house-hacking advisor for this client"
- "Help me prepare a house-hacking advisor"
- "Turn these notes into a house-hacking advisor"
- "I need a client-ready house-hacking advisor"
