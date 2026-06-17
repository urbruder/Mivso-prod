---
name: open-house-sign-in-optimizer
description: "Use this skill whenever an agent wants a better open house sign-in flow that captures real contact details, visitor intent, consent, and follow-up notes. Triggers include open house sign-in, QR sign-in form, visitor questions, capture real contact info, or sign-in sheet optimizer. Produces a Word document with a printable sign-in sheet, QR poster copy, form question list, consent wording, and conversation prompts."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Creates an open house sign-in system that feels professional and useful instead of intrusive. The agent receives a Word document with a printable sign-in sheet, QR sign-in poster copy, form questions, conversation prompts, and follow-up consent language.

## How to Run This Skill
1. Tell Claude: "Optimize my open house sign-in"
2. Provide:
- The open house property, date, and visitor audience
- Whether the agent will use paper, QR form, tablet, or mixed sign-in
- Questions the agent wants answered
- Follow-up plan and consent requirements
3. Claude will ask up to 4 clarifying questions about sign-in method, visitor goal, follow-up consent, and required questions before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Property details | Open house address, date, and listing type | 41 Brookside, Saturday 12–3 PM |
| Sign-in method | Paper, QR code, tablet, or combined approach | QR code plus paper backup |
| Visitor goal | Information the agent needs to capture | Buyer timeline and whether they have an agent |
| Follow-up offer | Why a visitor should provide accurate details | Send disclosures, similar homes, or showing times |
| Consent language | Any brokerage-approved wording or required opt-in statement | Permission to follow up by text or email |

## Output Format
A Word document named Open_House_Sign_In_Optimizer_<property street>_<date>.docx. Structure: one-page printable sign-in sheet, QR poster headline and copy, tablet-form question list, visitor conversation prompts, privacy and consent note, follow-up tagging guide, and agent quick checklist. Approximate length: 4–6 pages.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting and use the sign-in question hierarchy to keep the form short.
2. Create a one-page sign-in sheet with fields for name, phone, email, representation status, buying or selling timeline, interest level, and follow-up permission.
3. Write QR poster copy that explains the benefit of signing in, such as receiving disclosures, price updates, or similar listings.
4. Create tablet-form questions with required and optional fields clearly separated.
5. Write conversation prompts the agent can use at the door to improve real information capture without pressure.
6. Create a tagging guide for Hot Buyer, Warm Buyer, Neighbor Seller Signal, Future Seller, Represented Buyer, and Unknown.
7. Add consent and privacy language the agent can adapt to brokerage requirements.
8. Format the Word document so the sign-in sheet and poster copy can be printed cleanly.

## Fair Housing & Compliance Notes
Do not request sensitive protected-class information. Respect privacy, consent, and local rules for text or email follow-up. Ask represented buyers to coordinate through their agent when appropriate. Do not condition entry on unnecessary personal information unless required by seller or brokerage policy and legally permissible.

## Sample Trigger Phrases
- Create a better open house sign-in sheet
- Write QR poster copy for my open house
- Optimize visitor questions for sign-in
- Help me capture real contact info
- Build an open house lead tagging guide
