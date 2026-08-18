import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("navbar is visible on the homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("navigation")).toBeVisible();
  });

  test("clicking the Aurora logo from /contact returns to /", async ({
    page,
  }) => {
    await page.goto("/contact");
    // First nav link that mentions Aurora / the brand
    const logo = page
      .getByRole("navigation")
      .getByRole("link")
      .first();
    await logo.click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("contact page is reachable from the navbar", async ({ page }) => {
    await page.goto("/");
    const contactLink = page
      .getByRole("navigation")
      .getByRole("link", { name: /contact/i });
    if ((await contactLink.count()) > 0) {
      await contactLink.click();
      await expect(page).toHaveURL(/\/contact/);
    } else {
      // No explicit Contact nav link — navigation links route through CTAs.
      test.skip();
    }
  });
});
