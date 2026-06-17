---
name: broker-recruiting-pitch
description: "Use this skill whenever a broker, team leader, or recruiter needs a recruiting pitch for agents, producers, teams, or referral partners, especially when the pitch must be tailored by production tier, pain point, support model, commission structure, or objection. Produces a PowerPoint recruiting deck with speaker notes, outreach copy, and objection responses."
---

## Required Connectors
None — this skill runs entirely within Claude. If the brokerage wants Claude to work from a live CRM, document drive, transaction platform, website, or MLS system, upload/export the relevant information instead of requiring a connector.

## What This Skill Does
Creates a broker-ready recruiting presentation that explains why the target agent should consider the brokerage, how the brokerage supports their business, and how to handle common objections without sounding generic.

## How to Run This Skill
1. Tell Claude: "Build a broker recruiting pitch deck"
2. Provide:
- Brokerage or team value proposition and market area
- Target recruit profile, production tier, and current pain points
- Compensation model or talking points the broker is willing to share
- Support, technology, lead flow, culture, coaching, and operations advantages
- Proof points, testimonials, case studies, or differentiators
3. Claude will ask up to 6 clarifying questions about target agent segment, recruiting goal, proof points, economics, brand tone, and call to action before starting.

## Inputs Required
| Input | Description | Example |
|---|---|---|
| Recruit profile | Who the pitch targets and what they care about | 8-million-dollar producer frustrated by admin workload |
| Brokerage value proposition | Main reasons an agent should join | High-touch TC support, local listings team, coaching, marketing studio |
| Economics | Split, cap, fees, lead costs, or approved talking points | 80/20 to cap, no desk fee, team lead opportunities |
| Proof points | Numbers, stories, testimonials, or retention wins | Three agents doubled listing volume within 12 months |
| Call to action | Desired next step | Private 30-minute business audit with broker |

## Output Format
A PowerPoint deck named Broker_Recruiting_Pitch_<brokerage>_<date>.pptx. Slides: Title, Recruit Pain Point, Why Agents Leave Their Current Brokerage, Brokerage Value Proposition, Support Model, Economics Overview, Technology and Marketing Stack, Production-Tier Path, Success Proof, Objection Responses, Transition Plan, Call to Action. Include speaker notes on each slide and an appendix with short email and text outreach messages.

## Step-by-Step Instructions for Claude
(This section is for Claude to follow at runtime — not shown to the client.)

1. Read REFERENCE.md before building the deck and use the production-tier messaging table to tailor the pitch.
2. Create a concise, visual slide deck with one main point per slide and speaker notes written in a confident but non-pushy voice.
3. Start with the recruit pain point, not the brokerage resume. Connect each brokerage feature to a specific recruit outcome.
4. Build a production-tier path slide for the target agent, showing how the offer supports their next stage of growth.
5. Create an economics slide that is factual, simple, and framed as a conversation rather than a guaranteed income claim.
6. Create an objection-response slide with 5-7 likely objections and short talk tracks.
7. Create a transition plan slide that lowers perceived switching risk and names the first three steps after a yes.
8. Add an appendix with one email, one text, one voicemail, and one LinkedIn-style message aligned to the deck.

## Fair Housing & Compliance Notes
Do not make false earnings claims, imply guaranteed leads, misuse competitor names, or target recruits based on protected traits. Compensation, independent-contractor status, license transfer, non-solicit, and advertising claims must be reviewed by the broker and counsel where appropriate.

## Sample Trigger Phrases
- Create a recruiting pitch for a top producer
- Build a deck to recruit agents to my brokerage
- Write a production-tier recruiting pitch
- Help me handle recruiting objections
- Make a broker recruiting presentation
