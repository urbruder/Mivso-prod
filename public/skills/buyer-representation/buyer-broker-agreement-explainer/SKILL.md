---
name: buyer-broker-agreement-explainer
description: "Use this skill whenever an agent says 'Build a buyer-broker agreement explainer', 'Create a buyer-broker agreement explainer for this client', 'Help me prepare a buyer-broker agreement explainer', or needs support for this job: Post-NAR scripts to get representation agreements signed without hesitation. Produces a client-ready Word document named Buyer_Broker_Agreement_Explainer.docx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Word document for this job: Post-NAR scripts to get representation agreements signed without hesitation. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a buyer-broker agreement explainer"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Word document and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Agreement terms | Duration, exclusivity, compensation language, retainer if any, and cancellation terms | 90 days, exclusive, 2.5 percent buyer broker compensation |
| Buyer context | First-time, repeat, investor, relocating, or referral buyer | First-time buyer worried about paying extra |
| State or brokerage notes | Any required local or brokerage language | Use brokerage-approved form language |
| Agent style | Direct, consultative, warm, data-driven, or concise | Warm and confident |

## Output Format
A Word document named `Buyer_Broker_Agreement_Explainer.docx` with the following structure:

- Plain-English Explainer section covering what the agreement is, why it exists, how compensation works, and what the buyer is agreeing to
- Conversation Script section with a warm explanation, objection responses, and a signing ask
- Buyer FAQ section with short answers to common concerns about exclusivity, length, cancellation, and compensation

Format the document with a clear title, short sections, tables where comparison helps, bold next steps, and language that can be pasted into an email or handed to a client.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Explain the agreement in client-friendly language without changing legal terms.
4. Make compensation clear and avoid implying that representation is free if buyer compensation may be paid through the transaction.
5. Write a script that frames the agreement as clarity, service commitment, and consumer protection.
6. Provide objection responses for: I do not want to be locked in, I thought the seller pays, I want to think about it, and can I cancel.
7. Flag any term the agent should confirm with broker or counsel.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Do not provide legal advice or rewrite contract terms. Use brokerage-approved language and tell the agent to confirm state-specific requirements with the broker.

## Sample Trigger Phrases
- "Build a buyer-broker agreement explainer"
- "Create a buyer-broker agreement explainer for this client"
- "Help me prepare a buyer-broker agreement explainer"
- "Turn these notes into a buyer-broker agreement explainer"
- "I need a client-ready buyer-broker agreement explainer"
