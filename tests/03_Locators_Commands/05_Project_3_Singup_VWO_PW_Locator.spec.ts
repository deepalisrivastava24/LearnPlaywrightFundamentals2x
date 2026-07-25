import{test, expect} from '@playwright/test';

test('Verify the signup page has an error with the incorrect email ID.', async({page})=>{

await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
//let inputBox = page.locator('#page-v1-step1-email');
//await inputBox.fill("abc");

await page.getByRole('textbox',{name: 'email'}).fill('abc');

//await page.locator('#page-free-trial-step1-cu-gdpr-consent-checkbox').click();
await page.getByRole('checkbox').check();

//await page.locator("//button[@data-qa='page-su-submit']").first().click();
await page.getByRole('button',{name:'Create a Free Trial Account'}).click();

let error_msg = await page.locator("//div [contains(@class,'invalid-reason')]").first().textContent();
expect(error_msg).toContain("The email address you entered is incorrect.");

await page.waitForTimeout(10000);


});