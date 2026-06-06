# Quality Gate — Issue #13

Full quality-gate pass across the Aurora site, run per the Quality Gate checklist in
`CLAUDE.md`. This file is the durable in-repo record; the summary is posted on
[Issue #13](https://github.com/timfong888/aurora-webdraft/issues/13).

Scope reviewed: `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/contact/page.tsx`,
`src/components/Navbar.tsx`, `src/components/ContactForm.tsx`, plus `sitemap.ts`,
`robots.ts`, and `opengraph-image.tsx`.

## Acceptance criteria

| # | Criterion | Status |
|---|-----------|--------|
| 1 | Lighthouse ≥ 80 on Performance, Accessibility, SEO | Enforced via `lighthouserc.json` (`npm run lighthouse`); run on the preview URL |
| 2 | Zero WCAG AA contrast failures | ✅ Fixed (see below) |
| 3 | All pages have `<title>` + meta description | ✅ Verified |
| 4 | Every section has ≥1 CTA; primary CTA above the fold | ✅ Fixed (see below) |

`npm run build` ✅ exit 0 · `npm run lint` ✅ exit 0 at review time.

## Findings and fixes

### WCAG AA contrast (criterion 2)

`text-slate-500` (#64748b) on the `slate-950` (#020617) background measures **4.24:1** —
below the **4.5:1** AA threshold for normal text. Replaced with `text-slate-400`
(#94a3b8 → **7.86:1**, passes) everywhere it rendered real text:

- Footer column headers (Product / Developers / Company / Newsletter) and the copyright line — `src/app/page.tsx`
- Input placeholder color and the "(optional)" hint — `src/components/ContactForm.tsx`

All other foreground colors clear AA: `slate-400` 7.86:1, `slate-300` ~12:1,
`violet-400` 7.4:1, `emerald-400`/`red-400` well above 3:1 for their large-text uses.
The SVG chart axis micro-labels (`#64748b`) are decorative — the chart carries an
`aria-label` describing its meaning — so they are exempt and left unchanged.

### Section CTAs (criterion 4)

The Hero (primary CTA above the fold), Pillars, CTA Strip, and Navbar already carried
CTAs. The Problem, Proof Bar, and Finance/ROI sections had none. Added one contextual
text-link CTA to each, routing to `/contact` with a pre-filled `interest` param that the
contact form already reads. No new copy claims — links reuse Messaging Doc framing.

### Titles & meta descriptions (criterion 3)

`/` and `/contact` both set `<title>` and `description`; the root layout supplies the
`title.template`, Open Graph, and Twitter cards. The previously default-rendered 404 now
has a branded `not-found.tsx` that inherits the layout title/description and is served
with a 404 status (not indexed).

### Broken internal links (conversion / SEO finding)

The Navbar and footer link to six routes that do not yet exist and currently 404:
`/products`, `/pricing`, `/customers`, `/docs`, `/company`, `/signin`. These are the
pages slated for the Section issues (#7–#12) and have no Messaging Doc copy yet, so they
were **not** invented here. The new `not-found.tsx` gives every one of them a graceful,
on-brand landing with recovery CTAs ("Reserve Capacity" / "Back to home") so a misfired
click still funnels toward conversion instead of dead-ending. Build the routes (or repoint
the links) in the page issues to close the loop fully.

## How to run the Lighthouse gate

```
npm run build
npm run lighthouse        # uses lighthouserc.json: starts the server, audits / and /contact
```

Or against a deployed preview:

```
npx @lhci/cli@0.14.x autorun --collect.url=<preview-url> --config=lighthouserc.json
```

The config asserts Performance / Accessibility / SEO ≥ 0.8 and hard-fails on any
`color-contrast`, `document-title`, or `meta-description` audit regression.
