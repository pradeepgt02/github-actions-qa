const { test, expect } = require("@playwright/test");

test("CI smoke test", async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page).toHaveTitle(/Example Domain/);
});

test("Verify example page heading", async ({ page }) => {
    const response = await page.goto("https://example.com");

    expect(response.status()).toBe(200);
    await expect(page).toHaveTitle(/Example Domain/);
});