import{test, expect} from '@playwright/test';

test("Drag & Drop", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");

    let columnA = page.locator("#column-a");
    let columnB = page.locator("#column-b");

    await columnA.dragTo(columnB);
    

});