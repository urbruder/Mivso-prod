---
name: one-click-agent-setup
description: "Use this skill whenever a brokerage operations manager, broker, admin, or team lead needs to set up a new agent across email, e-sign, MLS, transaction tools, CRM, marketing assets, training, and security permissions. Produces an Excel provisioning workbook with owners, statuses, due dates, access levels, and welcome-packet checklist."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a complete agent setup tracker so operations can see every account, document, permission, training task, and welcome item required before the agent starts working with clients.

## How to Run This Skill
1. Tell Claude: "Create a one-click agent setup tracker"
2. Provide:
- Agent name, license status, start date, role, market, and manager
- Software and access list used by the brokerage
- E-sign packets, forms, policies, and onboarding documents required
- Brand assets, email, calendar, phone, website, and profile needs
- Owner names for admin, broker, IT, marketing, TC, and manager tasks
3. Claude will ask up to 7 clarifying questions about role, start date, required systems, access levels, owners, security rules, and setup deadlines before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Agent profile | Name, license, role, start date, office, manager | Jordan Reed, buyer agent, starts July 8, reports to Priya Shah |
| Access stack | Systems that need account setup | Email, MLS, CRM, Dotloop, Skyslope, ShowingTime, Google Drive |
| Documents and packets | Forms and agreements agent must complete | ICA, W-9, policy acknowledgment, brand agreement |
| Brand and marketing needs | Profile, photo, bio, email signature, website, cards | Headshot uploaded, bio pending, website profile needed |
| Task owners | Who completes each part of setup | Ops admin owns email; broker owns MLS approval; marketing owns profile |

## Output Format
An Excel workbook named One_Click_Agent_Setup_<agent>_<date>.xlsx. Sheets: Setup Dashboard, Access Checklist, Documents & Packets, Brand & Marketing, Training Schedule, Owner Task List, Security Review, Welcome Packet. Access Checklist columns: System, Purpose, Access Level, Owner, Request Date, Needed By, Status, Login Delivered, Training Required, Security Notes. Setup Dashboard shows percent complete, blocked items, due-soon items, and day-one readiness.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before building the tracker and use its setup categories as the default task list.
2. Create the workbook with Setup Dashboard first and make the workbook usable by a non-technical office admin.
3. Create Access Checklist rows for email, calendar, MLS, e-sign, transaction management, CRM, showing tools, document storage, marketing tools, phone, website, and internal communication channels.
4. Create Documents & Packets with required onboarding paperwork, responsible owner, due date, delivery method, received status, and broker approval status.
5. Create Brand & Marketing tasks for bio, headshot, profile, email signature, social links, business cards, yard-sign needs, and announcement copy.
6. Create Training Schedule for first-week systems training, compliance training, lead-routing training, and transaction workflow training.
7. Create Security Review that flags unnecessary access, shared passwords, missing two-factor authentication, and systems to disable if the agent does not start.
8. Create a Welcome Packet checklist with items the agent should receive on or before day one.

## Fair Housing & Compliance Notes
Do not create access that violates licensing status, MLS membership rules, written brokerage policy, security policy, or independent-contractor agreement. Treat personal data and login information as confidential. Do not include passwords in the workbook.

## Sample Trigger Phrases
- Set up a new agent
- Create an agent provisioning checklist
- Build a one-click onboarding tracker
- Track email MLS and software access for a new hire
- Make an agent setup workbook
