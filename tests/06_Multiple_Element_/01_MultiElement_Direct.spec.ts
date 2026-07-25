import{ test , expect} from '@playwright/test'

test('Verify element by filter', async({page})=>{

    page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await page.waitForLoadState('networkidle');
    
    await page.getByTestId("forgotten-password-link").click();



});