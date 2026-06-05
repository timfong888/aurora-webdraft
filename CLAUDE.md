# Aurora Webdraft — Agent Context

## Project

Aurora is an AI infrastructure company offering two products:
1. **Inference / Token Factory** (primary audience) — teams building production AI that need scalable, low-latency inference without managing GPU clusters
2. **GPU Access** (secondary audience) — teams that need raw compute and want dedicated GPU infrastructure

This repository is the Aurora marketing website, built for message testing before final polish. The site follows the GMI Cloud page structure as a format reference (not content — Aurora messaging replaces GMI copy).

**Live Vercel project:** https://vercel.com/timfong888/aurora-webdraft
**GitHub repo:** https://github.com/timfong888/aurora-webdraft
**Local repo:** ~/development/aurora-webdraft

## Messaging Source of Truth

The primary messaging document is a Google Doc (requires auth to read):
https://docs.google.com/document/d/1XhU2_qyFwOc6djYgt_W27gxeI_NuyFceU_GbLn0nBc4/edit?tab=t.7fvphbn84h1

Before writing any copy, read this doc and extract:
- Each messaging pillar (headline + one-sentence description)
- Primary audience definition and pain points
- Approved copy blocks, taglines, positioning statements

Where copy is draft quality, refine it and flag each change as `[revised]` for stakeholder review.

**Do not use Lorem Ipsum anywhere.** Every section must use copy from the Messaging Doc.

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

After the site is deployed, implement a feedback tool that:
- Allows point-and-click comments on any page element
- Posts notes as GitHub Issues on this repo
- Has a free tier and works as a framework-agnostic embed

Candidates to evaluate: Marker.io, BugHerd, Ruttl, VisualFeedback.

## Repository Conventions

- Branch names: `issue-<N>-<kebab-slug>` (e.g., `issue-5-hero-section`)
- Commit messages: imperative, reference Issue number (`feat: add hero section (#5)`)
- No commented-out code; no Lorem Ipsum; no `any` types in TypeScript
- All copy must come from the Messaging Doc — flag AI-drafted copy as `[revised]`
- Sign agent-authored PR descriptions and Issue comments with **(by Claude)**
