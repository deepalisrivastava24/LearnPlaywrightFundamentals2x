import{ test , expect} from '@playwright/test'

test('Verify element by filter', async({page})=>{

    page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await page.waitForLoadState('networkidle');

    await page.locator("#email").fill("abcd@abcd.com");
    await page.locator('#password').fill("abcd");
    await page.getByRole('checkbox').check();
    await page.getByTestId("login-button").click();

    let expectedUrl= "https://app.thetestingacademy.com/playwright/multiple_element_filter?email=abcd%40abcd.com&password=abcd&remember=yes#login-success"
    await expect(page).toHaveURL(expectedUrl);
    //**/#/dashboard
    console.log("Test Sucessful"); 
    await page.pause();  
    


});