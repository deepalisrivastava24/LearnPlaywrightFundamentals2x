import {test , expect, Page, Locator} from '@playwright/test';

async function findRowByName(page: Page, name: string): Promise<Locator> {
    while (true) {
        const row = page.locator("#employees-tbody tr").filter({ hasText: name });
        if (await row.count()) {
            return row;
        }

        const nextButton = page.getByTestId("next-page");
        if (await nextButton.isDisabled()) {
            throw new Error(`Row with name ${name} not found in the table`);
        }
        await nextButton.click();
    }


    throw new Error(`Row with name ${name} not found in the table`);
}



test("Verify Element by filter", async({page}) => {

await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");


    let name : string = "Mia Hoffmann";
    const row = await findRowByName(page, name);

    const email = await row.locator("td[data-col='email']").innerText();    
    console.log(email);
   
    await page.waitForTimeout(3000);
    await page.pause();

});