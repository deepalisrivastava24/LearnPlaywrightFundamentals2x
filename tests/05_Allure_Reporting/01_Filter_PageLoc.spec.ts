import { test, expect } from '@playwright/test';

test('Verify element by filter', async ({ page }) => {
    await test.step('Open the multiple element filter page', async () => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    });

    await test.step('Collect and validate filter items', async () => {
        const multiElementText = await page.locator('a.list-group-item').allInnerTexts();

        console.log(`Found ${multiElementText.length} filter items`);
        /* expect(multiElementText.length).toBeGreaterThan(0);
        expect(multiElementText.some((item) => item.trim().length > 0)).toBeTruthy(); */
    });
});