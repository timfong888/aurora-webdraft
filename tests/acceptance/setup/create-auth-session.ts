/**
 * One-time script: log in to Aurora's product UI and save the browser
 * auth state (cookies + localStorage) so tests can skip re-authentication.
 *
 * Run once, then check-in the path (not the file itself) to your CI config.
 *
 * Usage:
 *   AURORA_TEST_EMAIL=you@company.com \
 *   AURORA_TEST_PASSWORD=<from-secrets-manager> \
 *   BROWSERLESS_WS_ENDPOINT=wss://... \
 *   npx ts-node tests/acceptance/setup/create-auth-session.ts
 *
 * The saved state is written to tests/acceptance/.auth/session.json.
 * That path is listed in .gitignore — NEVER commit the file.
 *
 * In CI, restore the file from a secrets store (e.g. AWS Secrets Manager)
 * and set AURORA_AUTH_SESSION_PATH pointing to the restored path.
 */

import { chromium } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const email = process.env.AURORA_TEST_EMAIL;
  const password = process.env.AURORA_TEST_PASSWORD;
  const wsEndpoint = process.env.BROWSERLESS_WS_ENDPOINT;
  const baseURL = (
    process.env.TEST_BASE_URL ?? "https://aurora-webdraft.vercel.app"
  ).replace(/\/$/, "");

  if (!email || !password) {
    console.error(
      "Error: AURORA_TEST_EMAIL and AURORA_TEST_PASSWORD are required.",
    );
    process.exit(1);
  }

  const browser = wsEndpoint
    ? await chromium.connect(wsEndpoint)
    : await chromium.launch();

  const context = await browser.newContext({ baseURL });
  const page = await context.newPage();

  console.log("Navigating to login…");
  await page.goto("/login");
  await page.getByLabel("Email").fill(email);
  // Password is read from env — never logged or stored in source.
  await page.getByLabel("Password").fill(password);
  await page.getByRole("button", { name: /sign in/i }).click();
  await page.waitForURL("/dashboard");

  const outDir = path.join(__dirname, "../.auth");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "session.json");

  await context.storageState({ path: outPath });
  console.log(`Auth session saved → ${outPath}`);
  console.log("Set AURORA_AUTH_SESSION_PATH to that path in CI.");

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
