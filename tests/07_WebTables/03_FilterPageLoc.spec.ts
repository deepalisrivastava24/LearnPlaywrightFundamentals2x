import {test , expect} from '@playwright/test';

test("Verify Element by filter", async({page}) => {

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

const forgottonPasswordLInk = page.locator("a.list-group-item").filter({hasText: "Forgotten Password"});
await forgottonPasswordLInk.click();

const accountLinks = await page.locator("a.list-group-item").count();
console.log("Total Account Links are - " + accountLinks);
expect(accountLinks).toBe(13);

const privacyLink = page.locator("footer a").filter({hasText: "Privacy Policy"});
await expect(privacyLink).toHaveAttribute("href", "#privacy-policy");


});