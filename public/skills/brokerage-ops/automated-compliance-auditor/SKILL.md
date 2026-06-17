---
name: automated-compliance-auditor
description: "Use this skill whenever a broker, compliance manager, TC, or operations lead wants a repeatable audit of uploaded contract packets, disclosure sets, or transaction folders and needs agent-facing notices for missing requirements. Produces an Excel compliance audit dashboard plus message drafts for agents."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a compliance audit workbook that reads the provided file list or uploaded documents, flags missing or incomplete requirements, and prepares clear notices the broker or TC can send to the responsible agent.

## How to Run This Skill
1. Tell Claude: "Run an automated compliance audit"
2. Provide:
- Transaction packet, file list, or document export to audit
- Brokerage checklist or required-document standard
- Transaction side, status, property address, agent name, and key deadlines
- Severity rules or escalation preferences
- Preferred wording for agent notices
3. Claude will ask up to 6 clarifying questions about audit standard, transaction type, document scope, deadline, notice tone, and who receives escalations before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Audit packet | Uploaded documents, folder export, or document list | PDF packet with purchase contract, disclosures, addenda, and lender letter |
| Audit standard | Checklist used to decide what is required | Brokerage resale purchase checklist |
| Transaction facts | Address, side, agent, status, dates | Seller side, closing July 22, agent Priya Shah |
| Severity rules | How urgent each issue should be treated | Missing signature is High; file naming issue is Low |
| Notice preferences | Tone and delivery style for agent messages | Direct but supportive Slack-style reminders |

## Output Format
An Excel workbook named Automated_Compliance_Audit_<address>_<date>.xlsx. Sheets: Audit Dashboard, Document Checklist, Exceptions Log, Agent Notices, Escalation Queue, Audit Notes. Dashboard shows completion rate, critical open items, high-priority items, items by owner, and review status. Exceptions Log columns: Requirement, Document, Issue, Severity, Owner, Evidence, Recommended Fix, Due Date, Status. Agent Notices contains copy-ready messages grouped by agent and severity.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before creating the workbook and apply its issue types and severity logic unless the user provides brokerage-specific rules.
2. Create the Excel workbook with the sheets listed in Output Format and use a visible dashboard page as the first sheet.
3. Build the Document Checklist from the provided audit standard, then mark each requirement as Present, Missing, Incomplete, Needs Review, or Not Applicable.
4. Create Exceptions Log rows only when there is a concrete issue or uncertainty that needs review.
5. Assign severity using the brokerage standard if provided; otherwise use Critical, High, Medium, Low, and Needs Broker Review.
6. Write Agent Notices in a concise, non-accusatory tone that names the issue, reason, fix needed, and deadline.
7. Create an Escalation Queue for items that may delay closing, payment, file approval, or risk management.
8. Add Audit Notes explaining assumptions, documents not reviewed, and items that require broker or legal judgment.

## Fair Housing & Compliance Notes
Do not promise that the file is legally compliant or that all risks have been found. Treat the audit as an operational review based on provided documents. Flag unclear legal, agency, disclosure, MLS, settlement, or compensation issues for broker or counsel review.

## Sample Trigger Phrases
- Audit these contract packets
- Find missing compliance items
- Create agent notices for missing forms
- Run a transaction compliance scan
- Build a compliance audit dashboard
