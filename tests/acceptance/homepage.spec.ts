import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero h1 is present and visible", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("primary CTA — Reserve Capacity — links to /contact", async ({
    page,
  }) => {
    const btn = page.getByRole("link", { name: "Reserve Capacity" });
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute("href", "/contact");
  });

  test("secondary CTA — Talk to Us — links to /contact", async ({ page }) => {
    const btn = page.getByRole("link", { name: "Talk to Us" });
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute("href", "/contact");
  });

  test("problem-section callout copy is present", async ({ page }) => {
    await expect(
      page.getByText(/cheaper tokens don.t save you/i),
    ).toBeVisible();
  });

  test("all three pillar cards are rendered", async ({ page }) => {
    await expect(page.getByText("Predictable Cost")).toBeVisible();
    await expect(page.getByText("Token Optimization")).toBeVisible();
    await expect(page.getByText("Production-Ready Capacity")).toBeVisible();
  });

  test("pillar CTAs are present", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: "See Pricing" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "See How It Works" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Check Availability" }),
    ).toBeVisible();
  });

  test("CTA strip headline is present", async ({ page }) => {
    await expect(
      page.getByText("Beyond Token Maxing: The Path to Profitable AI"),
    ).toBeVisible();
  });

  test("proof-bar chart is present and labelled", async ({ page }) => {
    await expect(
      page.getByRole("img", { name: /token maxing.*chart/i }),
    ).toBeVisible();
  });

  test("full-page screenshot baseline", async ({ page }) => {
    await expect(page).toHaveScreenshot("homepage-full.png", {
      fullPage: true,
    });
  });
});
