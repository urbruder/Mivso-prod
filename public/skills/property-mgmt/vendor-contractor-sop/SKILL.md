---
name: vendor-contractor-sop
description: "Use this skill whenever an agent needs a vendor and contractor sop, asks to build a vendor and contractor sop, or needs help with this catalog job: Vendor onboarding, scope templates, and invoice-review rules. Produces a Word document for Vendor / Contractor SOP."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Word document for Vendor / Contractor SOP. It helps the agent handle this catalog job: Vendor onboarding, scope templates, and invoice-review rules. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a vendor and contractor sop"
2. Provide the following practical inputs:
- Property and party context: Property type, tenant or owner situation, lease status, issue, and urgency
- Rules and standards: Lease terms, property policy, vendor rules, screening criteria, or owner reporting preferences
- Current facts: Request details, rent, renewal date, work order, application data, or vendor scope
- Desired outcome: Decision, communication, SOP, owner report, renewal plan, or repair queue
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Word document and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property and party context | Property type, tenant or owner situation, lease status, issue, and urgency | 12-unit building, tenant maintenance request, owner wants monthly report |
| Rules and standards | Lease terms, property policy, vendor rules, screening criteria, or owner reporting preferences | 24-hour emergency response, licensed vendors only |
| Current facts | Request details, rent, renewal date, work order, application data, or vendor scope | HVAC not cooling, tenant reports indoor temperature above 82 |
| Desired outcome | Decision, communication, SOP, owner report, renewal plan, or repair queue | Triage severity and send tenant/vendor messages |

## Output Format
A Word document named Vendor_Contractor_SOP_with_date.docx with a polished cover heading, a short executive summary, an input snapshot, the main Vendor / Contractor SOP deliverable, client-facing language or talking points, risk and compliance notes, and a final next-step checklist. Use headings, tables, bullets, and short paragraphs so the agent can print, email, or use the document in a meeting. Approximate length: 4-8 pages unless the supplied materials require more detail.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use tables for checklists, options, scripts, timelines, objections, responsibilities, or risks when they make the document easier to use.
4. Write client-facing sections as ready-to-send language unless the section is clearly marked as internal agent notes.
5. Use objective property, lease, maintenance, screening, renewal, vendor, or owner-reporting facts rather than personal assumptions about tenants or applicants.
6. Convert the source material into a polished Word document that directly supports this job: Vendor onboarding, scope templates, and invoice-review rules.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
Follow Fair Housing, landlord-tenant, habitability, privacy, screening, adverse-action, rent-increase, repair, and local notice rules. Do not create discriminatory criteria or legal notices without broker, attorney, or property manager approval.

## Sample Trigger Phrases
- "Build a vendor and contractor sop"
- "Create a client-ready vendor and contractor sop"
- "Turn these notes into a vendor and contractor sop"
- "Help me prepare a vendor and contractor sop for my next real estate conversation"
- "I need a polished vendor and contractor sop deliverable"
