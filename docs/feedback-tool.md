# Point-and-Click Feedback Tool — Evaluation & Decision

_Resolves [Issue #15](https://github.com/timfong888/aurora-webdraft/issues/15)._

## TL;DR

We evaluated **Marker.io, BugHerd, Ruttl, and the "VisualFeedback" class
(Ybug)** against the six requirements, then selected a **custom, GitHub-native
embed** built into the app. It is the only option that satisfies all six
requirements at $0 — and, critically, the only one where the notes _are_ GitHub
Issues, so an AI agent can read and action them directly through the GitHub MCP
server or the `gh` CLI.

## The six requirements (from Issue #15)

1. Free tier available
2. Point-and-click on any element to suggest new text or markup
3. Sketch / annotate layout changes directly on the page
4. Notes feed into GitHub Issues on this repo
5. Works on any Vercel-hosted site (framework-agnostic embed)
6. CLI or MCP access for an AI agent to read and action notes

## Candidate comparison

| Requirement | Marker.io | BugHerd | Ruttl | Ybug ("VisualFeedback") | Custom GitHub-native embed |
|---|---|---|---|---|---|
| 1. Free tier | ❌ 15-day trial only | ❌ 7-day trial only | ✅ generous free plan | ✅ "Free Forever" plan | ✅ $0 (GitHub Issues) |
| 2. Point-and-click element | ✅ | ✅ | ✅ | ✅ | ✅ |
| 3. Annotate / sketch layout | ✅ (best-in-class) | ✅ | ✅ | ✅ | ⚠️ element highlight + note (no freehand canvas) |
| 4. → GitHub Issues (this repo) | ✅ native 2-way sync | ✅ native sync | ❌ Zapier-only (no native) | ✅ native | ✅ direct via REST API |
| 5. Framework-agnostic embed | ✅ JS SDK | ✅ JS embed | ⚠️ share-link model | ✅ JS embed | ✅ one script/component |
| 6. AI agent reads notes (CLI/MCP) | ⚠️ only via the GitHub Issues it creates | ⚠️ same | ❌ notes stay in Ruttl | ⚠️ via GitHub Issues | ✅ notes **are** GitHub Issues |

### Why each SaaS option falls short

- **Marker.io** — the strongest SaaS on requirements 2–5 (excellent 2-way
  GitHub sync, screenshots, annotations, a real browser SDK embed). It fails
  requirement 1: there is **no permanent free tier**, only a 15-day trial, and
  paid plans start around $39/mo. We cannot "confirm a free tier active."
- **BugHerd** — comparable strengths to Marker.io with native GitHub sync, but
  again **no permanent free tier** (7-day trial, plans from ~$42/mo).
- **Ruttl** — the only SaaS with a genuinely generous free plan, but its GitHub
  path is **Zapier-only** (no native integration), which adds a second tool, a
  Zapier task quota, and breaks the "feeds into GitHub Issues on this repo"
  expectation. Notes also live primarily in Ruttl, weakening requirement 6.
- **Ybug** (the closest real product to the "VisualFeedback" placeholder) — has
  a free-forever tier, point-and-click, annotation, JS embed, and GitHub
  integration. A reasonable hosted fallback, but notes still live behind a
  vendor API; the AI agent can only reach them through the GitHub Issues Ybug
  creates, which is exactly what our custom embed does directly and for free.

### Why a GitHub-native embed wins

Requirements **1 (free) + 4 (GitHub Issues) + 6 (AI/CLI access)** are only
jointly satisfiable when the storage backend _is_ GitHub Issues:

- GitHub Issues are free and already where this project's work lives.
- GitHub ships an official **MCP server** and the **`gh` CLI**, so the AI agent
  reads and actions notes with zero extra glue (requirement 6).
- A single injected component/script is framework-agnostic (requirement 5).

The one honest trade-off is requirement 3: our widget does **element-targeted
annotation** (click an element → capture its CSS selector, text, and bounding
box → attach a note) rather than freehand canvas sketching. For a copy- and
layout-testing draft site this is the high-value 90%; freehand drawing is the
area where Marker.io is genuinely better if a budget is later approved.

## What was implemented

- `src/components/FeedbackWidget.tsx` — a floating "Feedback" launcher. Click
  **Pick an element**, hover to highlight any element, click to capture it, then
  describe a **Text / Layout / Bug** change and file it.
- `src/app/api/feedback/route.ts` — a Next.js route handler that files the note
  as a labelled GitHub Issue on this repo via the GitHub REST API.
- Mounted globally in `src/app/layout.tsx`, so it appears on every page.

## Activation (one-time setup by a maintainer)

The widget is **live** on every deployed page. Filing to GitHub activates once a
token is present:

1. Create a fine-grained Personal Access Token with **Issues: Read and write**
   scoped to `timfong888/aurora-webdraft`.
2. In the Vercel project (`timfong888/aurora-webdraft`) → Settings → Environment
   Variables, add:
   - `GITHUB_FEEDBACK_TOKEN` = _the token_ (required)
   - `GITHUB_FEEDBACK_REPO` = `timfong888/aurora-webdraft` (optional; this is the
     default)
3. Redeploy.

Until the token is set, the widget UI works and the API returns a clear `503`
explaining that the backend is not yet configured (it never crashes the page).

To disable the widget in any environment, set
`NEXT_PUBLIC_FEEDBACK_ENABLED="false"`.

## Free tier confirmed

The selected solution runs entirely on **GitHub Issues**, which is free for this
repository. There is no paid plan, trial clock, or per-seat cost.

---
_(by Claude)_
