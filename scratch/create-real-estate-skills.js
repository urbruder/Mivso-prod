const fs = require('fs');
const path = require('path');

const skillsDir = path.join(__dirname, '..', 'public', 'skills');

// Define the 110 skills grouped by category
const data = {
    "01. Lead Generation": [
        "expired-listing-re-engager",
        "fsbo-conversion-kit",
        "neighborhood-farming-engine",
        "sphere-reactivation-writer",
        "lead-qualification-scorer",
        "portal-lead-speed-reply",
        "open-house-follow-up-sequencer",
        "referral-request-composer",
        "cold-database-9-word-reactivator",
        "dynamic-cold-call-scripts",
        "inbound-lead-intent-classifier",
        "long-term-seller-nurture",
        "long-cycle-buyer-nurture",
        "drip-campaign-personalizer"
    ],
    "02. Listing & Seller": [
        "listing-description-writer",
        "cma-narrative-builder",
        "listing-presentation-builder",
        "pricing-objection-coach",
        "pre-listing-prep-checklist",
        "staging-recommendation-engine",
        "seller-net-sheet-explainer",
        "showing-feedback-summarizer",
        "listing-launch-sop",
        "listing-agreement-prep",
        "offer-review-comparison",
        "disclosure-highlight-extractor",
        "problem-property-reframer",
        "comp-selection-adjustment-helper"
    ],
    "03. Buyer Representation": [
        "buyer-needs-analysis",
        "buyer-broker-agreement-explainer",
        "neighborhood-comparison-report",
        "tour-itinerary-briefing",
        "offer-strategy-advisor",
        "inspection-report-summarizer",
        "financing-plain-english-explainer",
        "investor-buyer-numbers-brief",
        "first-timer-jargon-translator",
        "buyer-cold-feet-reassurance"
    ],
    "04. Marketing & Content": [
        "social-content-calendar",
        "reel-video-script-writer",
        "monthly-market-update",
        "newsletter-ghostwriter",
        "review-testimonial-requester",
        "just-listed-just-sold-campaign",
        "agent-bio-about-page",
        "buyer-persona-ad-profiler",
        "targeted-ad-audience-copy",
        "listing-media-shoot-brief",
        "3d-tour-walkthrough-brief",
        "website-idx-refresh-helper",
        "email-campaign-sequencer",
        "personal-pr-press-quote-drafter"
    ],
    "05. Negotiation": [
        "counteroffer-strategist",
        "objection-handling-scripts",
        "multiple-offer-manager",
        "appraisal-gap-navigator",
        "repair-request-credit-negotiator",
        "lowball-counter-strategy",
        "escalation-clause-explainer",
        "highest-and-best-call-notice"
    ],
    "06. Transaction Mgmt": [
        "contract-to-close-timeline",
        "milestone-update-templates",
        "document-disclosure-checklist",
        "contingency-addendum-explainer",
        "preferred-vendor-sheet-builder",
        "final-walkthrough-closing-prep",
        "closing-cost-walkthrough",
        "vendor-accountability-nudge",
        "title-escrow-crisis-comms",
        "move-in-day-blueprint",
        "showing-scheduler-coordinator",
        "lockbox-access-log-tracker"
    ],
    "07. Client Retention & Business Ops": [
        "anniversary-nurture-writer",
        "annual-equity-update",
        "hard-conversation-scripts",
        "client-welcome-kit",
        "relocation-orientation-guide",
        "weekly-business-planner",
        "after-hours-auto-responder",
        "multi-client-pipeline-tracker",
        "post-close-conflict-resolver",
        "co-buyer-family-update-writer",
        "crm-data-hygiene-dedupe",
        "mileage-expense-tax-log",
        "ce-license-renewal-tracker",
        "showing-safety-id-vetting",
        "lead-source-roi-tracker",
        "voice-note-polished-email",
        "client-event-roi-debrief",
        "practice-roleplay-scenario-builder"
    ],
    "08. Compliance, Admin & Brokerage Ops": [
        "fair-housing-language-checker",
        "wire-fraud-safe-closing-advisor",
        "listing-appointment-prep-brief",
        "broker-to-broker-referral-agreement",
        "respa-kickback-compliance-helper",
        "mls-idx-usage-rules-guide",
        "aml-kyc-checks-helper",
        "zoning-adu-change-briefer",
        "1031-cap-gains-guardrail",
        "va-tc-scope-of-work-summary",
        "agent-onboarding-sop-coach",
        "brokerage-compliance-file-review",
        "broker-recruiting-pitch",
        "team-sop-playbook-builder",
        "team-transition-communicator",
        "automated-compliance-auditor",
        "commission-split-calculator",
        "brokerage-bi-briefing",
        "smart-document-filing-assistant",
        "client-portal-status-mirror"
    ]
};

function cleanAndBuild() {
    console.log(`Cleaning existing skills directory: ${skillsDir}`);
    if (fs.existsSync(skillsDir)) {
        fs.rmSync(skillsDir, { recursive: true, force: true });
    }
    fs.mkdirSync(skillsDir, { recursive: true });

    Object.entries(data).forEach(([category, skills]) => {
        const catPath = path.join(skillsDir, category);
        fs.mkdirSync(catPath, { recursive: true });
        console.log(`Created Category: ${category}`);

        skills.forEach(skillSlug => {
            const skillPath = path.join(catPath, skillSlug);
            fs.mkdirSync(skillPath, { recursive: true });

            // Generate a simple mock SKILL.md file
            const prettyName = skillSlug
                .replace(/[-_]/g, ' ')
                .replace(/\b\w/g, c => c.toUpperCase())
                .trim();

            const skillContent = `# MIVSO Skill: ${prettyName}
System prompt and integration instructions for the ${prettyName} AI skill.

## Overview
This skill is designed for U.S. residential real estate agents to optimize their workflows.

## System Prompt
\`\`\`text
You are a highly specialized AI assistant focused on "${prettyName}".
Provide compliant, helpful, and professional advice while adhering to all local real estate regulations and NAR/MLS guidelines.
\`\`\`
`;
            fs.writeFileSync(path.join(skillPath, 'SKILL.md'), skillContent);
        });
    });

    console.log("Success! Generated 110 real estate skill directories and files.");
}

cleanAndBuild();
