import{test, expect, FrameLocator, Locator} from '@playwright/test';

test("Verify frame and iframe", async({page})=>{

    await page.goto("https://selectorshub.com/iframe-scenario/");
    
    let frame1 : FrameLocator = page.frameLocator("#pact1").first();
    let frame2 : FrameLocator = frame1.frameLocator("#pact2");
    let frame3 : FrameLocator = frame2.frameLocator("#pact3");

    await frame1.locator("#inp_val").fill("Deepali");
    await frame2.locator("#jex").fill("Kuhoo");
    await frame3.locator("#glaf").fill("Srivastava");

    const headerText = await frame1.locator('h3').innerText();
    console.log(headerText);
    await page.waitForTimeout(5000);

});