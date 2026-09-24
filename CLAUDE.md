# Aurora Webdraft — Agent Context

> **STOP — ROOMLIFT WORK DOES NOT BELONG HERE.**  
> If you are working on a Roomlift ticket (SAT-7xx screens, SAT-9xx, or anything in the "Home design and organizer" Linear project), clone and PR against `timfong888/roomlift` instead. This repo is exclusively for Aurora marketing content.

## Project

**Resolved 9/24 (business-model fork, confirmed by Tim):** aurorainfra.ai is the direct-developer **Agent Cloud** brand, exclusively. White-label is off the home page entirely — see Home page scope below.

Aurora is Agent Cloud — persisted, secure compute and storage where AI agents build, run, and ship. Two pillars stay on the home page:
1. **Inference** (leads — matches search intent) — serverless, open-weight-model inference; the SEO/migration hook
2. **Agentic Workspace** (the differentiator, not the traffic driver) — secure, full-RBAC agent environments; segregated compute + storage to build and deploy agents

White Label/partner, Data Center build-out, and GPU Clusters (rent & buy) are separate sub-pages, out of scope for the home-page rebuild (see Page Structure below).

This repository is the Aurora marketing website. The site previously followed the GMI Cloud page structure as a format reference — that reference is now secondary; Together AI, Fireworks AI, and Baseten are the primary competitive set (see Competitive Reference below).

**Live Vercel project:** https://vercel.com/timfong888/aurora-webdraft
**GitHub repo:** https://github.com/timfong888/aurora-webdraft
**Local repo:** ~/development/aurora-webdraft

## Messaging — Use This Directly

**Superseded 9/24 — positioning pivoted from "reserved capacity / Token Optimization Cloud" to "Agent Cloud."** Aurora does not offer reserved capacity. Do not write copy implying a fixed-cost or reserved-capacity billing mechanism anywhere below.

Messaging source (canonical): https://docs.google.com/document/d/1iIxPgwaVUaP4jQT-OUKY-VZ2cImpRyoeUJGaFmDUWU4/edit — "Website Positioning Doc 2," specifically its **Agent Execution Brief** section (the resolved spec) and **Competitive Positioning Theses** section (the reasoning behind it).
Competitive source (canonical): https://docs.google.com/document/d/1XhU2_qyFwOc6djYgt_W27gxeI_NuyFceU_GbLn0nBc4/edit?tab=t.6fqfogti6bne — GTM Strategy doc, "Competitive Analysis" tab.
Superseded: the old `t.7fvphbn84h1` "Messaging" tab of the GTM Strategy doc — everything below replaces it.
To re-sync either: `composio execute GOOGLEDOCS_GET_DOCUMENT_PLAINTEXT -d '{"document_id":"<id>"}'` (add `--account aurora-google-docs` if run outside this repo's Composio project).

**Do not use Lorem Ipsum.** Use the copy below verbatim. Flag any edits as `[revised]`.

**Homepage content mockup (visual reference for section order + copy):** https://whimsical.com/8i746pRFgmwvZuYUesAYgy
**Site map / IA (visual reference for page structure):** https://whimsical.com/4XUUZBa971uKChfNskJREy

### Hero

- **Headline:** "Where your agents work in the cloud." (resolved 9/24 — synced to Tim's latest edit in the source doc, replacing the earlier shorter variant)
- **Subhead:** "Secure workspaces with compute and storage so anyone can prompt agents that build, run and ship."
- **CTA buttons:** "Start now" | "Talk to an engineer" — **never** procurement-style CTAs ("Reserve GPUs," "Get a Console," "Reserve Capacity").

### Primary Use Case (Section 3 — replaces the old "Proof Bar")

Switch from Together AI, Fireworks AI, or Baseten — same open-weight models, agent-native workspace. Positioned and SEO'd as the nimble, agent-native alternative to that trio. This is the primary conversion narrative; lead with it directly under the hero.

### Feature 1 — Serverless Open-Weight Inference (Section 4)

**Leads.** Matches what most homepage traffic is actually searching for (inference, not agents) — the SEO/migration hook, not the differentiator.

- Serverless open-weight endpoints; home page lists the supported models
- OpenAI/Anthropic-compatible endpoint — 3-field swap (`base_url`/`api_key`/`model`), no rewrite
- Open-weight pricing roughly $0.10–0.90 per 1M tokens vs. $5–30 for closed-frontier models — cost/migration story, **not** a reserved-capacity or fixed-cost claim
- Low cost and high performance; zero data retention, private and confidential compute

### Feature 2 — Secure Agent Workspaces (Section 5, replaces "GPU Access")

**The differentiating hook**, not the traffic driver — surface once a visitor has landed. This is the category claim ("Agent Cloud"): persisted, secure compute for AI agents; cost/optimization is secondary, not the lead.

- Secure, full-RBAC agent environments; API access within the workspace
- Dedicated, segregated compute and storage resources for agents to build and deploy
- Sandboxes for agentic workloads; hosted deployment environments to build and ship to production (Coder/x.bin-style)
- **Competitive bar:** Modal's homepage hero names "sandboxes" among its core capabilities (agent-specific language not confirmed beyond the fold — unverified); GMI Cloud's homepage verified as "compute, inference, and agents." Be more specific than either: name the actual capability above, don't just claim the category.

### Feature 3 — Geographically Diverse Data Centers (Section 6, replaces "Performance metrics bar")

Supports sovereignty/governance positioning — **not a headline claim.** Frame on infrastructure jurisdiction and data governance (where the compute sits, who can access it), never on model origin or GPU-partner relationships.

- Verified 9/24: DeepInfra is the actual competitive bar here — its homepage explicitly claims "secure US-based data centers" plus SOC 2 and ISO 27001 certification, hosting the same DeepSeek/Qwen/GLM/Kimi catalog Aurora would. GMI Cloud, despite being a common place to run GLM-5, does not market a jurisdiction claim at all — don't cite GMI Cloud as "the" competitor to beat here, cite DeepInfra.
- Use case: safe, sovereign hosting of Chinese-origin open-weight models (DeepSeek/Qwen/GLM/Kimi) for Western/global buyers who want the cost savings without touching Chinese-hosted infra — supporting use case, not the hero.

### Feature 4 — High-Throughput Storage (Section 7, replaces "Case studies")

Least differentiated vs. competitors — mention last, don't lead with it. Lower-cost storage for agent workloads.

### Final CTA Strip (Section 8)

No confirmed copy yet for this section in the source doc (the old "Beyond Token Maxing" event CTA is stale — that event framing belongs to the superseded positioning). Use the Hero's CTA pair ("Start now" / "Talk to an engineer") until Tim provides event-specific or closing copy.

### Why Aurora vs. Alternatives

| Alternative | Limitation | Aurora advantage |
|---|---|---|
| Together AI, Fireworks AI, Baseten (primary competitive set) | Inference-first platforms; none leads with a persisted agent workspace as the product | Pairs the same cost delta with a capability the incumbent doesn't have: segregated, full-RBAC compute + storage for agents |
| Modal, GMI Cloud (agent-workspace competitive bar) | Modal names sandboxes but not confirmed agent-specific language; GMI Cloud claims "compute, inference, and agents" broadly | More specific named capability: secure, full-RBAC agent environments + in-workspace API access |
| DeepInfra (sovereign-hosting competitive bar) | Already claims "secure US-based data centers" + SOC 2/ISO 27001 on the same model catalog | Must match or beat on this specific governance claim — this lane is contested, not open |

**Do not use:** "fixed reserved cost," "optimization on top of reservation," or any per-token-vs-reserved-capacity contrast. Aurora does not offer reserved capacity.

### Market Category

- Entry frame: Agent Cloud — persisted, secure compute for AI agents
- Resolved 9/24: "the Token Optimization Cloud" is **dead** — do not use it anywhere. Tim's own framing: "it's an Inference and Agent Workspace," matching the two home-page pillars in Home page scope below.

### Best-Fit Customer

- Primary ICP: teams choosing between Together AI, Fireworks AI, and Baseten for open-weight-model inference — mid-market AI companies running agentic workloads in production
- **Not** the Chinese GPU-partner-cloud segment — real demand, but not brand-safe to name directly on the public site (see Competitive Analysis tab, Gap 2)
- Example targets: Actively, Astrocade, Nura, Qualitate (unchanged; re-validate against the new ICP framing before reusing)

## Competitive Reference

**Primary competitive set** (the ICP is choosing between these): Together AI, Fireworks AI, Baseten. SEO/positioning angle: "alternative to [X]," nimble and agent-native.

**Secondary competitive bars** (specific claims to match or beat, not full page-structure references):
- **Modal:** https://modal.com — sandbox/compute-platform ground. Verified 9/24: homepage hero says "Run inference, training, batch processing, and sandboxes..." — no explicit "coding agents"/"background agents" language on the hero (a prior claim to that effect was unverified and has been corrected in the source doc).
- **GMI Cloud:** https://www.gmicloud.ai/en — verified 9/24: homepage hero is "One cloud for compute, inference, and agents." Real competitive bar on the category claim; **not** a jurisdiction/governance claim (see DeepInfra below).
- **DeepInfra:** https://deepinfra.com — verified 9/24: homepage claims "secure US-based data centers" + SOC 2/ISO 27001. This is the actual bar on sovereign/jurisdiction hosting, not GMI Cloud.

Aurora's differentiator must be distinct from all three in the positioning statement: a named, specific agent-workspace capability (full-RBAC environments, in-workspace API access), not a category claim alone.

## Page Structure (9 sections)

**Rebuilt 9/24.** The original Issues #4–#12 (GMI-mirrored structure, reserved-capacity copy) are closed as superseded. Current plan tracked in **Epic #43**, with one fresh Issue per section:

| # | Section | GitHub Issue | Change from original |
|---|---------|-------------|----------------------|
| 1 | Nav | [#44](https://github.com/timfong888/aurora-webdraft/issues/44) | IA changed (Inference/Agentic Workspace, not Products/Pricing/…); also fixes #28 (dead routes) |
| 2 | Hero | [#45](https://github.com/timfong888/aurora-webdraft/issues/45) | copy replaced — see Hero above; also fixes #27 (credential badges) |
| 3 | Primary Use Case | [#46](https://github.com/timfong888/aurora-webdraft/issues/46) | was "Social proof bar" — now the switch-from-competitors narrative |
| 4 | Feature 1: Serverless Open-Weight Inference | [#47](https://github.com/timfong888/aurora-webdraft/issues/47) | was "Inference / Token Factory" — leads per Tim's 9/24 traffic-intent re-rank |
| 5 | Feature 2: Secure Agent Workspaces | [#48](https://github.com/timfong888/aurora-webdraft/issues/48) | was "GPU Access" — now the differentiator, not raw GPU rental |
| 6 | Feature 3: Geographically Diverse Data Centers | [#49](https://github.com/timfong888/aurora-webdraft/issues/49) | was "Performance metrics bar" |
| 7 | Feature 4: High-Throughput Storage | [#50](https://github.com/timfong888/aurora-webdraft/issues/50) | was "Case studies" |
| 8 | Final CTA strip | [#51](https://github.com/timfong888/aurora-webdraft/issues/51) | copy stale — see Final CTA Strip above |
| 9 | Footer (links to White Label, Data Center build-out, GPU Clusters sub-pages) | [#52](https://github.com/timfong888/aurora-webdraft/issues/52) | these three are separate sub-pages, out of scope for this pass — footer just links out; also fixes #28 |

Sections 4–9 (#47–#52) are independent and can be built in parallel using git worktrees. #51 and #52 should follow after #47–#50's copy is final.

**Second pass (Epic #43, do not start yet):** [#53](https://github.com/timfong888/aurora-webdraft/issues/53) White Label/partner page, [#54](https://github.com/timfong888/aurora-webdraft/issues/54) Data Center build-out page. **GPU Clusters is explicitly out of scope for both passes** — Tim: "keep the GPU Clusters separate since that's already ranking." Don't touch it.

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

Sections 4–9 ([#47](https://github.com/timfong888/aurora-webdraft/issues/47)–[#52](https://github.com/timfong888/aurora-webdraft/issues/52)) are independent. To build them in parallel:
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
