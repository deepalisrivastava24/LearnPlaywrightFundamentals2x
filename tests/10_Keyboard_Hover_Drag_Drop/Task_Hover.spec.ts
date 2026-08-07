import{test, expect} from '@playwright/test';

test("Verify keyboard hover and submenu count", async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

    await page.getByTestId("nav-add-ons").hover();

    const subMenu = page.locator("//div[@aria-label='Add-ons submenu']/a");
    
    console.log(await subMenu.count());

    const menuitems = await subMenu.allInnerTexts();
    for(let items of menuitems){
        console.log(items);
    }

    await page.getByTestId("test-id-Wifi").click();

});