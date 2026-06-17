---
name: client-portal-status-mirror
description: "Use this skill whenever a broker, team lead, TC, or agent needs a client-facing status dashboard that mirrors transaction milestones, next steps, deadlines, and owner updates in plain language. Produces a formatted HTML visual dashboard that can be shared, printed, or adapted into a client portal update."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a polished client-facing transaction status dashboard so clients can see what is done, what is next, who is responsible, and what needs their attention without reading a long email thread.

## How to Run This Skill
1. Tell Claude: "Create a client portal status dashboard"
2. Provide:
- Client name, property address, transaction side, and stage
- Milestones completed, in progress, blocked, or upcoming
- Key dates and responsible parties
- Open client actions and documents needed
- Tone preference and any details that should not be shown to clients
3. Claude will ask up to 6 clarifying questions about transaction stage, milestone list, client-safe wording, visibility restrictions, next actions, and deadline urgency before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Transaction profile | Client, side, property, and stage | Buyer client, under contract at 789 Pine Dr, inspection period |
| Milestones | Completed, current, upcoming, and blocked steps | Offer accepted, earnest money received, inspection scheduled |
| Dates | Deadlines and appointments to show | Inspection June 20, appraisal ordered, loan commitment July 5 |
| Open actions | Tasks the client must complete | Sign inspection addendum and upload ID |
| Visibility limits | Sensitive details to hide or soften | Do not show lender delay details or internal escalation notes |

## Output Format
A formatted HTML file named Client_Portal_Status_<address>_<date>.html. Layout: branded header; client-safe transaction summary; progress bar; milestone cards grouped as Completed, In Progress, Upcoming, and Needs Attention; next-action panel; key dates strip; contact panel; notes section; footer disclaimer. The visual should fit on one to two printed pages and be readable on a phone.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before creating the HTML visual and use its client-safe milestone language.
2. Create a client-facing dashboard that uses plain language and avoids internal jargon or blame.
3. Convert milestones into status cards using Completed, In Progress, Upcoming, Needs Attention, and Waiting on Third Party.
4. Create a progress bar based on transaction stage, but label it as a general status indicator rather than a legal certainty.
5. Create a Next Actions panel that lists what the client needs to do, due date, owner, and where to send questions.
6. Create a Key Dates strip with inspection, appraisal, loan, title, walkthrough, and closing dates when provided.
7. Hide sensitive internal notes, compensation details, private agent issues, and third-party blame from the client-facing version.
8. End with a friendly footer explaining that dates can change and the client should contact the team with questions.

## Fair Housing & Compliance Notes
Do not include confidential internal notes, lender-private details, compensation information, protected-class information, legal conclusions, or promises that a milestone is guaranteed. Keep client-facing language factual and calm.

## Sample Trigger Phrases
- Create a client status dashboard
- Make a portal update for this transaction
- Turn milestones into a client-friendly visual
- Show my buyer what happens next
- Build a transaction status mirror
