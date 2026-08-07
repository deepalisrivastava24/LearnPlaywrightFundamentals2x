import{test, expect} from '@playwright/test';

test("Verify keyboard hover and drag and drop", async({page})=>{
    await page.goto("https://keycode.info");

    await page.keyboard.press("D");
    await page.screenshot({path : "D.png"});

    await page.keyboard.press("Shift+o");
    await page.screenshot({path : 'O.png'});

    await page.keyboard.press("ArrowLeft");
    await page.screenshot({path : 'ArrowLeft.png'});

    await page.keyboard.down("Shift");
    await page.keyboard.up("Shift");

});