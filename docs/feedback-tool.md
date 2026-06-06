# Point-and-Click Feedback Tool — Evaluation & Decision

_Resolves [Issue #15](https://github.com/timfong888/aurora-webdraft/issues/15)._

## TL;DR

We evaluated **Marker.io, BugHerd, Ruttl, the "VisualFeedback" class (Ybug)**,
and a **custom GitHub-native widget** against the six requirements, then selected
**Vercel Comments read over Vercel's official MCP server**. It requires **zero
application code**, gives an AI agent a full two-way loop (read, reply, resolve)
on the comments stakeholders already leave via the Vercel Toolbar, and runs on
the free tier.

A custom feedback widget was prototyped but **deliberately not shipped** — once
Vercel Comments are readable over MCP, the widget is extra code to maintain for
no additional capability we need. See [Why not the custom widget](#why-not-the-custom-widget).

## The six requirements (from Issue #15)

1. Free tier available
2. Point-and-click on any element to suggest new text or markup
3. Sketch / annotate layout changes directly on the page
4. Notes feed into GitHub Issues on this repo
5. Works on any Vercel-hosted site (framework-agnostic embed)
6. CLI or MCP access for an AI agent to read and action notes

## Candidate comparison

| Requirement | Marker.io | BugHerd | Ruttl | Ybug ("VisualFeedback") | Vercel Comments + MCP |
|---|---|---|---|---|---|
| 1. Free tier | ❌ 15-day trial only | ❌ 7-day trial only | ✅ generous free plan | ✅ "Free Forever" plan | ✅ on by default, all plans |
| 2. Point-and-click element | ✅ | ✅ | ✅ | ✅ | ✅ via Vercel Toolbar |
| 3. Annotate / sketch layout | ✅ (best-in-class) | ✅ | ✅ | ✅ | ⚠️ anchored thread + image attach (no freehand canvas) |
| 4. → GitHub Issues (this repo) | ✅ native 2-way sync | ✅ native sync | ❌ Zapier-only | ✅ native | ⚠️ manual one-click convert per comment |
| 5. Framework-agnostic embed | ✅ JS SDK | ✅ JS embed | ⚠️ share-link model | ✅ JS embed | ✅ zero code on Vercel-hosted site |
| 6. AI agent reads notes (CLI/MCP) | ⚠️ only via the Issues it creates | ⚠️ same | ❌ notes stay in Ruttl | ⚠️ via Issues | ✅ direct read + reply + resolve over MCP |

### Why each SaaS option falls short

- **Marker.io** — strongest SaaS on requirements 2–5 (excellent 2-way GitHub
  sync, screenshots, annotations, a real browser SDK embed). It fails
  requirement 1: there is **no permanent free tier**, only a 15-day trial, with
  paid plans from ~$39/mo.
- **BugHerd** — comparable strengths with native GitHub sync, but again **no
  permanent free tier** (7-day trial, plans from ~$42/mo).
- **Ruttl** — the only SaaS with a genuinely generous free plan, but its GitHub
  path is **Zapier-only** (no native integration), adding a second tool and a
  task quota, and notes live primarily in Ruttl (weakening requirement 6).
- **Ybug** (closest real product to the "VisualFeedback" placeholder) — free
  tier, point-and-click, annotation, JS embed, native GitHub. A reasonable
  hosted fallback, but notes still live behind a vendor API; the agent reaches
  them only through the Issues Ybug creates.

## Selected: Vercel Comments over MCP

Stakeholders already leave feedback via the **Vercel Toolbar** on preview
deployments, and Vercel ships an **official remote MCP server** that exposes
those comment threads directly. That makes the storage backend the platform we
already deploy on, with no extra code and a true two-way agent loop.

`.mcp.json` at the repo root registers the server:

```json
{
  "mcpServers": {
    "vercel": { "type": "http", "url": "https://mcp.vercel.com" }
  }
}
```

Because this lives in the repo, the Vercel comment tools are available by
default to any Claude Code session opened here.

### One-time authentication

The server uses OAuth, so each user authorizes once against their own Vercel
account:

1. Open this project in Claude Code (the `vercel` server is picked up from
   `.mcp.json`).
2. Run `/mcp`, select **vercel**, and complete the browser OAuth flow (Google
   Workspace login works).

The agent then has the same Vercel access as the authenticated user.

### Comment tools exposed (Toolbar Tools)

| Tool | Purpose | R/W |
|---|---|---|
| `list_toolbar_threads` | List comment threads for a team (filters: `projectId`, `branch`, `page`, `search`, `status`, `limit`, `offset`) | Read |
| `get_toolbar_thread` | Fetch one thread by ID, including all messages and context | Read |
| `reply_to_toolbar_thread` | Add a markdown reply to a thread | Write |
| `change_toolbar_thread_resolve_status` | Resolve / un-resolve a thread | Write |
| `edit_toolbar_message` | Edit an existing message | Write |
| `add_toolbar_reaction` | Add an emoji reaction to a message | Write |

The team id needed for filtering is the `orgId` in `.vercel/project.json`
(created locally by `vercel link`; not committed).

### Reading existing comments

Once authenticated, ask Claude Code e.g. _"List unresolved Vercel toolbar
threads for aurora-webdraft"_ → it calls `list_toolbar_threads` (filter by the
`orgId`) then `get_toolbar_thread` for the details. Comments already left in the
Toolbar are readable immediately — no conversion step.

### Archiving a comment as a tracked GitHub Issue (optional)

For comments worth a durable, labelled record, use Vercel's built-in
**Convert to Issue** action (install the Vercel GitHub integration, then click
the GitHub icon on a comment thread). This is manual and per-comment; the live
agent loop above does not require it.

## Why not the custom widget

A custom `FeedbackWidget` (floating launcher → pick element → file note to a
GitHub Issue via the REST API) was prototyped earlier in this issue. We are
**not shipping it**:

- Its one unique advantage over Vercel Comments was agent-readability — and the
  Vercel MCP server now provides that directly, with reply + resolve on top.
- It is application code to build, secure (a PAT, a public API route), and
  maintain, for a capability we now get with zero code.
- Its element-highlight model is no richer than the Toolbar's anchored threads.

The honest trade-off accepted by choosing Vercel Comments: filing to a GitHub
Issue is a **manual one-click convert** rather than automatic, and commenters
need a Vercel account (the Google Workspace login covers this). For a
copy- and layout-testing draft, the live MCP read/reply/resolve loop is the
high-value path and the manual archive step is acceptable.

> Note: Vercel comment text is **untrusted input**. Keep human confirmation on
> for tool execution and treat comment contents as a potential prompt-injection
> vector.

---
_(by Claude)_
