import { defineConfig, devices } from "@playwright/test";

// Remote Browserless WebSocket endpoint, e.g.:
//   wss://production-sfo.browserless.io/playwright?token=YOUR_TOKEN
const BROWSERLESS_WS_ENDPOINT = process.env.BROWSERLESS_WS_ENDPOINT;

// Default to production; override with a Vercel preview URL for PR checks.
const BASE_URL = (
  process.env.TEST_BASE_URL ?? "https://aurora-webdraft.vercel.app"
).replace(/\/$/, "");

// Vercel deployment-protection bypass header value.
// Lets Browserless reach password-protected preview deployments.
// Generate via: vercel env add VERCEL_AUTOMATION_BYPASS_SECRET
const VERCEL_BYPASS = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

export default defineConfig({
  testDir: "./tests/acceptance",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [["html", { open: "never" }], ["list"]],

  use: {
    baseURL: BASE_URL,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",

    // Bypass Vercel deployment protection on every request when the secret is set.
    extraHTTPHeaders: VERCEL_BYPASS
      ? { "x-vercel-protection-bypass": VERCEL_BYPASS }
      : {},

    // When BROWSERLESS_WS_ENDPOINT is set, connect to Browserless instead of
    // launching a local browser. Omit the env var to run locally with Chromium.
    ...(BROWSERLESS_WS_ENDPOINT
      ? { connectOptions: { wsEndpoint: BROWSERLESS_WS_ENDPOINT } }
      : {}),
  },

  projects: [
    {
      name: "desktop-chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-safari",
      use: { ...devices["iPhone 13"] },
    },
  ],
});
