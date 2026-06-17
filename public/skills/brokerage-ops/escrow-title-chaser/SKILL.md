---
name: escrow-title-chaser
description: "Use this skill whenever a broker, TC, agent, or operations manager needs to track missing escrow, title, lender, closing, or settlement documents and create professional follow-up reminders before deadlines slip. Produces an Excel chaser workbook with reminder cadence, message templates, and escalation log."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a closing-docs tracker that shows what is missing, who owes it, when to follow up, what to say, and when the broker or manager should escalate.

## How to Run This Skill
1. Tell Claude: "Build an escrow and title chaser tracker"
2. Provide:
- Transaction address, closing date, side, and current stage
- Missing documents or unclear closing items
- Contacts for lender, escrow, title, agent, client, and broker
- Contract deadlines and internal follow-up deadlines
- Preferred message tone and escalation rules
3. Claude will ask up to 6 clarifying questions about missing items, responsible parties, close date, priority, escalation path, and communication cadence before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Closing profile | Address, side, stage, close date, and urgency | Seller side, closing July 12, title docs pending |
| Missing items | Documents or confirmations still needed | Closing statement draft, wire instructions confirmation, payoff statement |
| Contacts | Who owns each item and who should be copied | Title officer, lender processor, TC, listing agent, broker |
| Deadlines | Contract dates and internal target dates | CD due July 7, final package due July 10 |
| Escalation rules | When to involve broker or manager | Escalate if no response within 24 hours on critical items |

## Output Format
An Excel workbook named Escrow_Title_Chaser_<address>_<date>.xlsx. Sheets: Closing Docs Dashboard, Missing Items Tracker, Chaser Schedule, Message Templates, Escalation Log, Closing Readiness Notes. Missing Items Tracker columns: Item, Owner, Responsible Company, Status, Due Date, Last Touch, Next Touch, Priority, Escalation Trigger, Notes. Message Templates includes email, text, and call-script versions for friendly reminder, urgent reminder, escalation, and closing-day confirmation.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before building the tracker and use its missing-item categories and reminder cadence.
2. Create the workbook with Closing Docs Dashboard first and summarize open critical items, days to close, and next follow-up needed.
3. Create a Missing Items Tracker that assigns one owner to each missing item and separates required, requested, optional, and unclear items.
4. Create a Chaser Schedule that uses close date, due date, urgency, and last-touch date to recommend the next follow-up date.
5. Write Message Templates for lender, title, escrow, cooperating agent, client, and internal team audiences.
6. Create an Escalation Log that captures date, item, prior touches, escalation reason, person escalated to, and outcome.
7. Create a Closing Readiness Notes sheet listing assumptions, unresolved risks, and items that require broker or closing-team judgment.
8. Keep the tone professional and specific. Avoid blaming third parties; focus on what is needed and by when.

## Fair Housing & Compliance Notes
Do not send or request wire instructions in an unsafe manner. Include a reminder that wire instructions must be verified through the brokerage-approved secure process. Do not provide legal settlement advice or pressure a third party to violate compliance procedures.

## Sample Trigger Phrases
- Chase missing title docs
- Create a closing document tracker
- Write reminders to lender and escrow
- Build a title follow-up schedule
- Help me prevent closing document delays
