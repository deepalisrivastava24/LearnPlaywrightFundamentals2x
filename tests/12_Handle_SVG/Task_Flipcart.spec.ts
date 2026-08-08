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

        const priceResults: Locator = page.locator(
            "//div[contains(@data-id,'CPU') or contains(@data-id,'MPC')]/div/a[3]"
        );

        // Wait for at least one price element to actually appear
        await priceResults.first().waitFor({ state: 'visible' });

        const count1 = await priceResults.count();
        console.log(`Found ${count1} price elements`);

        let cheapest = Infinity;

        for (let i = 0; i < count1; i++) {
            const rawText = await priceResults.nth(i).innerText();

            // Strip ₹ symbol and commas, then parse as a number
            const numericPrice = parseInt(rawText.replace(/[^0-9]/g, ''), 10);

            if (!isNaN(numericPrice) && numericPrice < cheapest) {
                cheapest = numericPrice;
            }
        }

        if (cheapest !== Infinity) {
            console.log(`Cheapest Mac Mini price on this page: ₹${cheapest}`);
        } else {
            console.log('No valid prices found.');
        }
    });

});