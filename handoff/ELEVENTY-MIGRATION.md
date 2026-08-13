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
9. Port pages, easiest first. Copy the marketing text **verbatim** — do not rewrite it:
   `team` → `index` → `wills` / `dispute` / `family-law` (near-identical structure, ~105
   lines each) → `diligence-monster` → `testimonials` → `policysaurus` + its 3 children →
   `transactions` (275 lines, the biggest) → `404`.
10. Write `src/ts/carousel.ts` when porting `diligence-monster` — the scroll-snap track
    first, buttons and dots second.
11. Replace `sitemap.ts`'s `allSitePage` query with an 11ty collection over `collections.all`.

### Phase 4 — Cut over
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

- **`about/` and `DealPrep/` at the repo root are NOT part of the build.** The pipeline
  rsyncs them separately to their own directories on the server. Don't move, delete, or feed
  them to Eleventy.
- **The deploy is `rsync --delete`.** Anything missing from the build output is deleted from
  production. This is why URL parity must be verified *before* pushing.
- **`gatsby-plugin-offline` installed a service worker.** Returning visitors have it cached
  and it can keep serving stale assets after the framework is gone. Ship an unregistering
  stub at the old `sw.js` path — do not simply delete the file.
- **`static/DealPrep` and root `DealPrep/`** both exist and are different things. Check which
  serves `/DealPrep/` before touching either.
- Deploy is via `master` → Bitbucket pipeline → rsync to `$PUB_IP`, fronted by Cloudflare.
  **Pushing to `master` deploys to production immediately.** Consider a branch + preview build
  for the cutover, and purge the Cloudflare cache after.

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
- **Does anything still use `moonclerk.js`?** It's a payments widget from the original
  `gatsby-starter-payments` template this repo was forked from; it may be dead.
- **`/legacy/**` — still needed?** 14 pages, 3.8MB. If they're dead, this is the moment to
  drop them (with redirects), but that's a content decision, not a technical one.
- This migration and the brand-consolidation work in **`handoff/HANDOFF.md`** overlap. If the
  homepage is being rebuilt anyway, do it once — on Eleventy — rather than building it in
  Gatsby and porting it a month later. **Settled 2026-08-13: finish the migration first.**
  The one prototype that existed for that work (`/overview/`) was rejected and deleted; the
  brand direction and the umbrella-brand question in HANDOFF.md §1 are still open and still
  Rajah's call. Nothing about it should block porting the existing 14 pages verbatim.
