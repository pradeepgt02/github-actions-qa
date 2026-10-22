const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
    testDir: "./tests",

    reporter: [
        ["list"],
        ["html", {
            outputFolder: "playwright-report",
            open: "never"
        }]
    ],

    use: {
        headless: true,
        screenshot: "only-on-failure",
        trace: "retain-on-failure"
    }
});