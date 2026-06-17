---
name: team-sop-playbook-builder
description: "Use this skill whenever a real estate team leader, broker, ops manager, or rainmaker needs to turn informal team workflows into a written SOP playbook covering roles, handoffs, quality standards, and recurring processes. Produces a Word playbook with SOPs, checklists, role maps, and handoff templates."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a clean team operations playbook from scattered notes, voice memos, or leader knowledge so team members know what to do, who owns it, and when to escalate.

## How to Run This Skill
1. Tell Claude: "Build a team SOP and playbook"
2. Provide:
- Team structure, roles, and who handles leads, listings, buyers, admin, and transactions
- The workflows that need to be documented
- Current pain points, missed handoffs, or quality problems
- Brand, compliance, client-service, and communication standards
- Any existing checklists, templates, or meeting rhythms
3. Claude will ask up to 7 clarifying questions about team roles, highest-risk workflows, handoff points, approvals, service standards, and desired playbook depth before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Team roles | People or positions involved in the workflows | Rainmaker, buyer agent, listing manager, TC, marketing assistant |
| Workflow list | Processes to document | New lead intake, listing launch, offer review, closing handoff |
| Pain points | Where mistakes or delays happen today | Leads fall through when the ISA is off |
| Standards | Service, timing, brand, and approval requirements | All client texts answered within one business hour |
| Existing materials | Current notes, checklists, templates, or meeting cadence | Weekly pipeline meeting agenda and listing checklist |

## Output Format
A Word document named Team_SOP_Playbook_<team>_<date>.docx. Structure: cover page; playbook purpose; team role map; responsibility matrix; workflow index; 6-10 SOP sections; handoff checklists; escalation rules; quality-control checklist; meeting rhythms; glossary; revision log. Each SOP includes purpose, owner, trigger, inputs, steps, handoff, quality standard, escalation point, and completion proof. Approximate length: 18-30 pages.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before building the playbook and use its SOP anatomy for each workflow.
2. Identify the highest-risk and highest-frequency workflows first, then organize the playbook around those workflows.
3. Create a role map that explains who owns each major business function and who backs them up.
4. Create a responsibility matrix with Owner, Support, Approver, and Informed columns for every workflow.
5. Write each SOP in plain language with a clear trigger, required inputs, ordered steps, handoff, and completion proof.
6. Add checklists for workflows that need repeatable execution, such as lead intake, listing launch, offer review, contract-to-close, and post-close nurture.
7. Add escalation rules for compliance, client conflict, legal questions, safety, compensation, missed deadlines, and technology outages.
8. End with a revision log and a simple instruction for how the team should update the playbook monthly.

## Fair Housing & Compliance Notes
Do not create SOPs that conflict with broker supervision, state licensing rules, MLS rules, advertising rules, Fair Housing, privacy obligations, or written employment/contractor agreements. Flag any uncertain process for broker or counsel review.

## Sample Trigger Phrases
- Turn my team workflows into SOPs
- Build a real estate team playbook
- Document our listing launch process
- Create role handoffs for my team
- Make an operations manual for my brokerage team
