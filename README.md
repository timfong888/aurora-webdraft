This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Setup

### Claude Agent Trigger secret

The [`.github/workflows/claude-trigger.yml`](.github/workflows/claude-trigger.yml) workflow lets repo collaborators drive Claude Code from GitHub Issue comments (`@claude implement`, `@claude draft`, `@claude question`, `@claude review`). It requires an Anthropic API key:

1. Go to **Settings → Secrets and variables → Actions → New repository secret**.
2. Name the secret **`ANTHROPIC_API_KEY`**.
3. Paste your Anthropic API key as the value and save.

The workflow reads this secret as `ANTHROPIC_API_KEY` and validates that it is present before invoking Claude. `GITHUB_TOKEN` is provided automatically by GitHub Actions and is used for branch, PR, and comment creation — no manual setup needed.

> Note: earlier drafts of Issue #18 referred to this secret as `CLAUDE_API_KEY`. The workflow and this documentation use **`ANTHROPIC_API_KEY`** — store the key under that name.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Leaving feedback (Vercel Comments)

Point-and-click feedback on this site uses [Vercel Comments](https://vercel.com/docs/comments) —
the built-in commenting layer on every Vercel deployment. No embed code or
third-party tool is installed; the decision and rationale are recorded in
`CLAUDE.md` → "Point-and-Click Feedback Tooling" and tracked in
[#15](https://github.com/timfong888/aurora-webdraft/issues/15) and
[#16](https://github.com/timfong888/aurora-webdraft/issues/16).

**Setup (one-time, in the Vercel dashboard):**

1. Open the project → **Settings → Comments** and toggle Comments **on** for
   Preview deployments (and Production, if you want feedback on the live site).
2. Invite reviewers to the Vercel project so they can authenticate.

**Leaving a comment:**

1. Open any deployment URL while signed in to Vercel.
2. Click the **comment icon** in the Vercel Toolbar, then click the page element
   you want to annotate.
3. Type the note and submit. The thread is pinned to that element and visible to
   the team in the deployment's Comments panel.

Threads stay in Vercel (with optional Slack/Linear/Jira integration). Promote a
comment to a tracked [GitHub Issue](https://github.com/timfong888/aurora-webdraft/issues)
manually when it needs follow-up work.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
