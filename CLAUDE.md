# Aurora Webdraft — Agent Context

> **STOP — ROOMLIFT WORK DOES NOT BELONG HERE.**  
> If you are working on a Roomlift ticket (SAT-7xx screens, SAT-9xx, or anything in the "Home design and organizer" Linear project), clone and PR against `timfong888/roomlift` instead. This repo is exclusively for Aurora marketing content.

## Project

Aurora is an AI infrastructure company offering two products:
1. **Inference / Token Factory** (primary audience) — teams building production AI that need scalable, low-latency inference without managing GPU clusters
2. **GPU Access** (secondary audience) — teams that need raw compute and want dedicated GPU infrastructure

This repository is the Aurora marketing website, built for message testing before final polish. The site follows the GMI Cloud page structure as a format reference (not content — Aurora messaging replaces GMI copy).

**Live Vercel project:** https://vercel.com/timfong888/aurora-webdraft
**GitHub repo:** https://github.com/timfong888/aurora-webdraft
**Local repo:** ~/development/aurora-webdraft

## Messaging — Use This Directly

Messaging source: https://docs.google.com/document/d/1XhU2_qyFwOc6djYgt_W27gxeI_NuyFceU_GbLn0nBc4/edit?tab=t.7fvphbn84h1
To re-sync: `composio execute GOOGLEDOCS_GET_DOCUMENT_PLAINTEXT -d '{"document_id":"1XhU2_qyFwOc6djYgt_W27gxeI_NuyFceU_GbLn0nBc4","include_tabs_content":true}'`

**Do not use Lorem Ipsum.** Use the copy below verbatim. Flag any edits as `[revised]`.

### Hero

- **Headline:** Per-token pricing hands every agent an unlimited credit card.
- **Subheader:** Reserve your capacity and Aurora optimizes every token against it — full agentic throughput at a fixed, predictable cost, instead of a per-token bill with no ceiling.
- **CTA buttons:** "Reserve Capacity" | "Talk to Us"

### Problem (Section 2)

Agentic AI maxes tokens by default. Multi-step reasoning, tool loops, and agent fan-out consume tokens with no natural ceiling. Per-token prices are falling, but agentic consumption is rising faster — so total spend climbs for customers with real production workloads.

**Callout:** Cheaper tokens don't save you when you consume them faster than they get cheap.

### Proof Bar (Section 3)

- **Header:** max(tokens) has no upper bound. Your budget does.
- **Tagline:** Token maxing is O(N). Optimization is O(1).
- Visual: rising red "Token Maxing" line vs. flat green "Aurora (reserved)" line

### Pillar 1 — Predictable Cost (Section 4)

**Headline:** A fixed monthly cost, not a bill that grows with every request.

Features:
- Reserve capacity at a fixed monthly price
- Rate-limiting inside the reservation keeps spend flat
- Aurora owns the DC and GPUs — holds cost fixed where routers can't

**Benefit:** Forecastable spend and protected margins even as agentic consumption explodes.
**CTA:** "See Pricing"

### Pillar 2 — Token Optimization (Section 5)

**Headline:** More useful work per GPU.

Features:
- Complexity-based multi-model routing inside your reservation
- Run fine-tuned open-source models (bring your LoRA)
- Frontier models only where a request needs them

**Benefit:** Lower effective cost per useful token; the right model for each step of an agent loop; no manual tuning.
**CTA:** "See How It Works"

### Pillar 3 — Production-Ready Capacity (Section 6)

**Headline:** Built for production scale, not experiments.

Features:
- Owned GPU capacity — available now through the Blackwell crunch
- Managed serving — zero infra ops burden
- Latency control when others are booked out

**CTA:** "Check Availability"

### Finance / ROI Section (Section 7)

**Header:** Token maxing isn't a budget overrun — it's a broken cost structure.

- **Pain:** AI inference is becoming your largest variable COGS line — gross margin erodes exactly as you scale.
- **Value:** Convert variable, uncapped COGS into a fixed reserved cost → predictable gross margin, defensible unit economics.
- **CFO one-liner:** Optimization fixes the unit economics.
- **Metrics to show:** cost per request · gross margin % · $/customer · budget variance vs. plan

### Why Aurora vs. Alternatives (Section 8)

| Alternative | Limitation | Aurora advantage |
|---|---|---|
| Per-token APIs (OpenAI, Anthropic) | Bill scales with every request | Fixed reserved cost |
| Router-style services | Still per-token and variable | Optimization on top of reservation |
| Raw GPU neocloud | You carry ops burden and self-optimize | Managed serving + routing built in |

**Only Aurora line:** Owns the hardware → can sell a fixed cost. Optimization on top of the reservation → more throughput per reserved GPU. Capacity available now.

### CTA Strip (Section 9)

**Headline:** Beyond Token Maxing: The Path to Profitable AI
**Subhead:** An evening on the economics of agentic AI — June 30, 2026, Frontier Tower SF.
**Buttons:** "Reserve Your Spot" | "Talk to Us"

### Market Category

- Entry frame: reserved, predictable inference cloud for agentic workloads
- Vision: the Token Optimization Cloud

### Best-Fit Customer

- Mid-market AI companies putting agentic workloads into production
- Raised money at scaling tier; more domain-focused than model or developer focused
- Example targets: Actively, Astrocade, Nura, Qualitate

## Competitive Reference

Two competitors share Aurora's market position. Use their page structure as SEO and positioning reference:
- **GMI Cloud:** https://www.gmicloud.ai/en — format reference for page layout
- **Nebius:** https://nebius.com/ — additional positioning reference

Aurora's differentiator must be distinct from both in the positioning statement.

## Page Structure (9 sections, mirroring GMI Cloud)

Build these sections in order. Each maps to a GitHub Issue:

| # | Section | GitHub Issue |
|---|---------|-------------|
| 1 | Navigation bar | Issue #4 |
| 2 | Hero | Issue #5 |
| 3 | Social proof bar | Issue #6 |
| 4 | Inference / Token Factory | Issue #7 |
| 5 | GPU Access | Issue #8 |
| 6 | Performance metrics bar | Issue #9 |
| 7 | Case studies | Issue #10 |
| 8 | Final CTA strip | Issue #11 |
| 9 | Footer | Issue #12 |

Sections 4–12 in the Issues list are independent and can be built in parallel using git worktrees.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript, Tailwind v4)
- **Components:** shadcn/ui (slate base color)
- **Deployment:** Vercel CLI → timfong888/aurora-webdraft
- **Repo:** GitHub (Issues as task queue)

## Vercel Skills — Invoke in This Order

1. `/vercel:nextjs` — Next.js 16 patterns and App Router conventions
2. `/vercel:shadcn` — shadcn/ui component usage
3. `/vercel:react-best-practices` — component quality standards
4. `/vercel:vercel-cli` — CLI deployment
5. `/vercel:deploy` — deployment workflow
6. `/vercel:verification` — post-deploy checks

## Workflow: Working on a GitHub Issue

1. Read the Issue to get the task and acceptance criteria
2. Check out a branch: `git checkout -b issue-<N>-<slug>`
3. Build the section
4. Run the quality gate (see below)
5. Push and open a PR: `gh pr create --repo timfong888/aurora-webdraft`
6. Close the Issue when the PR is merged

## Quality Gate (Run After Each Section)

1. `npm run build` — must exit 0
2. `npm run lint` — must exit 0
3. Deploy preview via `vercel --prebuilt` and screenshot
4. Accessibility: WCAG AA contrast, semantic HTML, heading hierarchy, ARIA labels
5. SEO: `<title>`, meta description, heading structure, target keywords present
6. Conversion: every section has a CTA; primary CTA above the fold

## Three-Agent Review Loop (Before Final Deploy)

Run these three review agents on the deployed preview URL before closing the final Issue:
- **Marketing Agent:** SEO, readability, form fills, action rate
- **Product Agent:** differentiation, credibility, accuracy vs. Messaging Doc
- **Brand Agent:** visual distinction, voice consistency, market positioning

Each agent posts its review as a comment on the relevant GitHub Issue.

## Parallel Build Pattern

Sections 4–9 (Issues #7–#12) are independent. To build them in parallel:
1. Use `superpowers:using-git-worktrees` to create one worktree per section
2. Dispatch one agent per worktree via `superpowers:dispatching-parallel-agents`
3. Each agent gets: the Issue AC, the finalized copy for its section, and this CLAUDE.md
4. Merge PRs in order after quality gates pass

## Point-and-Click Feedback Tooling (Issues #15–#16)

**Decided: use [Vercel Comments](https://vercel.com/docs/comments), not custom code.**

Vercel Comments is the built-in point-and-click feedback layer on every Vercel
deployment. It satisfies the original goal — pin a comment to any page element on
the deployed site — with zero embed code, no API route, and no third-party
account. Reviewers click the element, leave a note, and the thread lives on the
deployment in the Vercel dashboard.

Tickets: [#15](https://github.com/timfong888/aurora-webdraft/issues/15) (select
and enable the tool) · [#16](https://github.com/timfong888/aurora-webdraft/issues/16)
(end-to-end test). See README → "Leaving feedback (Vercel Comments)" for setup.

Superseded:
- The custom point-and-click widget + `/api/feedback` route on branch
  `issue-15-claude-auto` is abandoned — do not merge it.
- Evaluated and dropped third-party candidates: Marker.io, BugHerd, Ruttl,
  VisualFeedback. Vercel Comments wins on zero-code and native deployment scope.

Note: Vercel Comments keeps threads in Vercel (with Slack/Linear/Jira
integrations), so the original "appears as a GitHub Issue within 60s" criterion no
longer applies — feedback is triaged in Vercel and promoted to a GitHub Issue
manually when it warrants tracked work.

## Repository Conventions

- Branch names: `issue-<N>-<kebab-slug>` (e.g., `issue-5-hero-section`)
- Commit messages: imperative, reference Issue number (`feat: add hero section (#5)`)
- No commented-out code; no Lorem Ipsum; no `any` types in TypeScript
- All copy must come from the Messaging Doc — flag AI-drafted copy as `[revised]`
- Sign agent-authored PR descriptions and Issue comments with **(by Claude)**
