const { test, expect } = require("@playwright/test");

test("CI smoke test", async ({ page }) => {
    await page.goto("https://example.com");

    await expect(page).toHaveTitle(/Example Domain/);
});