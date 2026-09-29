// The services, in the order they're presented. Shared by the nav, the footer
// and the homepage, so a service is added or renamed in one place.
// Copy is from handoff/BRAND-AND-OFFERINGS.md §3 (a Claude draft of Josh's
// scoping, not yet approved by Rajah) and the existing service pages.
module.exports = [
  {
    area: "Due diligence",
    name: "Diligence Monster",
    url: "/diligence-monster/",
    body: "Due diligence delivered as a service: data extraction, organization and disclosure schedules, reviewed by our team and dropped straight into your draft.",
    tags: ["Data extraction", "Disclosure schedules", "Vetted output"],
  },
  {
    area: "Deal knowledge",
    name: "DealPrep",
    url: "/DealPrep/",
    body: "Custom knowledge libraries for commercial negotiation. Review by cluster instead of whole documents, build negotiation playbooks, and onboard deal teams from your own precedent.",
    tags: ["Playbooks", "Clause abstraction", "Onboarding"],
  },
  {
    area: "Policy & regulatory research",
    name: "Policysaurus",
    url: "/policysaurus/",
    body: "Compare thousands of legal concepts across jurisdictions, and review dozens of laws and hundreds of case decisions, for the people who write rules and policy.",
    tags: ["Concordance", "Gap analysis", "Compare tool"],
  },
  {
    area: "Legal services",
    name: "Cobalt Lawyers",
    url: "/wills/",
    body: "Wills and estates, disputes and family law: AI-assisted research, refined by our lawyers, who walk you through your options.",
    tags: ["Wills & estates", "Disputes", "Family law"],
  },
];
