const { defineConfig } = require("@playwright/test");
const path = require("path");

module.exports = defineConfig({
    testDir: "../script",
    globalSetup: "./globalsetup.js",
    use: {
        headless: false,
        launchOptions: {
            slowMo: 1000
        },
        storageState: path.resolve(__dirname, "../auth/auth.json")
    }
});