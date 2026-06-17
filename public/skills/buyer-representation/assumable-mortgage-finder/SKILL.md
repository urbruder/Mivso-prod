---
name: assumable-mortgage-finder
description: "Use this skill whenever an agent says 'Build an assumable-mortgage finder', 'Create an assumable-mortgage finder for this client', 'Help me prepare an assumable-mortgage finder', or needs support for this job: Identifies and explains low-rate assumable loan opportunities. Produces a client-ready Excel workbook named Assumable_Mortgage_Finder.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Identifies and explains low-rate assumable loan opportunities. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build an assumable-mortgage finder"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property candidates | Listings or addresses that may have FHA, VA, USDA, or other assumable loans | Three listings that mention assumable VA loan |
| Loan clues | Loan type, rate, balance, seller occupancy, or listing remarks if known | FHA loan at 3.25 percent, balance unknown |
| Buyer cash and financing | Available cash, new loan quote, and comfort with assumption timeline | $90,000 cash available |
| Verification details | What the listing agent, seller, servicer, or lender has confirmed | Listing agent says assumption possible but not verified |

## Output Format
An Excel workbook named `Assumable_Mortgage_Finder.xlsx` with the following structure:

- Candidate Properties sheet with property, list price, loan type, possible assumability signal, estimated balance, rate if known, cash gap, and verification status
- Assumption Math sheet comparing assumable loan payment, new loan payment, cash required, second financing need, and breakeven considerations
- Verification Checklist with listing agent questions, servicer questions, buyer lender questions, timeline, and risk notes

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Treat every assumability clue as unverified until confirmed by the servicer or authoritative source.
4. Estimate the cash gap between purchase price and assumed loan balance only when balance is supplied or clearly labeled as estimate.
5. Compare assumable payment with a new-loan scenario using buyer-supplied or lender-supplied terms.
6. Create a verification checklist that protects the agent from over-promising.
7. Flag timeline, qualification, seller release, VA entitlement, and second-financing issues.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not promise assumability, loan approval, seller release, or VA entitlement restoration. Confirm with lender, servicer, and qualified advisors.

## Sample Trigger Phrases
- "Build an assumable-mortgage finder"
- "Create an assumable-mortgage finder for this client"
- "Help me prepare an assumable-mortgage finder"
- "Turn these notes into an assumable-mortgage finder"
- "I need a client-ready assumable-mortgage finder"
