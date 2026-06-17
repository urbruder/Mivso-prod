---
name: ce-and-license-renewal-tracker
description: "Use this skill whenever an agent says 'Build a ce and license renewal tracker', 'Create a ce and license renewal tracker for this client', 'Help me prepare a ce and license renewal tracker', or needs support for this job: Tracks CE hours and renewal cycles across one or more states. Produces a client-ready Excel workbook named CE_License_Renewal_Tracker.xlsx."
---

## Required Connectors
None — this skill runs entirely within Claude using the details or files the agent provides.

## What This Skill Does
Creates a polished Excel workbook for this job: Tracks CE hours and renewal cycles across one or more states. The output is ready for the agent to review, share, print, or use in a client or team conversation without extra formatting.

## How to Run This Skill
1. Tell Claude: "Build a ce and license renewal tracker"
2. Provide the inputs listed below. Notes, pasted text, screenshots described in words, exported lists, or uploaded documents are all acceptable when they contain the needed facts.
3. Claude will ask up to five clarifying questions if a required input is missing or if a compliance-sensitive fact needs confirmation.
4. Claude will create the Excel workbook and include a short summary of what changed, what to verify, and the next action.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| License details | State, license type, license number, and renewal date | Florida sales associate, renewal due September 30 |
| CE requirements | Required hours and course categories | 14 hours total, 3 core law, 3 ethics |
| Completed courses | Courses already taken and certificates available | Fair Housing, 3 hours, certificate saved |
| Brokerage reminders | Any brokerage-specific deadlines or document rules | Submit certificate to compliance 30 days early |

## Output Format
An Excel workbook named `CE_License_Renewal_Tracker.xlsx` with the following structure:

- License Dashboard with license state, license number, renewal date, days remaining, CE hours required, CE hours completed, and status
- Course Log with course name, provider, category, date completed, hours, certificate status, and proof link or file note
- Renewal Checklist with application, fees, broker approval, ethics requirement, and document-upload tasks

Format the workbook with a title row, frozen headers, readable column widths, wrapped text for notes, status labels, and a one-page summary or dashboard when the content includes multiple rows or scenarios.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime - not shown to the client.)

1. Read `REFERENCE.md` before drafting the deliverable. Use it for field choices, output checks, and compliance reminders.
2. Confirm the agent provided enough information to produce the deliverable. Ask only necessary clarifying questions, and do not ask for information already supplied.
3. Create a tracker that is useful for one license or multiple state licenses.
4. Flag any missing CE category, missing certificate, or renewal deadline inside 60 days.
5. Add a renewal task list in chronological order with owner, due date, and status.
6. Use clear status labels: Complete, On Track, Needs Proof, At Risk, and Overdue.
7. Add a note that the agent must verify current state requirements with the licensing authority or brokerage compliance team.
8. Build the exact output described under Output Format. Make it visually organized and ready to share.
9. Add a final 'Verify Before Sending' note listing any numbers, dates, legal terms, financing terms, or third-party facts the agent should confirm.

## Fair Housing & Compliance Notes
Licensing rules change. Do not state that requirements are current unless the client supplied the official rule or current source. Advise verification with the state regulator or broker.

## Sample Trigger Phrases
- "Build a ce and license renewal tracker"
- "Create a ce and license renewal tracker for this client"
- "Help me prepare a ce and license renewal tracker"
- "Turn these notes into a ce and license renewal tracker"
- "I need a client-ready ce and license renewal tracker"
