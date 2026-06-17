---
name: ibuyer-cash-offer-comparison
description: "Use this skill whenever an agent says 'Build an ibuyer or cash-offer comparison', 'Create an ibuyer or cash-offer comparison for this client', 'Help me prepare an ibuyer or cash-offer comparison', or needs support for this job: Compares a cash/iBuyer offer against an open-market sale net. Produces a client-ready Excel workbook named iBuyer_Cash_Offer_Comparison.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Compares a cash/iBuyer offer against an open-market sale net. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build an ibuyer or cash-offer comparison"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Cash or iBuyer offer | Offer price, fees, repair deductions, closing date, cancellation terms, and contingencies | $510,000 offer, 5 percent service fee |
| Open-market estimate | Likely list price, expected sale price range, commission, prep cost, concessions, and timeline | Likely $550,000 sale with 30 days on market |
| Client priorities | Speed, certainty, privacy, highest net, minimal repairs, or move timing | Needs fast certain closing |
| Risk factors | Inspection, appraisal, repairs, occupancy, and market uncertainty | Roof likely to need repair |

## Output Format
An Excel workbook named `iBuyer_Cash_Offer_Comparison.xlsx` with the following structure:

- Offer Comparison sheet with cash offer, open-market estimate, service fees, repair deductions, commissions, concessions, closing costs, timing, certainty, and net proceeds
- Tradeoff Dashboard with net difference, time savings, risk reduction, convenience value, and decision notes
- Client Summary sheet with a plain-English recommendation and questions to ask before accepting

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Compare net proceeds and non-financial tradeoffs side by side.
4. Keep service fees, repair deductions, commissions, and concessions separate so the client sees what drives the difference.
5. Do not assume open-market sale price will be achieved. Use a low, likely, and high scenario when data is uncertain.
6. Write a balanced summary that respects the client priority, not just the highest number.
7. List questions to ask the cash buyer before signing.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not provide legal or financial advice. Flag contract terms, cancellation rights, repair deductions, and closing certainty for attorney or broker review.

## Sample Trigger Phrases
- "Build an ibuyer or cash-offer comparison"
- "Create an ibuyer or cash-offer comparison for this client"
- "Help me prepare an ibuyer or cash-offer comparison"
- "Turn these notes into an ibuyer or cash-offer comparison"
- "I need a client-ready ibuyer or cash-offer comparison"
