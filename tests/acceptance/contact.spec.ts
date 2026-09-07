import { test, expect } from "@playwright/test";

test.describe("Contact page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("all required form fields are visible", async ({ page }) => {
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Work email")).toBeVisible();
    await expect(page.getByLabel("Company")).toBeVisible();
    await expect(page.getByRole("button", { name: "Send" })).toBeVisible();
  });

  test("interest dropdown has expected options", async ({ page }) => {
    const select = page.getByLabel("I'm here to");
    await expect(select).toBeVisible();
    await expect(select.getByRole("option", { name: "Reserve capacity" })).toBeAttached();
    await expect(select.getByRole("option", { name: "Talk to us" })).toBeAttached();
    await expect(select.getByRole("option", { name: "RSVP — June 30 event" })).toBeAttached();
  });

  test("shows error when name is missing", async ({ page }) => {
    await page.getByLabel("Work email").fill("test@example.com");
    await page.getByRole("button", { name: "Send" }).click();
    const alert = page.getByRole("alert");
    await expect(alert).toBeVisible();
    await expect(alert).toContainText(/name/i);
  });

  test("shows error when email is invalid", async ({ page }) => {
    await page.getByLabel("Name").fill("Test User");
    await page.getByLabel("Work email").fill("not-an-email");
    await page.getByRole("button", { name: "Send" }).click();
    const alert = page.getByRole("alert");
    await expect(alert).toBeVisible();
    await expect(alert).toContainText(/email/i);
  });

  test("successful submission shows confirmation message", async ({ page }) => {
    await page.getByLabel("Name").fill("Acceptance Test");
    await page.getByLabel("Work email").fill("acceptance@example.com");
    await page.getByLabel("Company").fill("Test Corp");
    await page.getByRole("button", { name: "Send" }).click();
    const status = page.getByRole("status");
    await expect(status).toBeVisible();
    await expect(status).toContainText(/thanks/i);
  });

  test("honeypot field is hidden from users", async ({ page }) => {
    // The bot-trap input must not be visible or focusable.
    const honeypot = page.locator("#website");
    await expect(honeypot).toBeAttached();
    await expect(honeypot).not.toBeVisible();
  });
});
