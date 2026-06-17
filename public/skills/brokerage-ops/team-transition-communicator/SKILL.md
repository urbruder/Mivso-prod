---
name: team-transition-communicator
description: "Use this skill whenever a broker or team lead needs to communicate an agent departure, reassignment, leave of absence, role change, or team transition to active clients without creating confusion or risk. Produces a Word communication packet with client emails, texts, call scripts, internal notes, and handoff checklists."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a calm, professional transition communication packet that reassures clients, names the new point of contact, protects the brokerage relationship, and gives staff a consistent script to use.

## How to Run This Skill
1. Tell Claude: "Create a team transition communication packet"
2. Provide:
- What changed, such as agent departure, leave, reassignment, or team restructure
- Client groups affected and their transaction stages
- New point of contact, broker contact, TC contact, and escalation path
- Tone constraints and what can or cannot be disclosed
- Any required broker or legal language
3. Claude will ask up to 6 clarifying questions about transition facts, client groups, approved language, timing, escalation rules, and sensitivity level before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Transition scenario | The change that needs to be communicated | Listing agent left the team; broker and listing manager will take over |
| Client segments | Who needs which version of the message | Active listings, under-contract buyers, long-term leads |
| New contacts | Names and roles clients should use going forward | Broker Dana Lee, TC Martin Chen |
| Disclosure limits | What should not be said | Do not discuss employment details or dispute |
| Timing plan | When messages should go out and in what order | Calls today, email recap within one hour |

## Output Format
A Word document named Team_Transition_Communication_Packet_<team>_<date>.docx. Sections: broker briefing; client segment map; message timing plan; phone scripts; email templates; text templates; internal staff FAQ; handoff checklist; risk escalation notes; final approval page. Include separate templates for active listing clients, active buyers, under-contract clients, past clients, and leads. Approximate length: 10-16 pages.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before writing the packet and use its client-segment matrix.
2. Separate communication by client stage so under-contract clients receive more concrete operational details than cold leads.
3. Write messages in a calm, factual, confident tone that avoids blame, gossip, or legal conclusions.
4. Name the new point of contact clearly and explain what clients should expect next.
5. Create a call script first, then email and text versions that summarize the same message in shorter form.
6. Create an internal FAQ so staff answer predictable questions consistently.
7. Create a handoff checklist that covers documents, deadlines, client preferences, active negotiations, and next scheduled touch.
8. Add an approval page listing who must review the communication before it is sent.

## Fair Housing & Compliance Notes
Do not disclose confidential personnel information, client facts, compensation disputes, disciplinary matters, protected characteristics, or legal claims. Communications involving employment disputes, contract assignment, agency relationship changes, or license issues must be reviewed by the broker and counsel where appropriate.

## Sample Trigger Phrases
- An agent left my team and I need client messages
- Write a transition email for active clients
- Create a client handoff script
- Help me announce a new point of contact
- Build a communication plan for a team change
