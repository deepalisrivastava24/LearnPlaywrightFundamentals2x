import{test , expect} from '@playwright/test';

test("Verify Webtable dynamic", async({page})=>{

    await page.goto("https://awesomeqa.com/webtable1.html");

    const rows = page.locator('table[summary="Sample Table"] tbody tr');
    const rowsCount = await rows.count();
    console.log(rows);

    for( let i = 0 ; i <= rowsCount; i++){
        const rowData = await rows.nth(i).locator('td').allInnerTexts();
        console.log(rowData);
    }

});