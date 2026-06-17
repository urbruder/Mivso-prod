---
name: fair-housing-language-checker
description: "Use this skill whenever an agent needs a fair housing language checker, asks to build a fair housing language checker, or needs help with this catalog job: Flags and rewrites steering/Fair-Housing risk in any listing or ad copy. Produces a Word document for Fair Housing Language Checker."
---

## Required Connectors
None - this skill runs entirely within Claude using details, notes, pasted text, uploaded documents, or exported files the agent provides.

## What This Skill Does
Creates a finished Word document for Fair Housing Language Checker. It helps the agent handle this catalog job: Flags and rewrites steering/Fair-Housing risk in any listing or ad copy. The output is formatted so it can be reviewed, shared, printed, or used in a client, team, broker, investor, vendor, borrower, owner, or title conversation without another formatting pass.

## How to Run This Skill
1. Tell Claude: "Build a fair housing language checker"
2. Provide the following practical inputs:
- Compliance question or file: The copy, agreement, checklist, referral, policy issue, or transaction file to review
- Jurisdiction and brokerage rules: State, MLS, brokerage policy, or supervising broker direction supplied by the agent
- Source materials: Documents, pasted text, screenshots described in words, policy excerpts, or notes
- Risk tolerance and audience: Who will use the output and whether it is for client, broker, admin, or internal review
3. Claude will ask up to five clarifying questions if required facts are missing, if the audience is unclear, or if a compliance-sensitive point needs confirmation before creating the file.
4. Claude will create the Word document and include a short note naming what to verify before sending or presenting it.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Compliance question or file | The copy, agreement, checklist, referral, policy issue, or transaction file to review | Draft ad copy and brokerage checklist for review |
| Jurisdiction and brokerage rules | State, MLS, brokerage policy, or supervising broker direction supplied by the agent | California file, local MLS advertising rules, broker requires pre-approval |
| Source materials | Documents, pasted text, screenshots described in words, policy excerpts, or notes | Referral agreement draft and email thread |
| Risk tolerance and audience | Who will use the output and whether it is for client, broker, admin, or internal review | Internal pre-audit before broker compliance check |

## Output Format
A Word document named Fair_Housing_Language_Checker_with_date.docx with a polished cover heading, a short executive summary, an input snapshot, the main Fair Housing Language Checker deliverable, client-facing language or talking points, risk and compliance notes, and a final next-step checklist. Use headings, tables, bullets, and short paragraphs so the agent can print, email, or use the document in a meeting. Approximate length: 4-8 pages unless the supplied materials require more detail.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read REFERENCE.md before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent supplied enough facts to create the visual deliverable. Ask only necessary clarifying questions and do not ask for information already provided.
3. Use tables for checklists, options, scripts, timelines, objections, responsibilities, or risks when they make the document easier to use.
4. Write client-facing sections as ready-to-send language unless the section is clearly marked as internal agent notes.
5. Use risk labels such as Low, Medium, High, Broker Review, Counsel Review, CPA Review, Lender Review, or MLS Review when appropriate.
6. Convert the source material into a polished Word document that directly supports this job: Flags and rewrites steering/Fair-Housing risk in any listing or ad copy.
7. Separate facts supplied by the agent from recommendations, assumptions, and items that need verification.
8. Create the exact file structure described under Output Format. Use tables, scorecards, checklists, slide sections, or visual callouts so the client never receives raw notes.
9. Write in plain real estate language. Keep client-facing language calm, specific, and useful instead of generic or salesy.
10. Add a final Verify Before Sending section listing numbers, dates, legal terms, market facts, third-party data, forms, or compliance-sensitive statements the agent should confirm.
11. Name the file with the skill name and current date, then present the completed visual deliverable to the client.

## Fair Housing & Compliance Notes
This is compliance organization and risk-spotting support, not legal advice. Do not declare that a file, ad, agreement, tax plan, or referral arrangement is legally compliant. Flag items for broker, counsel, CPA, lender, title, MLS, or compliance officer review when rules or legal interpretation are involved.

## Sample Trigger Phrases
- "Build a fair housing language checker"
- "Create a client-ready fair housing language checker"
- "Turn these notes into a fair housing language checker"
- "Help me prepare a fair housing language checker for my next real estate conversation"
- "I need a polished fair housing language checker deliverable"
