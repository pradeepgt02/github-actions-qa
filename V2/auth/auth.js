const { chromium } = require("@playwright/test");
const loginLocator = require("../data/login.locator");
const config = require("../config/config");
const path = require("path");

async function authenticate() {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });
    const page = await browser.newPage();
    await page.goto(config.baseURL);
    await page.waitForTimeout(3000);
    await page.locator(loginLocator.username).fill("standard_user");
    await page.locator(loginLocator.password).fill("secret_sauce");
    await page.waitForTimeout(3000);
    await page.locator(loginLocator.loginButton).click();
    await page.waitForTimeout(3000);
    await page.context().storageState({
        path: path.join(__dirname, "auth.json")
    });
    await browser.close();
}
module.exports = authenticate;