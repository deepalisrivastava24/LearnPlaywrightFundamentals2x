import {chromium, Browser, BrowserContext, Page} from "playwright";

async function run() {

    //LEVEL1: Launch the browser
    let browser: Browser = await chromium.launch({
        headless: false
    });
    console.log("Browser is launched", browser);

    //LEVEL2: Create a new browser context- fresh session & isolated cookies/cache
    let context1: BrowserContext = await browser.newContext();
    console.log("New browser context is created", context1);

    let context2: BrowserContext = await browser.newContext();
    console.log("New browser context is created", context2);

    //LEVEL3: Create a new page in the browser context
    let page: Page = await context1.newPage();
    console.log("New page is opened", page);

    await page.goto("https://app.vwo.com");
    console.log("Title", await page.title());

    //Cleanup
    await page.close();
    await context1.close();
    await context2.close();
    await browser.close();

}

run();

