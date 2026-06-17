---
name: voice-note-to-polished-email
description: "Use this skill whenever an agent says 'Build a voice-note to polished email', 'Create a voice-note to polished email for this client', 'Help me prepare a voice-note to polished email', or needs support for this job: Turns messy between-showing dictation into a ready-to-send email. Produces a client-ready Word document named Polished_Email_From_Voice_Note.docx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Turns messy between-showing dictation into a ready-to-send email. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a voice-note to polished email"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Voice note or rough dictation | Raw spoken notes, fragmented text, or bullet thoughts | Tell Sarah appraisal came in low, ask if she wants to discuss options |
| Recipient | Who the email is going to and their relationship to the deal | Buyer client Sarah |
| Desired tone | Warm, firm, urgent, reassuring, celebratory, or neutral | Reassuring but direct |
| Required facts | Dates, numbers, decisions, attachments, or deadlines that must be accurate | Response needed by Thursday at 5 PM |

## Output Format
A Word document named `Polished_Email_From_Voice_Note.docx` with the following structure:

- Before Summary section with the messy voice-note points organized into facts, asks, and decisions
- Ready-to-Send Email section with subject line, greeting, concise body, clear ask, and sign-off
- Tone Options section with warm, firm, shorter, and more detailed variants when useful

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Separate facts from emotion and convert the message into a clear client-ready email.
4. Keep the agent voice natural and professional. Remove rambling, filler, and accidental blame.
5. If legal, financial, or contract details are unclear, mark them for confirmation instead of inventing them.
6. Provide one primary email and up to two tone alternatives only when the context calls for it.
7. Add a short checklist of facts the agent should verify before sending.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not give legal, tax, mortgage, or inspection advice as fact. Use client-safe language and refer technical decisions to the appropriate professional when needed.

## Sample Trigger Phrases
- "Build a voice-note to polished email"
- "Create a voice-note to polished email for this client"
- "Help me prepare a voice-note to polished email"
- "Turn these notes into a voice-note to polished email"
- "I need a client-ready voice-note to polished email"
