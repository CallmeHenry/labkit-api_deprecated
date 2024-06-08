require('dotenv').config();
const knex = require("knex")(require("../knexfile"));
const playwright = require('playwright');

async function scrape() {

    const computer = {
        model: null,
        partNumber: null
    }

    try {
        console.log("Attempting to create browser.");
        const browser = await playwright.chromium.launch({ headless: false });
        // const context = await browser.newContext();
        const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
});
        const page = await context.newPage();

        console.log("Attempting to go to page");
        await page.goto('https://www.acer.com/ca-en/support');
        // await page.goto('https://webscraper.io/test-sites/e-commerce/allinone');
        console.log("Attempting to accept all cookies.");
        // await page.click('button[name="Accept All Cookies"]');
        await page.locator('#onetrust-accept-btn-handler').click();

        await page.fill('input[placeholder="What can we help you find"]', 'nxhqbaa0011123d6107600');
        await page.press('input[placeholder="What can we help you find"]', 'Enter');
        await page.goto('https://www.acer.com/ca-en/support/product-support/CP713-2W/NX.HQBAA.001/downloads');

        const model = await page.textContent('#model');
        console.log("Model: ", model);
        const partNumber = await page.textContent('#partNumber');
        console.log("Part number: ", partNumber);

        computer.model = model;
        computer.partNumber = partNumber;



        await browser.close();
        return computer;
    } catch (error) {
        console.error(error);
    }
}

async function getModel(req, res) {

    // if doesn't exist in database, scrape it

    // testing purpose: scrape
    try {
        const computer = await scrape();
        return res.status(200).json({ computer });
    } catch (error) {
        return res.status(500).json({ message: "Error scraping computer." });
    }


}

module.exports = {
    getModel,
}