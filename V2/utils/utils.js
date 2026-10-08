function generateUniqueName(prefix) {
    return `${prefix}_${Date.now()}`;
}

module.exports = { generateUniqueName };