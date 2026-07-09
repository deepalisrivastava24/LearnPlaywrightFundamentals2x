import {test, expect} from '@playwright/test';

test("Verify the Title", async({page})=> {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle("Playwright");
    
    });

    //Skip test
    test.skip("Skipped Test", async({page}) =>{
        //This test will be skipped and not executed
    });

    //Only run this test
    test.only("focused test", async({page}) => {
        //This test will be executed and all other tests will be skipped
    });

    //Mark as Failing test
    test.fail("expected to fail", async({page}) => {
        //This test is expected to fail and will be marked as failed in the report
    });

    //slow test (3x timeout)
    test.slow("slow test", async({page}) => {
        //This test is expected to be slow and will have 3x timeout
    });

    //Conditional skip
    test("Conditional skip", async({page}) => {
        test.skip(browserName === "firefox", "This test is skipped on Firefox");
    });
