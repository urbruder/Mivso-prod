---
name: first-timer-jargon-translator
description: "Use this skill whenever an agent says 'Build a first-timer jargon translator', 'Create a first-timer jargon translator for this client', 'Help me prepare a first-timer jargon translator', or needs support for this job: Explains escrow, contingencies, title, and PITI in plain language. Produces a client-ready Word document named First_Timer_Jargon_Translator.docx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Explains escrow, contingencies, title, and PITI in plain language. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a first-timer jargon translator"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Terms or document excerpt | The words, contract section, lender note, or title terms the buyer does not understand | Escrow, contingency, PITI, title commitment, appraisal gap |
| Buyer stage | Pre-approval, touring, offer, inspection, appraisal, underwriting, or closing | Writing first offer |
| Local context | State or brokerage wording if relevant | California purchase agreement terms |
| Tone preference | Very simple, normal adult, or detailed explainer | Simple but not patronizing |

## Output Format
A Word document named `First_Timer_Jargon_Translator.docx` with the following structure:

- Glossary section translating the terms the buyer is seeing into plain English
- Process Map section showing where each term appears in the homebuying timeline
- Questions to Ask section with lender, inspector, escrow, title, and agent questions

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Translate each term into a short plain-English definition, why it matters, and what the buyer should do next.
4. Organize the terms in the order the buyer will encounter them.
5. Avoid legal conclusions or advice about what the buyer should sign.
6. Add a quick confidence check at the end with three questions the buyer should be able to answer.
7. Use warm, non-patronizing language.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not interpret legal rights as a lawyer. For contract terms, tell the buyer to ask the agent, broker, or attorney for binding guidance.

## Sample Trigger Phrases
- "Build a first-timer jargon translator"
- "Create a first-timer jargon translator for this client"
- "Help me prepare a first-timer jargon translator"
- "Turn these notes into a first-timer jargon translator"
- "I need a client-ready first-timer jargon translator"
