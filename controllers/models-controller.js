require('dotenv').config();
const knex = require("knex")(require("../knexfile"));
const playwright = require('playwright');

async function scrapeAcer(serial) {

    try {
        console.log("Attempting to create browser.");
        const browser = await playwright.chromium.launch({ headless: false });
        const context = await browser.newContext({
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        });
        const page = await context.newPage();

        console.log("Attempting to go to page");
        await page.goto('https://www.acer.com/ca-en/support');

        console.log("Attempting to accept all cookies.");
        await page.locator('#onetrust-accept-btn-handler').click();

        await page.fill('input[placeholder="What can we help you find"]', serial);
        await page.press('input[placeholder="What can we help you find"]', 'Enter');
        await page.waitForURL('**/downloads', { timeout: 300000 });

        const currentURL = page.url();
        console.log("Current URL: " + currentURL);

        // const model = await page.textContent('#model');
        // console.log("Model: ", model);
        // const partNumber = await page.textContent('#partNumber');
        // console.log("Part number: ", partNumber);

        // computer.model = model;
        // computer.partNumber = partNumber;

        const computerDetails = await page.evaluate(() => {
            const extractText = (element) => element && element.innerText.trim();

            // Select the table rows containing the relevant information
            const rows = Array.from(document.querySelectorAll('table tr'));

            // Initialize an empty object to store the extracted details
            const details = {};

            // Iterate through each row and extract the relevant data
            rows.forEach((row) => {
                const labelCell = row.querySelector('td:first-child');
                const valueCell = row.querySelector('td:last-child');

                if (labelCell && valueCell) {
                    const label = extractText(labelCell);
                    const value = extractText(valueCell);

                    details[label] = value;

                }
            });

            return details;
        });

        console.log(computerDetails);

        await page.close();
        await context.close();
        await browser.close();

        return computerDetails;
    } catch (error) {
        console.error(error);
    }
}
function convertModeltoComputer(model) {
    
}
async function fetchModel(req, res) {

    // if doesn't exist in database, scrape it

    const { brand, serial } = req.body;
    console.log(`Fetching model with ${brand} and ${serial}`);

    // testing purpose: scrape
    try {
        if (brand === "Acer") {
            console.log("Scraping Acer website...");
            const computer = await scrapeAcer(serial);
            await knex('models').insert({ modelDetails: computer });
            console.log("Acer scraping successful.");
            return res.status(200).json({ computer });
        } else {
            console.log("Unsupported brand.");
            return res.status(404).json({ message: "Unsupported brand."});
        }

    } catch (error) {
        return res.status(500).json({ message: "Error scraping computer." });
    }


}

module.exports = {
    fetchModel,
}