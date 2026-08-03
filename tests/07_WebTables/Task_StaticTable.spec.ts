import {test , expect} from '@playwright/test';

// Method-1: Using XPath to get the country of a specific user
test("Verify country of a specific user", async({page}) => {

await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

// //tr[@data-testid="row-adobe"]/td[2]


const country = await page.locator("//td[text()='Yoshi Tannamuri']/following-sibling::td").innerText();
console.log(country);

});

// Method-2: Using XPath to get the country of a specific user
test("Verify country of a specific user-Method-2", async({page}) => {

await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

const name = "Yoshi Tannamuri";
const row = page.locator("tr").filter({ hasText: name });
const country = await row.locator("td[data-col='country']").innerText();
console.log(country);
await page.waitForTimeout(3000);

});