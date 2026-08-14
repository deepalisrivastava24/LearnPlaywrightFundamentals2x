import { test, expect} from '@playwright/test'

 test('2 Locator-based assertions', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter.html');

        const heading = await page.getByText('multiple element filters',{exact:true});
        await expect(heading).toBeVisible();
        await expect(heading).toContainText('filter',{timeout:5000});

        const email = await page.getByRole('textbox', {name:'email'});
        await expect(email).toHaveAttribute('id', 'email');
        await expect(email).toHaveAttribute('name', 'email');
        await expect(email).toHaveAttribute('type', 'email');
        await expect(email).toHaveAttribute('placeholder', 'student@thetestingacademy.com');

        const footerLinks = page.locator('footer a');
        await expect(footerLinks).toHaveCount(16);

        


    });