import{test, expect, Locator} from '@playwright/test'

const URL = 'https://www.flipkart.com/';

test.describe('Grouping testcase', ()=>{    

    test.beforeEach(async ({ page }) => {
        console.log('Before running testcase!');
        await page.goto(URL);
    });

    test('TC#1 @smoke @regression', async({page})=>{
        console.log('TC#1');
    });

    test('TC#2 @regression', async({page})=>{
        console.log('TC#2');
    });
});