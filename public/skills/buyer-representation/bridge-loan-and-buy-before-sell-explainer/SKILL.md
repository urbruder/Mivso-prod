---
name: bridge-loan-and-buy-before-sell-explainer
description: "Use this skill whenever an agent says 'Build a bridge-loan and buy-before-sell explainer', 'Create a bridge-loan and buy-before-sell explainer for this client', 'Help me prepare a bridge-loan and buy-before-sell explainer', or needs support for this job: Explains bridge financing and timing for move-up buyers. Produces a client-ready Excel workbook named Bridge_Loan_Buy_Before_Sell_Explainer.xlsx. This is an extended skill for the Top 200 bundle."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Explains bridge financing and timing for move-up buyers. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a bridge-loan and buy-before-sell explainer"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Current home | Estimated value, loan balance, monthly payment, expected net proceeds, and sale timeline | $800,000 value, $420,000 loan balance |
| Next home | Target price, down payment needed, expected payment, and competition level | $950,000 purchase in competitive market |
| Financing options | Bridge loan, HELOC, new loan, reserves, and lender notes if supplied | Bridge quote from lender |
| Risk tolerance | Comfort with double payments, temporary housing, and sale uncertainty | Can carry two payments for 3 months |

## Output Format
An Excel workbook named `Bridge_Loan_Buy_Before_Sell_Explainer.xlsx` with the following structure:

- Timing Scenarios sheet comparing sell first, buy first with bridge loan, home-equity option, temporary housing, and contingent offer
- Cash Flow sheet with current payment, new payment, bridge cost, carrying cost, expected sale proceeds, reserves, and stress-test months
- Client Brief sheet explaining pros, cons, risks, lender questions, and decision triggers

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Compare timing paths visually so the buyer sees cost, risk, flexibility, and competitiveness.
4. Use only lender-supplied or client-supplied financing numbers. Mark missing numbers clearly.
5. Stress-test the cost of delayed sale by one, three, and six months when enough inputs are available.
6. Write a plain-English explanation of when each path tends to make sense.
7. End with lender, CPA, and listing-strategy questions.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
This is education and planning support, not lending, tax, or legal advice. Tell the buyer to confirm terms with lender, CPA, and broker.

## Sample Trigger Phrases
- "Build a bridge-loan and buy-before-sell explainer"
- "Create a bridge-loan and buy-before-sell explainer for this client"
- "Help me prepare a bridge-loan and buy-before-sell explainer"
- "Turn these notes into a bridge-loan and buy-before-sell explainer"
- "I need a client-ready bridge-loan and buy-before-sell explainer"
