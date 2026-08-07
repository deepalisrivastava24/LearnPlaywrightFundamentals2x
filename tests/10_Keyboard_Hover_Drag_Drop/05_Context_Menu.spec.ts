import{test, expect} from '@playwright/test';

test("Drag & Drop", async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");

    await page.locator("span.context-menu-one").first().click({button:"right"});
    const allItems : string[] = await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log(allItems);

    await page.getByText("Delete",{exact:true}).first().click();
    await page.pause();

});