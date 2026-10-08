const { test, expect } = require("@playwright/test");

test("Verify logged in user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");
    await expect(page).toHaveURL(/inventory/);
});