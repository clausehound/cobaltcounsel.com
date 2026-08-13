# Brand hierarchy & offerings — the content scoping

**What this is.** Josh scoped out which parts of the business are *Cobalt* and which are
*offerings*, and that scoping was written up as a prototype page at `/overview/`. The page's
**design was rejected** (blue `#2f52e0` palette, periodic-table logo tile — never reviewed,
deleted 2026-08-13). **The scoping in it was not.** This file carries that substance forward
so it survives the page.

Two separate things, and it matters which is which:

- **The hierarchy and the facts below are Josh's** — the actual structure of the business.
  Treat as settled unless Rajah says otherwise.
- **The specific prose is Claude-drafted** from that scoping, and has not been through
  Rajah. Treat as a draft to react to, not approved marketing copy.

Original files are recoverable at `git show ed95ef4:static/overview/index.html` and
`.../comparison/index.html` if the exact wording is ever wanted.

---

## 1. The hierarchy (the part that matters)

Three layers, and they are **not** interchangeable:

| Layer | Name | What it is |
|---|---|---|
| The **company** | **Cobalt** (Cobalt Counsel / "Cobalt AI") | Lawyers, knowledge-management specialists, and engineers under one roof. The parent entity. |
| The **platform** | **Clausehound** | The knowledge engine. Document parsing, structuring, search, comparison. The thing everything else runs on. |
| The **services** | **Policysaurus**, **DealPrep**, **Diligence Monster** | Scoped engagements that run *on* the platform and deliver finished, vetted work product. |

The one-line summary of the relationship: **Cobalt builds the platform and delivers the
work.** Clausehound is the engine; the three services put it to work on client matters.

This resolves the open question in `HANDOFF.md` §1 in favour of a **Cobalt umbrella**, with
Clausehound as the platform underneath rather than the top-level brand. Note that
HANDOFF.md recorded a recommendation of the *opposite* (Clausehound-first, option B) on the
grounds that the domain was clausehound.com — that reasoning doesn't apply on
cobaltcounsel.com. Still Rajah's call to ratify, but the scoping above is the working answer.

## 2. The platform — Clausehound

Turns scattered documents into a structured, searchable, comparable knowledge base. A
zero-copy system: originals stay intact, metadata does the work. Four capabilities, in the
order they were framed:

1. **Gather — parse & structure.** Document parsing, taxonomy mapping, text clustering turn
   raw files into tagged, filterable data.
2. **Research — search & compare.** An AI workbench with annotation and vector-based
   comparison locates the right clause across massive volumes.
3. **Recommend — draft from precedent.** Multi-layered AI prompting draws drafting
   suggestions from the client's own institutional knowledge, with quality control built in.
4. **Collaborate — standardize the work.** Workflow tracking, metadata capture, and
   playbooks keep a team drafting to one standard.

## 3. The services

Each runs on Clausehound and is delivered as finished, research-vetted work product.
Framing: **capability you can hire, not just license.**

- **Policysaurus** — *rules & policy.* Compare thousands of legal concepts across
  jurisdictions; review dozens of laws and hundreds of case decisions. Positioned as the
  world's most agile concordance table for policy makers and drafters.
  Pillars: compare tool · gap analysis · concordance.
- **DealPrep** — *deal knowledge.* Custom knowledge libraries for commercial negotiation.
  Review by cluster instead of whole documents; build negotiation playbooks; onboard deal
  teams from institutional precedent.
  Pillars: playbooks · clause abstraction · onboarding.
- **Diligence Monster** — *due diligence.* Due diligence delivered as a service: data
  extraction, organization, disclosure schedules — reviewed by our team, dropped straight
  into the client's draft.
  Pillars: data extraction · disclosure schedules · vetted output.

## 4. The commercial model

**A model that starts at zero.** Scope the project with the client, charge by the hour or by
matter; the firm can charge us out to their own clients. No licenses, no seats, no committed
spend before the work is real. Four points:

- **No up-front or monthly cost** — pay only for matters actually run.
- **Bill through your firm** — engage us as an extension of the team, charge us out to end
  clients.
- **Tailored, human-vetted output** — every deliverable checked by the research team before
  it reaches a draft.
- **Realistic about budget** — work within the client's number; bill in the currency of the
  jurisdiction of the work.

### Indicative engagement sizes

Fees scale to document volume and analysis complexity. **Indicative of prior work, not a
quote** — this caveat travelled with the numbers and must stay attached to them.

| ~Fee | Shape of engagement |
|---|---|
| 3.3k | Focused due diligence / research task |
| 8k | Due diligence / research matter |
| 32k | Higher-volume / complex matter |
| 0 | Up-front or monthly cost |

## 5. Service vs. product — the Diligence Monster comparison

The second prototype page (`/overview/comparison/`) argued one specific commercial point:
**diligence as a service vs. diligence as a licensed product.** Its framing was
"you get the finished work" against "you build the capability."

| Dimension | Service — Diligence Monster | Product — platform license |
|---|---|---|
| Cost model | Per matter — hourly or fixed project fee | Up-front and/or recurring subscription |
| Financial commitment | None until a matter is scoped | Committed regardless of usage |
| Who does the review | Our research team, vetted output | Your in-house team |
| Billing to end client | Charge us out through the firm | Absorbed as firm overhead |
| Customisation | Tailored per matter as we learn the client | Self-configured, general-purpose |
| Deliverable | Finished, disclosure-ready schedule | Tooling; output is your responsibility |
| Breadth beyond diligence | Focused DD expertise | Broader platform, multiple use cases |
| Ramp-up | Ready now — no build-out | Adoption, training, staffing |

It carried its own disclaimer, which should also stay attached: *illustrative commercial
comparison prepared for discussion; figures reflect prior project fees and are indicative,
not a quote.*

Note this table is deliberately unflattering to the product side, because it was written to
sell the service. If Clausehound is ever also sold as a licensed platform, this comparison
argues against that — worth a second look before reusing it as-is.

## 6. Contact details as they appeared

- support@cobaltcounsel.com · Calendly: https://calendly.com/rajahlehal/kickoff
- Toronto — Legal Innovation Zone, 10 Dundas St. E., Suite 1002
- New York — 335 Madison Ave, Fl. 4
- Footer line: *Clausehound, Policysaurus, DealPrep & Diligence Monster are Cobalt offerings.*

(These match `src/_data/site.json`, which is now the single source for them.)

## 7. When this gets built

Per `ELEVENTY-MIGRATION.md` §8: **finish the Gatsby → Eleventy migration first.** Then build
these sections natively in Eleventy, using this file as the content brief and the existing
site's look & feel — not the rejected prototype's.
