# Plan — Migrate cobaltcounsel.com from Gatsby 3 to Eleventy

**Read this first.** It is written to be self-contained: a fresh session with this repo as
the working directory should be able to execute it without prior context.

**Goal:** replace the Gatsby 3 build with Eleventy, and make the site as close to plain
HTML + CSS as is practical. Target end state: no React, no styled-components, content
authored as HTML, and any client-side code written as **vanilla TypeScript against the DOM
API** — bundled, but with no framework underneath it.

**Guiding principle: progressive enhancement.** Every page must work with HTML and CSS
alone. TypeScript is layered on top where it genuinely improves the result — it is not
banned, and it is not the first tool reached for. Prefer a platform primitive when one does
the job as well; write TS when the primitive falls short.

---

## 0. Decisions already made (do not re-litigate)

| Question | Decision |
|---|---|
| Framework | **Eleventy** (`@11ty/eleventy`), pinned to `^3.1.6` |
| Template language | `.html` files (Liquid, 11ty's default for `.html`) + `_includes/` layouts. No JSX, no React. |
| Styling | One hand-written CSS file. Theme tokens become CSS custom properties. Drop styled-components. |
| Client JS | **Vanilla TypeScript, bundled with esbuild.** Plain DOM APIs — no framework, no runtime. Keep it small and progressive-enhancement only. |
| Content | Moves out of `src/pages/*.ts` into HTML files with YAML frontmatter. |
| React | Removed entirely. |

### Why Eleventy, stated honestly

Eleventy was acquired by **Font Awesome in September 2024**, and in 2026 is being rebranded
under a "Build Awesome" umbrella — v4 will ship as Build Awesome v4. Yes, that is the third
acquisition in this conversation (Gatsby→Netlify, Astro→Cloudflare, Eleventy→Font Awesome).

Two reasons it is still the right call:

1. The funding model is **open-core with a paid Pro tier**, run by a profitable bootstrapped
   company, not VC competitor-absorption. The OSS core stays free and Zach Leatherman still
   maintains it. It is actively shipping — 3.1.6 was published July 2026, 177 releases across
   the suite in 2025.
2. **More importantly, the lock-in is near zero.** Eleventy's output is plain static HTML
   with no runtime. If Build Awesome ever goes bad, the content, HTML, and CSS all survive
   untouched and only a ~200-line build layer needs replacing. That is the actual insurance
   policy, and it is the whole point of going vanilla. Choose the tool because leaving it is
   cheap, not because you trust it forever.

### Why NOT to justify this on bundle size

Gatsby's runtime here is only ~750KB. The 94MB `public/` is almost entirely media (DealPrep
39M, ClausehoundAIVideo 27M, images 22M) and will be exactly as large after migration. **The
real reasons are:** unmaintained plugin ecosystem, a build image (`node:16-buster-slim`) that
has been EOL since September 2023, a dead Universal Analytics property, and 1,703 lines of
marketing copy trapped inside TypeScript files. Don't oversell it.

---

## 1. What exists today (inventory)

- **Gatsby 3.15.0, React 17, TypeScript 4.9, styled-components 5.** 14 page files, 40
  component files, 6 utils — ~6,000 lines total producing 36 HTML pages.
- **The GraphQL layer is doing almost nothing.** Only three real queries exist:
  `site.siteMetadata` (in `src/utils/seo.ts`), `allSitePage { nodes { path } }` (in
  `src/pages/sitemap.ts`), and image lookups for `gatsby-plugin-image`. There is **no
  markdown and no content mesh** in this repo. Nothing of value is lost by dropping GraphQL.
- **Atomic-design structure** with path aliases `@atoms` / `@molecules` / `@organisms` /
  `@utils` / `@assets`, configured in `gatsby-config.js` via `gatsby-plugin-module-resolver`.
- **House style: no JSX anywhere.** Every component uses
  `import { createElement as h } from "react"`. This convention dies with React — the
  equivalent in the new world is plain HTML, which is the same instinct (explicit over magic).

### Interactivity audit — only 4 files have any

The entire client-side surface of this site is four components. Two need no JS at all; two
are worth a small amount of vanilla TS.

| File | What it does | Approach |
|---|---|---|
| `atoms/linkTop.ts` | `window.scrollTo` smooth scroll | **No JS.** `<a href="#top">` + `html { scroll-behavior: smooth }` does this natively and better (respects `prefers-reduced-motion`). |
| `organisms/productsDropdown.ts` | `useState` nav dropdown | **`<details>`/`<summary>` as the base**, which works unenhanced. Add ~20 lines of TS for close-on-outside-click and close-on-`Escape` — the platform doesn't give you those, and without them the dropdown feels broken. |
| `molecules/diligence/diligenceVideo.ts` | carousel + accordion | **CSS scroll-snap** for the track and `<details>` for the accordion, so it works with no JS. Add TS for the prev/next buttons and the dot indicators (`scrollIntoView` + an `IntersectionObserver` to sync the active dot). This is the one place JS clearly earns its keep. |
| `molecules/sectionCheckout.ts` | `react-calendly` `InlineWidget` | Calendly's own vanilla embed div + `widget.js`, `defer`. Vendor script either way — `react-calendly` was only ever a wrapper around it. |

Calendly URL is `https://calendly.com/rajahlehal/kickoff` (also linked from the footer).

Budget: this should land somewhere around **50–100 lines of TypeScript total**. If it is
growing past that, something is being over-built — stop and reconsider.

---

## 2. Dependency replacement map

Delete all of these. Nothing in the right column needs a plugin unless noted.

| Gatsby dependency | Replacement |
|---|---|
| `gatsby`, `gatsby-plugin-typescript` | `@11ty/eleventy` |
| `react`, `react-dom`, `react-is`, `@types/react-helmet` | — (deleted) |
| `styled-components`, `gatsby-plugin-styled-components`, `babel-plugin-styled-components`, `@types/styled-components` | one plain CSS file |
| `gatsby-plugin-react-helmet`, `react-helmet` | `_includes/head.html` partial, values from frontmatter |
| `gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp` | plain `<img>` with `width`/`height`/`loading="lazy"`. Add `@11ty/eleventy-img` **only if** responsive `srcset` proves necessary — there are only 17 asset files. |
| `gatsby-plugin-react-svg` | inline the SVG, or `<img src="...svg">`. 20 files in `src/components/atoms/pretty/` + 4 in `src/assets/seperators/`. |
| `gatsby-plugin-typography`, `react-typography`, `typography`, `@types/typography` | plain CSS type scale (see §4) |
| `gatsby-plugin-module-resolver` | `_includes/` (11ty resolves includes natively) |
| `gatsby-plugin-anchor-links` | plain `<a href="#id">` + CSS `scroll-behavior: smooth` |
| `gatsby-source-filesystem` | 11ty reads the filesystem natively |
| `gatsby-plugin-manifest` | hand-write `site.webmanifest` (one already exists at `static/legacy/manifest.webmanifest` — crib from it) |
| `gatsby-plugin-offline` | drop the service worker. **See §6 gotcha — this one can strand users.** |
| `gatsby-plugin-google-analytics` | **Decision needed.** `UA-32778170-8` is a Universal Analytics property; UA stopped processing data in 2023, so analytics are already dead. Options: GA4, Plausible, or Cloudflare Web Analytics (zero-JS-ish, and Cloudflare already fronts the domain). |
| `react-calendly` | Calendly vanilla embed snippet |
| `iter-tools` | check usage first; likely removable |
| `typescript` | **keep** — now used for the client-side bundle |

### Calendly embed settings

The embed's `data-url` carries its configuration as query parameters, replacing
`react-calendly`'s `pageSettings`: `hide_event_type_details`, `hide_landing_page_details`,
`primary_color`, `background_color`, `text_color`.

**`hide_gdpr_banner=1` was added 2026-08-13**, because Calendly's cookie-consent bar renders
*inside* the iframe and swallows most of a half-width embed. Calendly supports the parameter
(`react-calendly` exposed it as `hideGdprBanner`; the old code simply never set it), on the
understanding that the embedding site takes care of consent itself. **cobaltcounsel.com
currently has no cookie banner of its own.** Right now nothing on the site sets non-essential
cookies — analytics are dead, see the row above — so there is likely nothing to consent to.
That stops being true the moment an analytics replacement is chosen, so decide the two
together: a GA4-style cookie-setting tracker means the site needs its own consent mechanism,
whereas Plausible or Cloudflare Web Analytics are cookieless and don't. Rajah should confirm
either way; it's his call and his professional exposure, not a technical detail.

Keep `prettier` and `typescript`. **Add `esbuild`** as the only new build dependency.

End state is roughly three devDependencies: `@11ty/eleventy`, `esbuild`, `typescript`
(plus `prettier`).

### The TS build

esbuild, not a bundler config — one command, no plugin, no webpack:

```json
"scripts": {
  "build:js": "esbuild src/ts/main.ts --bundle --minify --target=es2020 --outfile=public/js/main.js",
  "build":    "eleventy && npm run build:js",
  "develop":  "eleventy --serve"
}
```

Wire `build:js` into 11ty's `eleventy.after` event in `.eleventy.js` so `--serve` rebuilds it
too. Keep the existing root `tsconfig.json`, retargeted at `src/ts` with `"lib": ["DOM",
"ES2020"]` and no React types. Load it as `<script src="/js/main.js" defer>` — one file, no
module graph, no import maps needed at this size.

---

## 3. Target structure

```
.eleventy.js              # config: input/output dirs, passthrough copy, collections
package.json              # ~1 dependency
src/
  _data/
    site.json             # title, description, author, calendlyUrl, addresses, email
  _includes/
    base.html             # <!doctype>, head, nav, <main>{{ content }}</main>, footer
    head.html             # meta/OG/title from frontmatter
    nav.html              # <details> dropdown, no JS
    footer.html
    sections/             # reusable section partials (hero, setup, checkout, testimonial)
  css/
    main.css              # tokens + base + components, hand-written
  ts/
    main.ts               # entry: imports and initialises the two enhancements below
    dropdown.ts           # outside-click + Escape for the nav <details>
    carousel.ts           # prev/next + dot sync for the diligence video track
  assets/                 # images & SVGs (moved from src/assets + atoms/pretty)
  index.html              # each page: YAML frontmatter + HTML body
  team.html
  wills.html
  ...
  policysaurus/
    index.html
    hrpolicies.html
    privacyandcybersecurity.html
    sustainability.html
  sitemap.xml.html        # generated from collections.all
static/                   # passthrough-copied verbatim (see §6)
about/                    # untouched, rsync'd separately by the pipeline
DealPrep/                 # untouched, rsync'd separately by the pipeline
```

---

## 4. Styling translation

`src/utils/variables.css` is **already plain CSS custom properties with media queries** —
copy it into `main.css` verbatim, no changes needed.

`src/utils/theme.ts` becomes custom properties on `:root`:

```css
:root {
  --color-primary: #FFA400;
  --color-secondary: #F9F6F3;
  --color-tertiary: #FAAA8D;
  --color-heading: #392D40;
  --color-black: #201C22;
  --color-gray: #5A535E;
  --color-light-gray: #8A828F;
  --color-white: #FFFFFF;

  --space-xxs: 0.5rem;  --space-xs: 1rem;   --space-sm: 1.5rem;
  --space-md: 2.5rem;   --space-lg: 5rem;   --space-xl: 10rem;
  --space-xxl: 15rem;

  --radius-button: 4px;
  --transition: all 500ms ease;
}
```

`src/utils/media.ts` breakpoints become literal media queries: `sm 640px`, `md 800px`,
`lg 1100px`, `xl 1600px`. Note `variables.css` already uses `640/800/1200/1600` — these two
sets disagree slightly. **Reconcile to one scale** while translating.

The responsive root font-size ramp currently in `layout.ts`'s `GlobalStyle` (90% → 100% →
125%) must be carried over; a lot of the site's proportions depend on it.

Use CSS nesting and `@layer` freely — both are broadly supported now and remove any need for
a preprocessor. Convert each styled-component to a class; the styles are already
self-contained and mostly translate 1:1.

Typography.js used `scaleRatio: 3.5` with a system sans stack — replace with an explicit type
scale in CSS. Check `src/utils/typography.ts` for the exact stack before deleting it.

---

## 5. Execution phases

Work in this order. Each phase should end in a working state.

### Phase 1 — Scaffold, prove the pipeline
1. `npm i -D @11ty/eleventy@^3.1.6 esbuild` (requires Node >= 18; use Node 20 or 22).
2. Write `.eleventy.js`: input `src`, output `public`, passthrough-copy `static` → `/` and
   `src/assets` → `/assets`, `src/css` → `/css`. Hook `build:js` into `eleventy.after`.
3. Build **one** page end-to-end — `team.html` (19 lines, simplest) — with `base.html`,
   `head.html`, `nav.html`, `footer.html`.
4. Confirm `npx @11ty/eleventy --serve` renders it and that `/legacy/` still passes through.

### Phase 2 — Chrome
5. Port nav (with `<details>` dropdown), footer, and `main.css` (tokens + base + type scale).
6. Port the shared section partials: `sectionHeader`, `sectionSetup`, `sectionCheckout`
   (Calendly vanilla embed), `sectionTestimonial`.
7. Move SVGs/images from `src/assets` and `src/components/atoms/pretty` into `src/assets`.
8. Write `src/ts/dropdown.ts`. Build the nav as working `<details>` markup **first**, confirm
   it works with JS disabled, then layer the enhancement on.

### Phase 3 — Pages
**Phase 3 completed 2026-08-14.** All 14 routes exist and every page's rendered text was
diffed word-for-word against the live Gatsby site. Two known deviations, both deliberate and
both listed in §9 below. Verbatim copy was kept even where it is visibly wrong — see the
`/transactions/` title note.

9. Port pages, easiest first. Copy the marketing text **verbatim** — do not rewrite it:
   `team` → `index` → `wills` / `dispute` / `family-law` (near-identical structure, ~105
   lines each) → `diligence-monster` → `testimonials` → `policysaurus` + its 3 children →
   `transactions` (275 lines, the biggest) → `404`.
10. Write `src/ts/carousel.ts` when porting `diligence-monster` — the scroll-snap track
    first, buttons and dots second.
11. Replace `sitemap.ts`'s `allSitePage` query with an 11ty collection over `collections.all`.

### Phase 4 — Cut over
**Phase 4 completed 2026-09-28.** Gatsby and React are gone; `package.json` has four
devDependencies (`@11ty/eleventy`, `esbuild`, `typescript`, `prettier`) and none at runtime.
Hosting moved off Netlify to DigitalOcean App Platform the same day, so step 14 became the
`Dockerfile` (node:22) and `.do/app.yaml`; `bitbucket-pipelines.yml` was deleted. Analytics
(step 15): the dead `UA-32778170-8` tag was dropped and nothing replaces it yet — see §8.
Also added in the cutover: `/manifest.webmanifest` + `/icons/**` (copied from the last
Gatsby build so installed icons keep working), `/sitemap.xml`, canonical and absolute
og:image URLs, and the Calendly click-to-load from §8.

12. Delete `gatsby-*.js` config files, `src/components`, `src/utils`, `src/pages`, and every
    dependency in §2. `package.json` should end with ~3 devDependencies and no dependencies.
13. Update `package.json` scripts per §2's TS build block.
14. Update `bitbucket-pipelines.yml`: **bump `node:16-buster-slim` to `node:22-slim`** (both
    the `default` and `master` steps). Leave the three rsync lines alone.
15. Resolve the analytics decision from §2.

---

## 6. Do not break these

**URL parity is the hard requirement.** These 14 routes are Gatsby-generated and must exist
after migration:

```
/  /404  /diligence-monster/  /dispute/  /family-law/  /policysaurus/
/policysaurus/hrpolicies/  /policysaurus/privacyandcybersecurity/
/policysaurus/sustainability/  /sitemap/  /team/  /testimonials/
/transactions/  /wills/
```

Note the **trailing slashes** — Gatsby emits `dir/index.html`. Eleventy does this by default,
but verify rather than assume.

These are static passthrough and must survive **byte-identical**:

```
/legacy/**       (3.8M, 14 live pages — this is also what serves /legacy/icons/**)
/DealPrep/**     (39M)  /ClausehoundAIVideo/**  (27M)
/ads.txt  /terms.pdf  /moonclerk.js
```

**`/overview/` and `/overview/comparison/` were deleted on 2026-08-13 and are no longer
part of this list.** They were the brand-consolidation prototype from `ed95ef4`
(`handoff/HANDOFF.md`). The **design** was rejected — a blue `#2f52e0` palette and a
periodic-table logo tile that never went through review. They had shipped to production, so
they 404 from the first `master` push after their removal, and the `Overview` nav entry is
gone too.

**The content in them was not rejected** — it was Josh's scoping of the brand hierarchy
(Cobalt the company / Clausehound the platform / Policysaurus, DealPrep, Diligence Monster
the services). That is preserved in **`handoff/BRAND-AND-OFFERINGS.md`** and is the content
brief for whenever those sections get built natively per §8. Don't rebuild from the deleted
HTML; do build from that file.

**`/icons/**` was listed here in error.** The only `icons/` directory in the repo is
`static/legacy/icons/`, already covered by the `/legacy/**` passthrough. Nothing is served
from a top-level `/icons/`.

**Other traps:**

- **`about/` and `DealPrep/` at the repo root are NOT part of the build, and are not served.**
  The old Bitbucket pipeline rsynced them to a server; neither Netlify nor App Platform ever
  published them. `/DealPrep/` is served from `static/DealPrep/`. The root copies are stale.
- **Each deploy replaces the whole site.** Anything missing from `public/` stops existing in
  production, so verify URL parity *before* pushing.
- ~~Service worker stub~~ — not needed: `gatsby-plugin-offline` was never enabled in
  `gatsby-config.js`, and the live site had no `/sw.js`.
- **Deploy is DigitalOcean App Platform** (app `cobaltcounsel-com`, spec in `.do/app.yaml`),
  building the `Dockerfile`. **Pushing to `master` deploys to production within minutes.**
  DNS for `www` is a CNAME at GoDaddy; the apex is a GoDaddy 301 forward to `www`.

---

## 7. Verification before pushing

1. `npm run build` clean.
2. Diff the URL list against §6:
   `find public -name '*.html' | sed 's|^public||; s|/index\.html$|/|' | sort`
3. Visually compare each of the 14 pages against the current live site.
4. Confirm the Calendly widget loads and books.
5. Confirm three `/legacy/*` pages still render, and that `/overview/` is **gone**.
6. Grep the output for `0` occurrences of `webpack`, `page-data`, `styled-components`,
   `react`.
7. Confirm the only scripts on any page are `/js/main.js` and Calendly's vendor script, and
   that `main.js` is a few KB — not a few hundred.
8. **Disable JavaScript and reload every page.** Nothing may be broken or unreachable: the
   nav dropdown must still open, the carousel must still scroll, all links must work. This
   is the check that keeps the enhancement layer honest.

---

## 8. Open questions for Rajah / Josh

- **Analytics replacement** (§2) — GA4, Plausible, or Cloudflare Web Analytics?
- ~~**Calendly consent**~~ **Resolved 2026-09-28 with option (a)**: `src/ts/calendly.ts` shows
  a "Pick a time" button and only loads `widget.js` on click; no request reaches calendly.com
  before that (verified in a browser). Without JS the plain Calendly link is the flow. Original
  note: `hide_gdpr_banner=1`
  is currently set *without* anything gating the iframe load, so calendly.com's cookies are
  set on page load with no consent step. That is the one arrangement that is worse than
  either alternative, and it should not ship as-is. Verified 2026-08-13 that the Eleventy
  build sets **no cookies of its own** — no `document.cookie`, no storage, no analytics — so
  a site-wide cookie banner is not needed and should not be built. Two ways to close it:
  (a) keep the parameter and gate the embed behind a click-to-load button (~35 lines of TS,
  nothing loads from calendly.com until asked), or (b) drop the parameter and let Calendly
  show its own in-frame consent bar, which is compliant but is the annoyance that prompted
  this. Josh's preference is not to see the in-frame bar; (a) is the way to have both.
- ~~**Does anything still use `moonclerk.js`?**~~ **Answered 2026-08-13: no.** Nothing in
  `src/` or `static/legacy/` references it — no `<script>` tag, no import, 549 bytes. Dead
  leftover from the `gatsby-starter-payments` fork. Left in place as passthrough rather than
  deleted, in case something off-repo hotlinks `/moonclerk.js`; safe to drop if not.
- **`/legacy/**` — still needed?** 14 pages, 3.8MB. If they're dead, this is the moment to
  drop them (with redirects), but that's a content decision, not a technical one.
- This migration and the brand-consolidation work in **`handoff/HANDOFF.md`** overlap. If the
  homepage is being rebuilt anyway, do it once — on Eleventy — rather than building it in
  Gatsby and porting it a month later. **Settled 2026-08-13: finish the migration first.**
  The one prototype that existed for that work (`/overview/`) was rejected and deleted; the
  brand direction and the umbrella-brand question in HANDOFF.md §1 are still open and still
  Rajah's call. Nothing about it should block porting the existing 14 pages verbatim.


---

## 9. Deviations from the Gatsby output (Phase 3)

Every one of the 14 pages was diffed word-for-word against the live site. These are the only
differences, and each is here on purpose.

**1. "Book a call on Calendly" appears in the checkout embed.** It is the no-JS fallback
inside the `calendly-inline-widget` div; `widget.js` replaces the div's contents when it
loads, so nobody with JS sees it. Without it, a visitor without JS gets an empty black box.

**2. "Book a Demo" now renders on `/` and `/team/`.** The React source was
`h('div', h('h6', null, 'Book a Demo'), h('h1', …))` — the missing `null` meant the `<h6>`
was passed as the props argument and React dropped it. It was clearly meant to render:
`sectionCheckout` styles that `h6` explicitly (uppercase, 3px letter-spacing, light gray),
and the wills/dispute/family-law pages pass `checkoutCopy` *with* the `null`, so their
"Book a Call" eyebrow does appear live. Restored. Trivially removable if parity is preferred.

### Bugs left in place on purpose

**`/transactions/` has the wrong `<title>`.** `src/pages/transactions.ts` passed
`'Testimonials for Cobalt AI'` to `SEO`, so the live page's title is
`Testimonials for Cobalt AI | Cobaltcounsel.com`. Copied verbatim, because fixing it means
writing new SEO copy and §5 step 9 says not to invent any. **Someone should decide the real
title** — `Transactions by Cobalt AI` would match the other pages' pattern. One-line change
in `src/transactions.html` frontmatter.

**Typos in body copy are preserved**, e.g. "Flight Pans" (Flight Plans) and "Aicraft
Carriers" (Aircraft) on `/diligence-monster/`, and "has have helped their firm" in the
Michael Younder testimonial. Same reasoning: they're content, not code.

### Things that were dead and stayed dead

- `/legacy/` itself has no `index.html` and 404s — **on the live site too**, verified. Only
  the individual `/legacy/*.html` pages are reachable. Not a regression.
- The `Seperator`/`Intro`/`Source`/`CaseStudyButton` styled-components in several page files
  were declared and never used; they were not carried over.
- On `/testimonials/` and `/transactions/`, `ContentContainer` declared `:after`/`:before`
  rules but never gave them a `content`, so the skewed band never rendered there. Only the
  padding change was real, and only the padding change was ported.

### The video paths

The carousel loaded `../ClausehoundAiVideo/N.mp4` — lowercase `i`, while the directory is
`static/ClausehoundAIVideo`. It works today because the production server answers both
spellings, which is luck rather than design. The Eleventy pages use the directory's real
casing, `/ClausehoundAIVideo/N.mp4`, and absolute paths rather than `../`.

`preload="metadata"` was added to the ten `<video>` elements. The originals were all
`autoplay loop muted` with nine of them `display: none`, and the directory is 27MB; without
it a visit can pull far more video than it shows.
