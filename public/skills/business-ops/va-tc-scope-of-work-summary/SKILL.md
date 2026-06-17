---
name: va-tc-scope-of-work-summary
description: "Use this skill whenever an agent says 'Build a va or tc scope-of-work summary', 'Create a va or tc scope-of-work summary for this client', 'Help me prepare a va or tc scope-of-work summary', or needs support for this job: Distills onboarding agreements into permitted-vs-prohibited task tables. Produces a client-ready Word document named VA_TC_Scope_of_Work_Summary.docx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Distills onboarding agreements into permitted-vs-prohibited task tables. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a va or tc scope-of-work summary"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Agreement or role description | The VA, TC, assistant, or admin scope language to summarize | Independent TC agreement and onboarding notes |
| Brokerage rules | Any office policy about licensed and unlicensed activities | Unlicensed VA cannot negotiate terms or advise clients |
| State context | State or market where the agent operates | Texas residential sales |
| Systems involved | Tools and information the assistant may access | CRM, e-sign, transaction checklist, calendar |

## Output Format
A Word document named `VA_TC_Scope_of_Work_Summary.docx` with the following structure:

- Executive Summary with the assistant or transaction coordinator role, scope, decision limits, and supervision needs
- Permitted vs Prohibited Task Table with task, allowed status, conditions, required approval, and risk note
- Delegation Checklist with onboarding items, system access, communication rules, escalation triggers, and broker review items

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Translate the scope into a plain-English role summary the agent can actually use.
4. Separate tasks into permitted, permitted with approval, prohibited, and broker-review-needed.
5. Flag any task that appears to require a real estate license, legal judgment, client advice, negotiation, or unsupervised money handling.
6. Create a delegation checklist that prevents accidental over-delegation.
7. Add questions for the broker or attorney where the scope is unclear.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not decide licensing law as a final authority. Flag questionable tasks for broker, state regulator, or legal review. Never authorize unlicensed people to negotiate or advise clients.

## Sample Trigger Phrases
- "Build a va or tc scope-of-work summary"
- "Create a va or tc scope-of-work summary for this client"
- "Help me prepare a va or tc scope-of-work summary"
- "Turn these notes into a va or tc scope-of-work summary"
- "I need a client-ready va or tc scope-of-work summary"
