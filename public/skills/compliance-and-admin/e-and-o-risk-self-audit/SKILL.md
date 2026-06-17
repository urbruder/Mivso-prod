---
name: e-and-o-risk-self-audit
description: "Use this skill whenever an agent needs an e&o risk self-audit, asks to build an e&o risk self-audit, or needs help with this catalog job: Flags common errors-and-omissions exposures across an agent's files. Produces an Excel workbook for E&O Risk Self-Audit. This is an extended catalog skill."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Excel workbook for E&O Risk Self-Audit. It helps the agent handle this catalog job: Flags common errors-and-omissions exposures across an agent's files. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build an e&o risk self-audit"
2. Provide the following practical inputs:
- Compliance question or file: The copy, agreement, checklist, referral, policy issue, or transaction file to review
- Jurisdiction and brokerage rules: State, MLS, brokerage policy, or supervising broker direction supplied by the agent
- Source materials: Documents, pasted text, screenshots described in words, policy excerpts, or notes
- Risk tolerance and audience: Who will use the output and whether it is for client, broker, admin, or internal review
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Excel workbook and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Compliance question or file | The copy, agreement, checklist, referral, policy issue, or transaction file to review | Draft ad copy and brokerage checklist for review |
| Jurisdiction and brokerage rules | State, MLS, brokerage policy, or supervising broker direction supplied by the agent | California file, local MLS advertising rules, broker requires pre-approval |
| Source materials | Documents, pasted text, screenshots described in words, policy excerpts, or notes | Referral agreement draft and email thread |
| Risk tolerance and audience | Who will use the output and whether it is for client, broker, admin, or internal review | Internal pre-audit before broker compliance check |

## Output Format
An Excel workbook named E_O_Risk_Self_Audit_with_date.xlsx with five polished sheets: (1) Dashboard - a one-page visual summary with key decisions, risk flags, totals, and next actions; (2) Source Inputs - the facts, documents, assumptions, and notes supplied by the agent; (3) Analysis Matrix - the main comparison, checklist, tracker, scoring table, or calculation model for E&O Risk Self-Audit; (4) Action Plan - owner, due date, priority, status, and follow-up columns; (5) Client or Team Notes - plain-English talking points and verification reminders. Format with frozen headers, readable column widths, wrapped notes, status labels, and a print-ready summary area.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use one row per item, scenario, deadline, lead, document, comp, task, party, or risk so the workbook can be filtered and sorted.
4. Use clear status values such as Complete, Needs Review, Missing, At Risk, Waiting, Recommended, and Not Applicable when relevant.
5. Include totals, counts, scores, risk ratings, or priority rankings only when the agent supplied enough information to support them.
6. Use risk labels such as Low, Medium, High, Broker Review, Counsel Review, CPA Review, Lender Review, or MLS Review when appropriate.
7. Convert the source material into a polished Excel workbook that directly supports this job: Flags common errors-and-omissions exposures across an agent's files.
8. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
9. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
10. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
11. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
12. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
This is compliance organization and risk-spotting support, not legal advice. Do not declare that a file, ad, agreement, tax plan, or referral arrangement is legally compliant. Flag items for broker, counsel, CPA, lender, title, MLS, or compliance officer review when rules or legal interpretation are involved.

## Sample Trigger Phrases
- "Build an e&o risk self-audit"
- "Create a client-ready e&o risk self-audit"
- "Turn these notes into an e&o risk self-audit"
- "Help me prepare an e&o risk self-audit for my next real estate conversation"
- "I need a polished e&o risk self-audit deliverable"
