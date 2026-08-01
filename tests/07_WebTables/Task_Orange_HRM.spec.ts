//  row=> //div[@row-decorator="oxd-table-decorator-card"]/div[@class="oxd-table-body"]/div
// column=> //div[@row-decorator="oxd-table-decorator-card"]/div[@class="oxd-table-body"]/div[@class="oxd-table-card"][
// 2]/div/div[@class="oxd-table-cell oxd-padding-cell"]

import{test , expect} from '@playwright/test';

test("Verify Webtable dynamic", async({page})=>{

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");

    
    await page.getByRole("textbox", { name: "Username" }).fill("admin");
    await page.getByRole("textbox", { name: "Password" }).fill("Awesomeqa@4321");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/viewEmployeeList/);

    const rows = page.locator(".oxd-table-card"); // or the actual row selector for your page
    await rows.first().waitFor();
    const rowsCount = await rows.count();
    console.log("Total rows in the table are: " + rowsCount);

    for( let i = 0 ; i <= rowsCount; i++){
        const rowData = rows.nth(i);
        //console.log("Row " + i + " data: " + await rowData.innerText());
        const colData = await rowData.locator('div[class="oxd-table-cell oxd-padding-cell"]').allTextContents();
        if (colData.includes('Terminated')){
            await page.locator(".oxd-icon.bi-trash").first().click();


        }

        
    }





   

    //const rows = await page.locator("//div[@row-decorator='oxd-table-decorator-card']/div[@class='oxd-table-body']/div").count();
    //console.log("Total rows in the table are: " + rows);
    await page.pause();

});