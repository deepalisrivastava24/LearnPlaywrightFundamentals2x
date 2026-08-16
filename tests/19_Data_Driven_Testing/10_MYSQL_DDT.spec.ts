import { test, expect } from '@playwright/test';
import { initializeDatabase, readTable, testConnection } from './util/dbReader';
import type { DBConfig } from './util/dbReader';

// MySQL database configuration
const dbConfig: DBConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'your_password_here',
    database: process.env.DB_NAME || 'playwright_test_db',
    port: parseInt(process.env.DB_PORT || '3306')
};

// Note: MySQL tests require MySQL server to be running
// Update DB environment variables or dbConfig with your MySQL credentials before running this test
let loginData: any[] = [];

test.beforeAll(async () => {
    try {
        // Test database connection first
        const connected = await testConnection(dbConfig);
        if (!connected) {
            throw new Error('Failed to connect to MySQL database');
        }
        
        // Initialize MySQL database with test data
        await initializeDatabase(dbConfig);
        
        // Load test data from MySQL
        loginData = await readTable(dbConfig, 'registration_test_data');
        
        console.log(`✓ Loaded ${loginData.length} test cases from MySQL`);
    } catch (error) {
        console.error('❌ Failed to load MySQL data.');
        console.error('Make sure MySQL server is running and dbConfig is configured correctly.');
        console.error('You can also set environment variables: DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT');
        console.error(error);
        throw error;
    }
});

test.describe('DDT MySQL', () => {

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
