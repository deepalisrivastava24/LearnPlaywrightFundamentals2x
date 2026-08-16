import{test , expect} from '@playwright/test';
import loginData from './test-data/login.json';

test.describe('login', ()=>{

    test.beforeEach(async({page})=>{
        page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    });

    test('Verify login with valid credentials', async({page})=>{
        await page.getByRole("textbox", {name : "email"}).fill(loginData.validUser.email);
        await page.getByRole("textbox", {name : "password"}).fill(loginData.validUser.password);
        await page.getByTestId('login-button').click();
        await page.pause();

    });

    test('Verify login with invalid credentials', async({page})=>{
        await page.getByRole("textbox", {name : "email"}).fill(loginData.invalidUser.email);
        await page.getByRole("textbox", {name : "password"}).fill(loginData.invalidUser.password);
        await page.getByTestId('login-button').click();
        await page.pause();


    });







});