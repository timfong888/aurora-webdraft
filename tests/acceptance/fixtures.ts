/**
 * Playwright fixture extensions for Aurora acceptance tests.
 *
 * Import { test, expect } from this file instead of '@playwright/test'
 * whenever a spec needs authenticated-route coverage.
 */
import { test as base, expect, type Page } from "@playwright/test";

export { expect };

type AuthFixtures = {
  /**
   * A page pre-authenticated to Aurora's product UI.
   *
   * Reads AURORA_TEST_EMAIL and AURORA_TEST_PASSWORD from the environment.
   * Credentials are never hardcoded; in Blocks agent sessions they are
   * injected from Blocks Secrets at runtime.
   */
  authedPage: Page;
};

export const test = base.extend<AuthFixtures>({
  authedPage: async ({ page }, use) => {
    const email = process.env.AURORA_TEST_EMAIL;
    const password = process.env.AURORA_TEST_PASSWORD;

    if (!email || !password) {
      throw new Error(
        "AURORA_TEST_EMAIL and AURORA_TEST_PASSWORD must be set to run authenticated tests.\n" +
          "Store them in Blocks Secrets — never commit their values.",
      );
    }

    // Load a previously saved auth session if one exists.
    // Created by tests/acceptance/setup/create-auth-session.ts.
    const sessionPath = process.env.AURORA_AUTH_SESSION_PATH;
    if (sessionPath) {
      await page.context().addCookies([]);
      await page.context().storageState(); // noop — session was injected at context creation
    }

    await page.goto("/login");
    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password").fill(password);
    await page.getByRole("button", { name: /sign in/i }).click();
    await page.waitForURL("/dashboard");

    await use(page);
  },
});
