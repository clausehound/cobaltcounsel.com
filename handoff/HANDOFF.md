# Handoff — Cobalt / Clausehound brand-consolidation page

**Purpose of this file:** carry the full context from the design session (done against a
standalone HTML prototype) into a fresh working session *in this repo*
(`clausehound.com`, the Gatsby marketing site), so the prototype can be translated into
this site's actual implementation and shipped.

Start a new session with this repo as the working directory and read this file first.

---

## 1. What we're doing (the goal)

Consolidate three things that are currently scattered across separate sites into one
marketing site:

| Layer | Brand | Today |
|-------|-------|-------|
| The company (parent) | **Cobalt** (Cobalt Counsel / "Cobalt AI") | cobaltcounsel.com |
| The platform (flagship product) | **Clausehound** | clausehound.com (this Gatsby site) |
| The services | **Policysaurus**, **DealPrep**, **Diligence Monster** | cobaltcounsel.com/{tool} |

The brief from Rajah: bring the parent company, the platform, and the service offerings
under one roof, reusing the old material but rebuilt from scratch to match the look &
feel of the pricing-comparison page we made (see `reference-pricing-comparison.html`).
clausehound.com is to be merged into this new site — take graphical elements, the
Calendly link, addresses, etc. from the existing sites.

### ⚠️ Open decision — who is the top-level brand?

Rajah's wording was ambiguous: he called Cobalt "the main company" but also said
*"Clausehound — main branded thing should go here."* The prototype currently leads with
**Cobalt** as the umbrella and treats Clausehound as the platform underneath. This is the
one decision that reshapes the nav, logo, and page title, so **confirm with Rajah before
building the final nav/hero.** Two coherent options:

- **A — Cobalt umbrella** (prototype's current shape): nav wordmark = Cobalt (the "Co /
  27" periodic tile), Clausehound is the platform section. Good if Cobalt is meant to be
  the house brand.
- **B — Clausehound flagship**: nav wordmark = Clausehound (keep the existing paw logo /
  `@atoms/logo`), Cobalt named as the quiet parent entity in the footer. This is closer to
  "main branded thing should go here" and reuses this repo's existing logo asset.

My recommendation: **B**, because this domain *is* clausehound.com, the repo already ships
a Clausehound logo, and it needs the least new brand asset work — but it's Rajah's call.

---

## 2. Where this site lives & how it deploys

- **Framework:** Gatsby 3 (`gatsby ^3.14.6`), React 17, **TypeScript**, **styled-components**.
- **No JSX anywhere.** Every component uses `import { createElement as h } from "react"`
  and nests `h(...)` calls. Match this — it's the house style (and the user's stated
  preference). Files are `.ts`, not `.tsx`.
- **Deploy:** `bitbucket-pipelines.yml` runs `npm run build` (Gatsby) on `master` and
  rsyncs `./public/` (plus the separate static `./about/` and `./DealPrep/` dirs) to the
  production box at `$PUB_IP`. Cloudflare fronts the domain.
- **⚠️ netlify.toml gotcha:** it contains a `301` redirect `https://clausehound.com/* →
  https://cobaltcounsel.com/`. Production is served by the rsync/Cloudflare path (not
  Netlify), so this file looks like dead legacy config — but confirm it isn't active
  anywhere before launch, or the new homepage could get redirected away.
- `about/` and `DealPrep/` at the repo root are **separately-built static bundles**, not
  part of the Gatsby `src` build. Don't confuse them with `src/pages`.

---

## 3. This repo's design system (translate INTO this)

Everything below is what the prototype must be re-expressed in.

### Structure — atomic design, with path aliases (see `gatsby-config.js`)
```
@atoms      → src/components/atoms      (button, container, contentBlock, list, link, subheading, logo)
@molecules  → src/components/molecules  (sectionHeader, sectionSetup, sectionCheckout)
@organisms  → src/components/organisms  (navigation, footer, translation)
@assets     → src/assets               (svgs imported as React components via gatsby-plugin-react-svg)
@utils      → src/utils                (layout, seo, theme, media, typography, variables.css)
```
A page = `h(Layout, null, h(SEO,{...}), h(<Section organisms/molecules...>))`.
`Layout` (`@utils/layout`) already wraps children with `ThemeProvider`, global styles,
`Navigation`, `<main>`, and `Footer`. New pages just compose sections.

### Theme tokens (`src/utils/theme.ts`) — **the existing palette is WARM/AMBER, not cobalt**
```
colors.primary   = #FFA400  (amber — used for buttons, list bullets, link underlines, highlights)
colors.secondary = #F9F6F3  (warm off-white section bg)
colors.tertiary  = #FAAA8D  (peach)
colors.heading   = #392D40   colors.black = #201C22
colors.gray      = #5A535E   colors.lightGray = #8A828F   colors.white = #FFFFFF
spacing.xxs..xxl = 0.5rem .. 15rem
button.radius    = 4px       animation.transition = all 500ms ease
```
Access in styled-components as `${(p) => p.theme.colors.primary}`.

### ⚠️ Palette reconciliation (important)
The prototype introduced **cobalt blue (`#2f52e0`)** as the primary accent, deliberately,
to tie the color to the "Cobalt" name, with teal + ochre as secondary/service accents, on
a parchment/ink foundation. **This repo's live brand is amber (`#FFA400`) on warm-white.**
These are two different palettes. Decide before building:

- **If Cobalt becomes the house brand (option A):** it's defensible to evolve `theme.ts`
  toward cobalt blue as `primary`, keeping amber as an accent — but that restyles the
  *entire* existing site, so get sign-off. The prototype's full token set (both light and
  dark) is in `reference-site.html` `:root` if you go this way.
- **If staying Clausehound-first (option B):** keep the existing amber theme and re-map the
  prototype's structure onto it — cobalt-blue bits become `theme.colors.primary` (amber),
  service accent tiles reuse `primary`/`tertiary`/`heading`. This is lower-risk and keeps
  visual continuity with the rest of the site. **Recommended default.**

Note: the existing site is **light-theme only** (no dark mode). The prototype ships a full
dark theme; dropping it to match the repo is fine unless Rajah wants dark mode added.

### Other conventions to reuse
- **Buttons** = `@atoms/button` — a styled `AnchorLink` (from `gatsby-plugin-anchor-links`)
  taking `to="#checkout"` for smooth-scroll to the Calendly section. Use it for all CTAs.
- **Calendly** = `@molecules/sectionCheckout` already embeds `react-calendly`'s
  `InlineWidget` pointed at **`https://calendly.com/rajahlehal/kickoff`** (same link the
  prototype uses). Reuse this section wholesale as the page's booking/CTA anchor
  (`id="checkout"`).
- **Media queries** = `@utils/media` (`media.sm/md/lg/xl`), used as `` @media ${media.lg} ``.
- **Spacing** = CSS custom props in `src/utils/variables.css` (`var(--spacingContent)`,
  `var(--spacingSection)`, `var(--spacingGap)`, `var(--gridSplit)`, `var(--gridQuad)`).
- **Typography** = `src/utils/typography.ts` (react-typography). Body & headers are a
  system sans stack, `scaleRatio: 3.5`. **Note:** the prototype's Georgia serif display
  face is *not* in this site. Either add a serif header family to `typography.ts`
  (deliberate brand change — get sign-off) or accept the site's existing sans headings.
- **SVGs** = imported from `@assets` / `@atoms/pretty/*` and rendered as components
  (`h(SeperatorOne)`), enabled by `gatsby-plugin-react-svg` (rule includes `/assets/`).
  The prototype's inline SVG icons (paw, service glyphs, check/x marks) should become
  files under `src/assets` or `src/components/atoms/pretty/`.
- **The prototype's hero canvas "lattice" animation has no equivalent here.** The existing
  hero uses a static SVG curve (`@molecules/sectionHeader`, `headerCurve.svg`). Either port
  the canvas as a new atom or (simpler, on-brand) keep the SVG-curve hero treatment.

### Existing content already written (reuse verbatim — it matches the prototype's sections)
The current `src/pages/index.ts` already has the four platform pillars —
**Gather / Research / Recommend / Collaborate** — with full copy, and
`@molecules/sectionSetup` has the same four as a "Your workbench, your way" step grid. The
prototype's platform section is the same four pillars. Reuse this copy; don't rewrite it.

Footer (`@organisms/footer`) currently lists: email `support@clausehound.com`, addresses
`330 Bay Street, Suite 1400, Toronto` and `335 Madison Ave, FL. 4, New York`. (The
prototype used `support@cobaltcounsel.com` and the older "10 Dundas St E" Toronto address —
**reconcile which email/address is current with Rajah**; the repo's are likely newer.)

---

## 4. Finalized content decisions (already signed off this session)

- **Pricing figures** (the "recent engagements" card): **3.3k / 8k / 32k / 0**, in that
  order, **no currency symbols** (bill in the currency of the jurisdiction of work),
  **no "M&A" label** — all framed as "due diligence / research". Labels:
  - `3.3k` — Focused due diligence / research task
  - `8k`  — Due diligence / research matter
  - `32k` — Higher-volume / complex matter
  - `0`   — Up-front or monthly cost
  - Footnote: fees scale to document volume & complexity; indicative, not a quote.
- **Service vs. product comparison chart** exists as its own artifact and is linked from
  the prototype's engagement section. Local copy: `reference-pricing-comparison.html`.
  Consider making it a sub-page (e.g. `/due-diligence`) or a section on the main page.
- **Calendly:** `https://calendly.com/rajahlehal/kickoff` (unchanged, already in repo).

---

## 5. The prototype → this-repo translation plan

Both prototype files are in this folder:
- `reference-site.html` — the full consolidated site prototype (source of truth for
  layout, copy, and section order).
- `reference-pricing-comparison.html` — the service-vs-product comparison chart.

Also published as live artifacts (fetch with WebFetch if you need them):
- Site: https://claude.ai/code/artifact/b1b4e062-45ae-4686-bbd8-80f6f03a4104
- Comparison: https://claude.ai/code/artifact/26003b3c-9c25-4002-8ef4-bdc57544ff20

### Section-by-section mapping

| Prototype section | Build in this repo as | Notes |
|---|---|---|
| Sticky nav (Co/27 tile + links) | Extend `@organisms/navigation` | Add Platform / Services / How we work / About + a "Book a call" `Button to="#checkout"`. Logo depends on the A/B brand decision. |
| Hero ("Legal knowledge, re-imagined") | New `@molecules/sectionHero` (or adapt `sectionHeader`) | Reuse existing SVG-curve hero pattern; canvas lattice optional. |
| Architecture strip (Company → Platform → Services) | New `@molecules/sectionArchitecture` | 3-col grid via `var(--gridQuad)`/custom; arrows between nodes. |
| Platform (Gather/Research/Recommend/Collaborate) | Reuse `src/pages/index.ts` content + `@molecules/sectionSetup` | Copy already exists — see §3. |
| Services (Policysaurus / DealPrep / Diligence Monster) | New `@molecules/sectionServices` | 3 cards; each gets an accent (map to theme colors). Copy below. |
| "How we work" + pricing card | New `@molecules/sectionEngagement` | Pricing figures from §4; principles list uses `@atoms/list`. |
| CTA band + Calendly | Reuse `@molecules/sectionCheckout` (`id="checkout"`) | Already wired to Calendly. |
| Footer | Reuse `@organisms/footer` | Reconcile email/address per §3. |

### Services copy (from the live sites, already condensed in the prototype)
- **Policysaurus** — *Rules & policy.* "Compare thousands of legal concepts across
  jurisdictions and review dozens of laws and hundreds of case decisions — the world's most
  agile concordance table." Tags: Compare tool · Gap analysis · Concordance.
- **DealPrep** — *Deal knowledge.* "Custom knowledge libraries for commercial negotiation.
  Review by cluster instead of full documents, build negotiation playbooks, and onboard
  deal teams from institutional precedent." Tags: Playbooks · Clause abstraction · Onboarding.
- **Diligence Monster** — *Due diligence.* "Due diligence delivered as a service: data
  extraction, organization, and disclosure schedules — reviewed by our team and dropped
  straight into your draft. No up-front or monthly cost." Tags: Data extraction ·
  Disclosure schedules · Vetted output.

### Example of the translation style (do it like this)

A new services molecule, in the repo's exact idiom (no JSX, styled-components, theme):

```ts
// src/components/molecules/sectionServices.ts
import { createElement as h } from "react";
import styled from "styled-components";
import Container from "@atoms/container";
import Subheading from "@atoms/subheading";
import Button from "@atoms/button";
import { media } from "@utils/media";

const services = [
  {
    role: "Rules & policy",
    name: "Policysaurus",
    body: "Compare thousands of legal concepts across jurisdictions and review dozens of laws and hundreds of case decisions — the world's most agile concordance table.",
    tags: ["Compare tool", "Gap analysis", "Concordance"],
  },
  {
    role: "Deal knowledge",
    name: "DealPrep",
    body: "Custom knowledge libraries for commercial negotiation. Review by cluster, build playbooks, and onboard deal teams from institutional precedent.",
    tags: ["Playbooks", "Clause abstraction", "Onboarding"],
  },
  {
    role: "Due diligence",
    name: "Diligence Monster",
    body: "Due diligence delivered as a service: data extraction, organization, and disclosure schedules — reviewed by our team and dropped straight into your draft.",
    tags: ["Data extraction", "Disclosure schedules", "Vetted output"],
  },
] as const;

const SectionServices = () =>
  h(
    Container,
    { content: true, grid: true, gridQuad: true },
    ...services.map((s) =>
      h(
        Card,
        { key: s.name },
        h(Subheading, null, s.role),
        h("h2", null, s.name),
        h("p", null, s.body),
        h(
          Tags,
          null,
          ...s.tags.map((t) => h("span", { key: t }, t))
        ),
        h(Button, { to: "#checkout" }, "Book a call")
      )
    )
  );

export default SectionServices;

const Card = styled.div`
  background-color: ${(p) => p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors.secondary};
  border-radius: ${(p) => p.theme.button.radius};
  border-top: 3px solid ${(p) => p.theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding: var(--spacingContent);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0 1.5rem;

  span {
    background-color: ${(p) => p.theme.colors.secondary};
    border-radius: 10rem;
    color: ${(p) => p.theme.colors.gray};
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
`;
```

Follow that pattern for the hero, architecture strip, and engagement/pricing sections.
Filter-then-map, one paradigm; never null-return to skip an item.

---

## 6. Suggested task checklist for the new session

1. `cd` into this repo, `npm i`, `npm run develop`, confirm the current site builds/serves.
2. Get Rajah's answer on the **A/B brand decision** (§1) and the **palette reconciliation**
   (§3) — these gate the nav, logo, hero, and `theme.ts`.
3. Reconcile footer email/address (§3) and confirm the netlify.toml redirect is inert (§2).
4. Build the new molecules (`sectionHero`, `sectionArchitecture`, `sectionServices`,
   `sectionEngagement`) in the repo idiom; extract prototype SVG icons into `@assets`.
5. Assemble the new page. Decide: replace `src/pages/index.ts`, or add a new route and
   switch the homepage over once approved.
6. Add the comparison chart as a section or sub-page (`/due-diligence`).
7. `npm run build` clean; visual QA against `reference-site.html`; then ship via the
   normal `master` pipeline.

---

## 7. Source material reference
- Live sites scraped this session: clausehound.com (Gatsby one-pager, "Knowledge
  Re-imagined"), cobaltcounsel.com ("Tech Assisted Legal Drafting and Review", tools:
  Dealprep/Policysaurus/Diligence Monster), and the individual tool pages.
- Email thread (Rajah ↔ Alex Hutchinson) established the Diligence-Monster-as-a-service
  positioning and the pricing figures — that's what the comparison chart and pricing card
  encode.
