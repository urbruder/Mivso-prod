---
name: maintenance-triage-skill
description: "Use this skill whenever an agent needs a maintenance triage, asks to build a maintenance triage, or needs help with this catalog job: Severity matrix, vendor SOP, and tenant comms for routine requests. Produces an Excel workbook for Maintenance Triage Skill."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Excel workbook for Maintenance Triage Skill. It helps the agent handle this catalog job: Severity matrix, vendor SOP, and tenant comms for routine requests. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a maintenance triage"
2. Provide the following practical inputs:
- Property and party context: Property type, tenant or owner situation, lease status, issue, and urgency
- Rules and standards: Lease terms, property policy, vendor rules, screening criteria, or owner reporting preferences
- Current facts: Request details, rent, renewal date, work order, application data, or vendor scope
- Desired outcome: Decision, communication, SOP, owner report, renewal plan, or repair queue
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Excel workbook and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property and party context | Property type, tenant or owner situation, lease status, issue, and urgency | 12-unit building, tenant maintenance request, owner wants monthly report |
| Rules and standards | Lease terms, property policy, vendor rules, screening criteria, or owner reporting preferences | 24-hour emergency response, licensed vendors only |
| Current facts | Request details, rent, renewal date, work order, application data, or vendor scope | HVAC not cooling, tenant reports indoor temperature above 82 |
| Desired outcome | Decision, communication, SOP, owner report, renewal plan, or repair queue | Triage severity and send tenant/vendor messages |

## Output Format
An Excel workbook named Maintenance_Triage_Skill_with_date.xlsx with five polished sheets: (1) Dashboard - a one-page visual summary with key decisions, risk flags, totals, and next actions; (2) Source Inputs - the facts, documents, assumptions, and notes supplied by the agent; (3) Analysis Matrix - the main comparison, checklist, tracker, scoring table, or calculation model for Maintenance Triage Skill; (4) Action Plan - owner, due date, priority, status, and follow-up columns; (5) Client or Team Notes - plain-English talking points and verification reminders. Format with frozen headers, readable column widths, wrapped notes, status labels, and a print-ready summary area.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use one row per item, scenario, deadline, lead, document, comp, task, party, or risk so the workbook can be filtered and sorted.
4. Use clear status values such as Complete, Needs Review, Missing, At Risk, Waiting, Recommended, and Not Applicable when relevant.
5. Include totals, counts, scores, risk ratings, or priority rankings only when the agent supplied enough information to support them.
6. Use objective property, lease, maintenance, screening, renewal, vendor, or owner-reporting facts rather than personal assumptions about tenants or applicants.
7. Convert the source material into a polished Excel workbook that directly supports this job: Severity matrix, vendor SOP, and tenant comms for routine requests.
8. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
9. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
10. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
11. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
12. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Follow Fair Housing, landlord-tenant, habitability, privacy, screening, adverse-action, rent-increase, repair, and local notice rules. Do not create discriminatory criteria or legal notices without broker, attorney, or property manager approval.

## Sample Trigger Phrases
- "Build a maintenance triage"
- "Create a client-ready maintenance triage"
- "Turn these notes into a maintenance triage"
- "Help me prepare a maintenance triage for my next real estate conversation"
- "I need a polished maintenance triage deliverable"
