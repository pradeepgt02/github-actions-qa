const authenticate = require("../auth/auth");

async function globalSetup() {
    await authenticate();
}

module.exports = globalSetup;   