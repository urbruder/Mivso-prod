---
name: mileage-and-expense-tax-log
description: "Use this skill whenever an agent says 'Build a mileage and expense tax log', 'Create a mileage and expense tax log for this client', 'Help me prepare a mileage and expense tax log', or needs support for this job: Captures showing trips and expenses for Schedule C deductions. Produces a client-ready Excel workbook named Mileage_Expense_Tax_Log.xlsx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Captures showing trips and expenses for Schedule C deductions. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a mileage and expense tax log"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Trips | Showing, listing, inspection, open house, and client meeting trips | June 12, office to 123 Oak, buyer showing |
| Expenses | Marketing, signs, parking, meals, subscriptions, supplies, and client-event costs | $84.12 open house flyers |
| Mileage rate | Current rate or the rate supplied by the client or CPA | Use client-supplied rate of 67 cents per mile |
| Tax year | The year the log covers | 2026 |

## Output Format
An Excel workbook named `Mileage_Expense_Tax_Log.xlsx` with the following structure:

- Mileage Log sheet with date, trip purpose, start, destination, client or property, starting odometer, ending odometer, miles, and business reason
- Expense Log sheet with date, vendor, category, amount, property or client, receipt status, reimbursement status, and tax note
- Summary sheet with totals by month, category, client, and receipt status

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Separate mileage from expenses so the workbook is easy to give to a CPA.
4. Do not guess tax deductibility. Mark questionable items for CPA review instead of treating them as deductible.
5. Group expenses into plain categories: advertising, mileage, supplies, meals, parking, software, education, client events, and other.
6. Create monthly totals and a missing-receipt list. Highlight entries without a business purpose.
7. Add a plain-English cover note explaining that the workbook is a recordkeeping tool, not tax advice.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
This is recordkeeping support, not tax advice. Tell the client to confirm deductibility, rates, and substantiation rules with a qualified tax professional.

## Sample Trigger Phrases
- "Build a mileage and expense tax log"
- "Create a mileage and expense tax log for this client"
- "Help me prepare a mileage and expense tax log"
- "Turn these notes into a mileage and expense tax log"
- "I need a client-ready mileage and expense tax log"
