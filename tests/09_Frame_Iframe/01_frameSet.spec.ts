import{test, expect, FrameLocator, Frame, Locator} from '@playwright/test';

test("Verify frame and iframe", async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");
    
    let frameSet : Locator[] = await page.locator("//frame").all();
    console.log("Total Frameset: " + frameSet.length);

    for(const frame of frameSet){
        console.log("Frame Name:" + await frame.getAttribute("name") + "Frame src:" + await frame.getAttribute("src"));
    }

    let mainFrame : FrameLocator = page.frameLocator("[name= 'main']");
    const title = await mainFrame.locator("h2").innerText();
    console.log("Main Frame Title: " + title);

    let sideFrame : FrameLocator = page.frameLocator("[name= 'side']");
    await sideFrame.getByTestId("side-link-registration").click();
    

    await page.pause();

});