import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search';

test.describe('Grouping testcase', () => {

    test.beforeEach(async ({ page }) => {
        console.log('Before running testcase!');
        await page.goto(URL);
    });

    test('Find the cheapest Mac Mini price on first page', async ({ page }) => {

        const closeBtn = page.locator("button:has-text('✕')");
        if (await closeBtn.isVisible().catch(() => false)) {
            await closeBtn.click();
        }

        await page.locator("input[name='q']").fill('macmini');
        await page.locator("svg").first().click();

        const titleResults: Locator = page.locator(
            "//div[contains(@data-id,'CPU') or contains(@data-id,'MPC')]/div/a[2]"
        );

        // Wait for at least one price element to actually appear
        await titleResults.first().waitFor({ state: 'visible' });

        const count1 = await titleResults.count();
        console.log(`Found ${count1} price elements`);

        

        for (let i = 0; i < count1; i++) {
            const titleText = await titleResults.nth(i).textContent();
            console.log(titleText);           
            
        }

        
    });

});