---
name: smart-document-filing-assistant
description: "Use this skill whenever a broker, TC, or admin needs to classify real estate transaction documents, standardize file names, map documents to the right folder, identify missing documents, or create a filing index for closing, compliance, or archive. Produces an Excel document filing workbook with a rename map, folder-routing table, and missing-document list."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a structured filing index that tells the brokerage what each document appears to be, how it should be renamed, where it belongs, what is missing, and what staff should review before archiving.

## How to Run This Skill
1. Tell Claude: "Organize and rename this transaction file set"
2. Provide:
- Uploaded transaction documents or a file-name list
- Transaction address, client names, agent, side, and closing date
- Brokerage folder structure or preferred naming convention
- Required document categories or checklist
- Whether the output is for active file, closing, or archive
3. Claude will ask up to 6 clarifying questions about naming convention, folder structure, transaction side, required categories, privacy rules, and whether files are uploaded or listed before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Document set | Uploaded documents or existing file names | IMG_2341.pdf, signed_offer.pdf, seller_disclosure_scan.pdf |
| Transaction details | Facts used in naming and routing | 123 Oak St, seller side, agent Maria Lopez, closing July 30 |
| Folder structure | Where documents should be grouped | 01 Contract, 02 Disclosures, 03 Addenda, 04 Closing |
| Naming convention | How new file names should be formatted | Address_DocumentType_Date_Status.pdf |
| Required checklist | Documents expected in the file | Listing agreement, seller disclosure, purchase agreement, lead-based paint |

## Output Format
An Excel workbook named Smart_Document_Filing_Index_<address>_<date>.xlsx. Sheets: Filing Dashboard, Document Index, Rename Map, Folder Routing, Missing Documents, Staff Instructions. Document Index columns: Original File Name, Detected Document Type, Transaction Category, Date Detected, Signature Status, Confidence, Proposed File Name, Destination Folder, Review Needed, Notes. Filing Dashboard summarizes total documents, review-needed count, missing items, duplicate candidates, and archive readiness.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before creating the workbook and use its document categories and naming pattern unless the brokerage provides its own.
2. Create the workbook with Filing Dashboard first and a clear Document Index as the primary working sheet.
3. Classify each uploaded document or file name into a practical transaction category using visible title, file name, party names, dates, and context provided by the user.
4. Create a Proposed File Name for each document using transaction address, document type, date, and status when those facts are available.
5. Route each document to a destination folder based on the provided structure or the default folder model in REFERENCE.md.
6. Flag documents for review when the document type is uncertain, the scan appears incomplete, the file may be duplicate, or the document includes sensitive data.
7. Create Missing Documents from the required checklist and mark whether each missing item is required, optional, or not enough information.
8. Create Staff Instructions that explain how to rename, file, review, and confirm the index without using technical language.

## Fair Housing & Compliance Notes
Treat transaction documents as confidential. Do not expose client personal information in unnecessary file names. Do not declare a document legally sufficient. If document type, signature status, or required status is unclear, mark it Review Needed rather than guessing.

## Sample Trigger Phrases
- Organize these transaction documents
- Rename and file this closing packet
- Create a document filing index
- Map these files into the right folders
- Tell me what documents are missing from this file set
