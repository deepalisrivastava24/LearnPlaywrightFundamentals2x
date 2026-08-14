import{test , expect} from '@playwright/test';

test.describe('Assertions', ()=>{

    test.beforeEach(async({page})=>{
        page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
    });

    test('Visible · enabled · disabled · checked', async({page})=>{

        await page.getByTestId('first-name').fill('Deepali');
        await page.getByTestId('last-name').fill('Srivastava');

        await page.pause();
        await page.getByTestId('gender-female').check();
        await expect(page.getByTestId('gender-female')).toBeChecked();
        

        const automationCheckBox = page.getByRole('checkbox', { name: /UFT/ });
        //chkBox.check();
        await expect(automationCheckBox).not.toBeChecked();
        await page.pause();
        
        const submitBtn = page.getByTestId('profile-submit');
        await expect(submitBtn).toBeEnabled();
        await expect(submitBtn).toBeVisible();

        const url = page.url();
        await expect(url).toContain('thetestingacademy');


    })






})