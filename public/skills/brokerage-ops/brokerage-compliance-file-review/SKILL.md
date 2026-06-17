---
name: brokerage-compliance-file-review
description: "Use this skill whenever a broker, compliance manager, TC, or team lead needs to review a transaction file for missing signatures, initials, dates, disclosures, required addenda, or broker-review issues before closing or archive. Produces an Excel compliance review workbook with findings, severity, owners, and fix-by dates."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Turns a messy transaction file review into a clean audit workbook that shows what is complete, what is missing, who owns each fix, and what needs broker attention before the file is approved.

## How to Run This Skill
1. Tell Claude: "Review this brokerage compliance file"
2. Provide:
- Transaction side, property address, agent name, and transaction stage
- A list of uploaded documents or the file checklist used by the brokerage
- Known state, association, MLS, or brokerage-required forms
- Closing date or internal review deadline
- Any notes from the broker, TC, or compliance staff
3. Claude will ask up to 6 clarifying questions about file type, checklist standard, jurisdiction, transaction stage, missing-document tolerance, and escalation preferences before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Transaction profile | Side, address, agent, client type, and current stage | Buyer side, 456 Oak Ave, under contract, closing August 14 |
| File contents | Uploaded documents or a document list | Purchase agreement, agency disclosure, inspection addendum, lender letter |
| Checklist standard | Brokerage, MLS, state, or association checklist used for review | Brokerage resale buyer checklist, 2026 version |
| Deadlines | Closing date and internal correction deadline | Close August 14, compliance fixes due August 7 |
| Known concerns | Questions or flagged issues from staff | Initials missing on counteroffer page 3 |

## Output Format
An Excel workbook named Brokerage_Compliance_File_Review_<address>_<date>.xlsx. Sheets: File Overview, Required Document Matrix, Findings Log, Correction Tracker, Broker Summary. Required Document Matrix columns: Item, Required For, Present, Signed, Initialed, Dated, Complete, Severity, Owner, Fix-By Date, Notes. Broker Summary shows counts by severity, open items, documents needing broker judgment, and a print-ready approval checklist.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before building the workbook and use its document categories as the default checklist.
2. Create an Excel workbook with the sheets listed in the Output Format and freeze the header row on each data sheet.
3. Summarize the transaction profile at the top of File Overview, including side, address, agent, stage, closing date, and review date.
4. Create the Required Document Matrix and mark each item as complete, incomplete, not applicable, or needs broker review based only on the provided file contents.
5. Create Findings Log rows for missing signatures, missing dates, incomplete addenda, inconsistent names, unreadable pages, missing broker initials, and unexplained document gaps.
6. Assign severity as Critical, High, Medium, Low, or Broker Judgment, and give each item a plain-English reason.
7. Create Correction Tracker rows that identify the responsible person, fix-by date, recommended correction step, and proof needed to close the item.
8. Create a Broker Summary page that is easy to print or email, with open critical items first and a final review-status recommendation.

## Fair Housing & Compliance Notes
This skill supports file organization and risk spotting only. Do not give legal conclusions, interpret state law as final, or declare a file legally compliant. Use broker-approved checklists where provided and flag uncertain items for broker, compliance counsel, association, MLS, or state commission review.

## Sample Trigger Phrases
- Audit this transaction file
- Check this file for missing signatures
- Build a compliance review tracker
- Review my closing file before archive
- Tell me what is missing from this transaction packet
