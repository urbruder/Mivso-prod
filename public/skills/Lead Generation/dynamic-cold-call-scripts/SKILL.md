---
name: dynamic-cold-call-scripts
description: "Use this skill whenever an agent needs conversational cold-call scripts for expireds, FSBOs, homeowners, investors, old leads, or neighborhood farming. Triggers include cold-call script, opinion opener, prospecting call, seller call script, or buyer lead call. Produces a Word document with branching scripts, objections, voicemails, and call notes."
---

## Required Connectors
None — this skill runs entirely within Claude. If the agent has CRM, portal, sign-in, or spreadsheet data, ask them to paste it or upload an export rather than requiring a connector.

## What This Skill Does
Creates a call script playbook that adapts to the target segment and avoids robotic hard-sell language. The agent receives a Word document with openers, discovery questions, objection responses, voicemails, and notes for follow-up.

## How to Run This Skill
1. Tell Claude: "Build dynamic cold-call scripts"
2. Provide:
- The target segment and source of the list
- The reason for the call
- The offer or call to action
- Likely objections and the agent’s preferred tone
3. Claude will ask up to 5 clarifying questions about target segment, list source, offer, compliance constraints, and desired close before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Target segment | Who the agent is calling | Homeowners in Cedar Ridge, old buyer leads, FSBO sellers |
| Call reason | Why this call makes sense now | Recent sale nearby, open house invitation, market update |
| Offer | The helpful next step being offered | Free equity update or buyer consultation |
| Likely objections | Common pushback to prepare for | Not selling, already have an agent, too busy |
| Close | The outcome the agent wants | 15-minute appointment or permission to send market update |

## Output Format
A Word document named Dynamic_Cold_Call_Scripts_<segment>_<date>.docx. Structure: call strategy summary, permission-based openers, segment-specific scripts, discovery question bank, branching objection responses, voicemail scripts, follow-up message templates, and call notes sheet. Approximate length: 6–10 pages.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting and choose the script pattern that fits the target segment.
2. Create a permission-based opener that states the reason for the call and asks a low-pressure opinion question.
3. Write a primary script and at least two alternate openers for the segment.
4. Create branching paths for interested, not interested, too busy, already has an agent, asks how you got my number, and requests information by text or email.
5. Write objection responses that acknowledge first, ask one question, and then offer a useful next step.
6. Write two voicemails: one direct and one softer close-the-loop version.
7. Add a follow-up message for after the call and a call-notes table with outcome categories.
8. Format the document as a script book with short lines that are easy to read while calling.

## Fair Housing & Compliance Notes
Follow do-not-call rules, brokerage policy, local solicitation rules, and any required disclosures. Do not call people who requested no contact. Do not use fear, pressure, protected-class assumptions, or misleading claims. Do not suggest commissions are fixed, standard, or required.

## Sample Trigger Phrases
- Write cold-call scripts for expired sellers
- Create an opinion opener for neighborhood calls
- Build scripts for old buyer leads
- Help me handle objections on prospecting calls
- Make a call script and voicemail for FSBOs
