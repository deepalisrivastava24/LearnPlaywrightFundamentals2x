import { test, expect } from '@playwright/test';
import { readExcel } from './util/excelReader';
import path from 'path';

// Load XLSX test data
let loginData: any[] = [];

test.beforeAll(async () => {
    try {
        // Load XLSX test data
        const excelFilePath = path.join(__dirname, './test-data/registration-data.xlsx');
        loginData = await readExcel(excelFilePath);
        
        console.log(`✓ Loaded ${loginData.length} test cases from Excel`);
    } catch (error) {
        console.error('❌ Failed to load Excel data.');
        console.error('Make sure registration-data.xlsx exists in test-data folder.');
        console.error('Run: npx ts-node tests/19_Data_Driven_Testing/test-data/generate-excel-data.ts');
        console.error(error);
        throw error;
    }
});

test.describe('DDT XLSX', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
    });

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {

            const textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            const textboxPassword = page.getByRole("textbox", { name: "Password" })
                .or(page.locator("#password"))
                .or(page.locator("[name=\"password\"]"));
            const buttonLogin = page.getByRole("button", { name: "Login to Practice Account" })
                .or(page.getByTestId("login-button"))
                .or(page.getByText("Login to Practice Account"));

            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await buttonLogin.click();

            if (data.shouldPass === true) {
                await expect(page).not.toHaveURL(/multiple_element_filter/);
            } else {
                await expect(page.getByText(data.expectedError)).toBeVisible();
            }
        });

    }

});
