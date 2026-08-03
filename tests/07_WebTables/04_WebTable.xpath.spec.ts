import {test , expect} from '@playwright/test';

test("Verify Element by filter", async({page}) => {

await page.goto("https://app.thetestingacademy.com/playwright/webtable");

// select checkbox by username with XPath
await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").click();

// same idea using CSS :has()
await page
    .locator("tr:has(td:text('Rohan.Mehta'))")
    .locator("td")
    .first()
    .click();

    // get all data after the username column
    const userData = await page
    .locator("//td[text()='Aarav.Sharma']/following-sibling::td")
    .allTextContents();

    const city = userData[2]; // Assuming city is the third column

    console.log(userData);
    console.log(city);

});