---
name: crm-data-hygiene-and-dedupe
description: "Use this skill whenever an agent says 'Build a crm data hygiene and dedupe', 'Create a crm data hygiene and dedupe for this client', 'Help me prepare a crm data hygiene and dedupe', or needs support for this job: Merges duplicates and keeps contact data accurate across imports. Produces a client-ready Excel workbook named CRM_Data_Hygiene_Dedupe.xlsx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Merges duplicates and keeps contact data accurate across imports. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a crm data hygiene and dedupe"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Contact export | A CSV, spreadsheet, or pasted contact list from the CRM | First name, last name, email, phone, source, tags |
| Merge rules | Which record should win when duplicates conflict | Prefer record with most recent activity and valid email |
| Tag standards | Preferred tag names for source, relationship, buyer/seller, and status | Past Client, Vendor, Open House, Seller Lead |
| Do-not-contact rules | Any suppression list or consent restrictions | No marketing to unsubscribed contacts |

## Output Format
An Excel workbook named `CRM_Data_Hygiene_Dedupe.xlsx` with the following structure:

- Clean Contacts sheet with standardized names, phone numbers, emails, relationship tags, source, consent status, and owner
- Duplicate Review sheet with suspected duplicate groups, confidence level, recommended merge winner, and fields to preserve
- Data Gaps sheet listing missing phone, missing email, stale source, missing consent, and invalid records

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Standardize names, phone numbers, emails, tags, and source labels without inventing missing contact details.
4. Detect likely duplicates using email, phone, name similarity, mailing address, and relationship context.
5. Create a Duplicate Review sheet rather than silently merging uncertain records. Use confidence labels High, Medium, and Low.
6. Preserve notes, source, consent, and latest activity in the recommended merge plan.
7. Create a final cleanup checklist that tells the agent exactly what to import, what to merge manually, and what to leave untouched.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Respect unsubscribe, do-not-call, consent, and brokerage data-retention rules. Do not create outreach recommendations for contacts marked unsubscribed or do-not-contact.

## Sample Trigger Phrases
- "Build a crm data hygiene and dedupe"
- "Create a crm data hygiene and dedupe for this client"
- "Help me prepare a crm data hygiene and dedupe"
- "Turn these notes into a crm data hygiene and dedupe"
- "I need a client-ready crm data hygiene and dedupe"
