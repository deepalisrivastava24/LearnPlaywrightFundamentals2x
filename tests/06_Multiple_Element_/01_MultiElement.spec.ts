import{ test , expect} from '@playwright/test'

test('Verify element by filter', async({page})=>{

    page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await page.waitForLoadState('networkidle');
    const rightPanelLinksText : string[] = await page.locator("a.list-group-item").allInnerTexts();

    console.log(rightPanelLinksText.length);

    for (const text of rightPanelLinksText){
        console.log(text);
    }

    for( const linkText of rightPanelLinksText){
        if(linkText === "Forgotten Password"){
            await page.getByText(linkText).first().click();
        }
    }

    const rightPanelLinks = await page.locator("a.list-group-item").all();
    for(const links of rightPanelLinks){
        console.log(await links.getAttribute("href")); 
    }



});