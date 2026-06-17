---
name: agent-onboarding-sop-coach
description: "Use this skill whenever a broker, team lead, or operations manager needs to onboard a new agent, explain brokerage systems, build a first-30-days ramp plan, or turn scattered onboarding notes into a professional SOP packet. Produces a Word onboarding playbook with checklists, training milestones, system access guidance, and manager follow-up prompts."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a practical onboarding playbook for a new agent so the broker or team lead can hand over one polished document instead of explaining the same systems, compliance steps, and expectations repeatedly.

## How to Run This Skill
1. Tell Claude: "Build an agent onboarding and SOP plan"
2. Provide:
- Brokerage or team name and market area
- New agent name, experience level, start date, and role
- Systems the agent must learn, such as CRM, e-sign, MLS, showing tools, transaction folders, and communication channels
- Required compliance, brand, and office procedures
- Manager, mentor, TC, or operations contacts who support the agent
3. Claude will ask up to 6 clarifying questions about role type, systems, required training, supervision cadence, state or MLS issues, and desired tone before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Brokerage/team profile | Name, market, team size, service model, and brand promise | Apex Realty Group, 18 agents, suburban listing-heavy team |
| Agent profile | New agent role, experience, start date, and production goal | New buyer agent, licensed 2 months, starts July 1 |
| Systems list | Tools and accounts the agent must use | MLS, ShowingTime, Dotloop, Follow Up Boss, Google Drive |
| Required procedures | Office rules, compliance requirements, and transaction workflows | All offers reviewed by broker before delivery |
| Support roles | Who trains, approves, and answers questions | Team lead, mentor agent, transaction coordinator, office admin |

## Output Format
A Word document named Agent_Onboarding_Playbook_<brokerage>_<date>.docx, using the brokerage name and current date. Structure: cover page; welcome note; role expectations; first-day setup checklist; first-week training calendar; first-30-days ramp plan; 60- and 90-day milestones; systems guide; compliance must-dos; transaction workflow overview; manager check-in agenda; agent self-review page. Include tables for due dates, owners, status, and links or locations for internal resources. Approximate length: 12-18 pages.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before drafting the playbook and use its onboarding checklist as the baseline.
2. Create a polished Word document with a clear cover page, table of contents, and section headings written for a busy real estate agent.
3. Turn the agent profile into a role-specific ramp plan. Separate new-license onboarding from experienced-agent transfer onboarding when needed.
4. Build a first-day checklist that covers paperwork, accounts, office orientation, compliance acknowledgments, brand assets, and calendar setup.
5. Build a 30-day ramp plan with weekly goals, training topics, practice assignments, production expectations, and manager check-ins.
6. Create a systems guide that explains what each tool is used for, when to use it, who owns it, and where the agent gets help.
7. Add a manager follow-up section with check-in questions, red flags, and suggested coaching prompts.
8. End with a one-page agent self-review that captures what is complete, what is blocked, and what support is needed next.

## Fair Housing & Compliance Notes
Do not tell the agent that onboarding replaces broker supervision, state-required training, MLS orientation, or legal advice. Flag items that require broker, MLS, state commission, or legal review. Do not include protected-class assumptions, discriminatory recruiting language, or confidential client data.

## Sample Trigger Phrases
- Build a 30-day onboarding plan for a new agent
- Turn our onboarding notes into an SOP packet
- Create a systems guide for a new team member
- Help me onboard an experienced agent joining my brokerage
- Make a broker-ready agent ramp plan
