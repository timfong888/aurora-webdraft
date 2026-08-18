# Acceptance Testing with Browserless

Playwright specs in `tests/acceptance/` run against the live deployed site.
They connect to **Browserless** for CI and agent-driven QA, or to a local
Chromium for local development.

---

## Quick Start

```bash
# Install Playwright
npm install --save-dev @playwright/test
npx playwright install chromium

# Copy env template and fill in values
cp .env.acceptance.example .env.acceptance

# Run locally (no Browserless needed)
npx playwright test

# Run against Browserless
BROWSERLESS_WS_ENDPOINT=wss://... npx playwright test

# Run a single spec
npx playwright test tests/acceptance/contact.spec.ts
```

---

## Secure Login Flow

### The Problem

Acceptance tests that cover authenticated routes require credentials.
Hard-coding them in test files is a security risk — values end up in git history.

### Solution: Environment Variables + Browserless

Credentials live **only** in environment variables.
In Blocks agent sessions they are injected from Blocks Secrets at runtime.
They are never written to disk, never logged, never committed.

| Variable | Purpose |
|---|---|
| `AURORA_TEST_EMAIL` | Login email for Aurora's product UI |
| `AURORA_TEST_PASSWORD` | Login password |
| `BROWSERLESS_WS_ENDPOINT` | Full WebSocket URL of your Browserless instance |
| `VERCEL_AUTOMATION_BYPASS_SECRET` | Bypasses Vercel deployment protection on previews |
| `AURORA_AUTH_SESSION_PATH` | Path to a saved session JSON (skips re-login) |
| `TEST_BASE_URL` | Override production URL for preview-deployment testing |

### Bypassing Vercel Deployment Protection

Vercel preview deployments are password-protected by default.
Browserless must bypass this to reach the page.

1. Generate the bypass secret:
   ```bash
   vercel env add VERCEL_AUTOMATION_BYPASS_SECRET
   ```
2. Set `VERCEL_AUTOMATION_BYPASS_SECRET` in your test environment.
   The playwright config sends it as the `x-vercel-protection-bypass` header
   on every request — no manual intervention needed.

### Session Caching (Avoid Re-Login on Every Run)

Running the full login flow on every test suite execution is slow and fragile.
Playwright's **storageState** saves authenticated cookies and localStorage
so subsequent runs restore the session instantly.

**Step 1 — Create the session once:**
```bash
AURORA_TEST_EMAIL=you@company.com \
AURORA_TEST_PASSWORD=<from-secrets-manager> \
BROWSERLESS_WS_ENDPOINT=wss://... \
npx ts-node tests/acceptance/setup/create-auth-session.ts
```
This writes `tests/acceptance/.auth/session.json`.

**Step 2 — Protect the file:**
- `tests/acceptance/.auth/` is in `.gitignore` — the file is never committed.
- In CI: upload the JSON to a secrets store (AWS Secrets Manager, Blocks Secrets, etc.)
  and restore it before the test run.

**Step 3 — Use in tests:**
```bash
AURORA_AUTH_SESSION_PATH=tests/acceptance/.auth/session.json npx playwright test
```

### What Never to Do

- Never put credential values in files tracked by git
- Never pass credentials via CLI flags (they appear in shell history)
- Never log `process.env.AURORA_TEST_PASSWORD`

---

## Test Structure

```
tests/acceptance/
  fixtures.ts               # authedPage fixture (reads credentials from env)
  homepage.spec.ts          # Hero, sections, CTAs, screenshot baseline
  contact.spec.ts           # Form validation and submission
  navigation.spec.ts        # Navbar and routing
  setup/
    create-auth-session.ts  # One-time: log in and save storageState
  .auth/                    # Gitignored — saved sessions live here
```

---

## Adding a New Test

1. Create `tests/acceptance/<feature>.spec.ts`
2. `import { test, expect } from "@playwright/test"` for public pages
3. `import { test, expect } from "./fixtures"` to get the `authedPage` fixture
4. Run locally: `npx playwright test tests/acceptance/<feature>.spec.ts`

---

## CI Configuration

Set these secrets in your CI environment:

| Secret | Required? |
|---|---|
| `BROWSERLESS_WS_ENDPOINT` | Yes |
| `VERCEL_AUTOMATION_BYPASS_SECRET` | Yes (for preview deploys) |
| `AURORA_TEST_EMAIL` | Only for authenticated flows |
| `AURORA_TEST_PASSWORD` | Only for authenticated flows |

Then run:
```bash
npm run test:acceptance
```

---

## Running Against a PR Preview

```bash
TEST_BASE_URL=https://aurora-webdraft-git-pr-42.vercel.app \
VERCEL_AUTOMATION_BYPASS_SECRET=<secret> \
BROWSERLESS_WS_ENDPOINT=wss://... \
npx playwright test
```

This is how the Blocks agent performs acceptance QA before a PR is merged.
