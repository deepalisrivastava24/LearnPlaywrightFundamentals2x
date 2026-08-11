import{test, expect, Locator} from '@playwright/test'

const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom';

test.describe('Grouping testcase', ()=>{    

    test.beforeEach(async ({ page }) => {
        
        await page.goto(URL);
    });

    test('DOM elements--1', async({page})=>{

        const card = await page.getByTestId('card-account-card');
        await card.locator("input[name='email']").fill("deepu@gamil.com");
        await card.locator("input[name='password']").fill("123456");
        await card.getByTestId("card-account-submit").click();
        const status = card.getByTestId("card-account-status");        
        await expect(status).toContainText("deepu@gamil.com");           
               
       
    });

    test('DOM elements--2', async({page})=>{

        const card = await page.getByTestId('counter-cart');
        await card.getByTestId("counter-cart-inc").click();
        await card.getByTestId("counter-cart-inc").click();
        const value = card.getByTestId("counter-value");
        await expect(value).toHaveText('5');            
       
    });

    test('DOM elements--3', async({page})=>{

        const card = await page.getByTestId('nested-host');
        await card.getByTestId("card-inside-email").fill("deepali.sri@gamil.com");
        await card.getByTestId("card-inside-password").fill("123456");
        await card.getByTestId("card-inside-submit").click();
        const status = card.getByTestId("card-inside-status");
        await expect(status).toContainText("deepali.sri@gamil.com");                
       
    });

    
});