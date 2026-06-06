# Three-Agent Review — Issue #14

Three independent agent reviews of the Aurora landing page, run before final launch
per the Three-Agent Review Loop in `CLAUDE.md`. Each agent reviewed the current source
(`src/app/page.tsx`, `src/app/layout.tsx`, `src/components/Navbar.tsx`) against the
canonical Messaging Doc in `CLAUDE.md`.

The full reviews are posted as comments on
[Issue #14](https://github.com/timfong888/aurora-webdraft/issues/14). This file is the
durable, in-repo record and a consolidated punch list.

- **Marketing** — SEO, readability, form fills, action rate
- **Product** — differentiation, credibility, accuracy vs. Messaging Doc
- **Brand** — visual distinction, voice consistency, market positioning

Quality gate at review time: `npm run build` ✅ exit 0 · `npm run lint` ✅ exit 0.

---

## Convergent blocking items (resolve before closing #14)

These were flagged independently by more than one agent, or carry legal/credibility risk:

1. **Unverified hero credential badges** (Product · Brand) — `NVIDIA Partner`,
   `Blackwell Ready`, `Norway · Canada · Texas · New York` appear nowhere in the
   Messaging Doc. "NVIDIA Partner" is a trademarked-program claim; the four regions
   assert physical infrastructure. Verify each is literally true, or remove.
2. **`Budget variance: Zero` overstates** (Product) — reserving capacity fixes the
   reservation cost, not a customer's total budget variance. Soften to "Fixed against
   plan" and flag `[revised]`.
3. **"Trusted by" logos are prospects, not customers** (Product) — `Actively, Astrocade,
   Nura, Qualitate` are listed as *example targets* in `CLAUDE.md`. Confirm they are
   live, consented customers or relabel the banner.
4. **100% of CTAs 404** (Marketing) — no lead-capture form exists; every `<Link>`
   (`/contact`, `/pricing`, `/products`, `/signin`, `/docs`, `/customers`, `/company`)
   points to a route that does not exist. Measurable conversion is structurally zero.
5. **No real logo or favicon** (Brand) — wordmark is a unicode `▲`; `favicon.ico` is the
   stock Next.js icon. Undercuts a "we own the hardware" brand.
6. **No OpenGraph / social metadata** (Marketing) — launch-channel shares (LinkedIn/X for
   the June 30 event) render with no preview.

## Cross-cutting should-fix items

- **Unflagged copy edits** (Product · Brand) — multiple deviations from the Messaging Doc
  are not flagged `[revised]` per repo convention: dropped Pillar 2 benefit
  `"no manual tuning"`, invented Pillar 3 benefit, dropped `"Capacity available now"`
  wedge leg in the Why-Aurora closer, added competitor names (LiteLLM/OpenRouter/
  Lambda/Together/RunPod), rewritten CTA-strip subhead.
- **Buried moat line** (Brand) — `"Only Aurora owns the hardware…"` sits as footnote text;
  deserves headline weight above the fold.
- **Generic dark+violet visual identity** (Brand) — consider an on-semantics green→violet
  aurora-band signature; promote the O(N)/O(1) chart to a recurring brand graphic.
- **Comparison table** has no horizontal-scroll wrapper — crushes on mobile (Marketing).
- **Jargon load** (`O(N)/O(1)`, `COGS`, `LoRA`) unglossed for the finance persona (Marketing).
- **Sitemap, robots, canonical, and Event JSON-LD** missing (Marketing).

---

## Status against acceptance criteria

- [x] Marketing Agent review posted on Issue #14
- [x] Product Agent review posted on Issue #14
- [x] Brand Agent review posted on Issue #14
- [ ] All blocking feedback items resolved — tracked above; owners to address before close

_(by Claude)_
