class OrganizationsPage {
    constructor(page) {
        this.page = page;
        this.pageHeading = page.getByRole("heading", {name:"Organizations"});
        this.searchBox = page.getByPlaceholder("Search organizations...");
        this.createButton = page.getByRole("button", {name:"Create"});
        this.exportButton = page.getByRole("button", {name:"Export"});
        this.currencyDropdown = page.getByRole("combobox", {name:"All currencies"});
        this.table = page.getByRole("table");
        this.tableHeaders = page.getByRole("columnheader");
    }
    async selectCurrency(currency) {
        await this.currencyDropdown.click();
        await this.page.getByText(currency, {exact:true}).click();
    }
    async getTableHeaders() {
        return await this.tableHeaders.allTextContents();
    }
    async getRows() {
        return await this.table.getByRole("row").allTextContents();
    }
    async getOrganizationRow(organizationName) {
        return this.table.getByRole("row", {name:new RegExp(organizationName, "i")});
    }
    async getOrganizationData(organizationName) {
        const row = await this.getOrganizationRow(organizationName);
        return await row.allTextContents();
    }
}
module.exports = OrganizationsPage;