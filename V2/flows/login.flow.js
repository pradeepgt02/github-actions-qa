const loginLocator = require("../data/login.locator");
const config = require("../config/config");

class LoginFlow {
    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.goto(config.baseURL);
        await this.page.locator(loginLocator.username).fill(username);
        await this.page.locator(loginLocator.password).fill(password);
        await this.page.locator(loginLocator.loginButton).click();
    }
}

module.exports = LoginFlow;