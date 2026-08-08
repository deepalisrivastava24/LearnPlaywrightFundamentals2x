import { test, expect, Locator } from '@playwright/test';

test.describe('SVG Practice', () => {

    const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg';

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('Verify SVG elements', async ({ page }) => {

        await page.locator("#circle-blue").click();
        const output = await page.locator("#shapes-output").innerText();
        expect(output).toContain("Blue circle");

        await page.getByRole("button", { name: /Q3 bar/ }).click();
        await page.getByRole("radio", { name: '4 stars' }).click();

        const allBars = await page.locator(".bar").all();

        let smallestHeight = Infinity;   // <-- declared ONCE, outside the loop
        let smallestQuarter: string | null = null;

        for (const bar of allBars) {
            const q = await bar.getAttribute('data-quarter');
            const h = await bar.getAttribute('height');
            console.log(q);
            console.log(h);

            if (h === null) continue; // skip bars with no height attribute

            const height = parseFloat(h);

            if (!isNaN(height) && height < smallestHeight) {
                smallestHeight = height;
                
            }
        }

        console.log(`Smallest bar with height ${smallestHeight}`)
    });

});