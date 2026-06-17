---
name: offer-strategy-advisor
description: "Use this skill whenever an agent says 'Build an offer strategy advisor', 'Create an offer strategy advisor for this client', 'Help me prepare an offer strategy advisor', or needs support for this job: Price, terms, escalation, and contingency strategy that wins without overpaying. Produces a client-ready Excel workbook named Offer_Strategy_Advisor.xlsx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Price, terms, escalation, and contingency strategy that wins without overpaying. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build an offer strategy advisor"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Target property | Address, list price, days on market, seller signals, and deadline | 123 Oak listed at $640,000, deadline tonight |
| Buyer limits | Maximum price, cash available, financing, appraisal-gap comfort, inspection comfort, and timing needs | $665,000 max, $20,000 appraisal gap possible |
| Competition context | Known competing offers, market pace, and listing agent feedback | Multiple offers expected, seller prefers fast close |
| Preferred terms | Closing date, possession, contingencies, credits, personal property, and lender details | 30-day close, conventional loan |

## Output Format
An Excel workbook named `Offer_Strategy_Advisor.xlsx` with the following structure:

- Offer Scenarios sheet with price, earnest money, down payment, financing, appraisal gap, inspection terms, closing date, concessions, and seller-fit notes
- Risk and Strength Matrix ranking each scenario by competitiveness, buyer risk, cash required, and likely seller appeal
- Agent Talking Points sheet with recommended offer narrative and client decision questions

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Build at least three offer scenarios: safe, competitive, and aggressive. Add a custom scenario when the buyer gives a firm ceiling.
4. Do not recommend terms that exceed the buyer cash, lender, or risk limits.
5. Explain how each term affects seller appeal and buyer risk.
6. Include a client-ready recommendation that states the strongest reasonable path without pressuring the buyer to waive protections blindly.
7. Flag legal or contract language for broker or attorney review.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not practice law or draft contract clauses. Treat the output as strategy support and tell the agent to use state-approved forms and broker guidance.

## Sample Trigger Phrases
- "Build an offer strategy advisor"
- "Create an offer strategy advisor for this client"
- "Help me prepare an offer strategy advisor"
- "Turn these notes into an offer strategy advisor"
- "I need a client-ready offer strategy advisor"
