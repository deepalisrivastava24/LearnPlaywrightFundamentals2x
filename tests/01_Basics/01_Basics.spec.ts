import {test, expect} from '@playwright/test';

test("Verify the Title", async ({page})=> {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
    //page = fixture (injected by playwright) which is used to perform actions on the page

});