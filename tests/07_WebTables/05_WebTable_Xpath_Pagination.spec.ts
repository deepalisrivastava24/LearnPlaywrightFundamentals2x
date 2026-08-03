import {test , expect} from '@playwright/test';

test("Verify Element by filter", async({page}) => {

    //  Finding one person's email and country


await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

/* const row =  page.locator("#employees-tbody tr").filter({hasText: 'Priya Kapoor'});

const email = await row.locator("td[data-col='email']").innerText();
console.log(email);

const country = await row.locator("td[data-col='country']").innerText();
console.log(country);

await page.waitForTimeout(3000);
 */

//when pagination is there, we can use the below code to get the data from the table

let name = "Luca Greco";
let row;
while(true){
    row =  page.locator("#employees-tbody tr").filter({hasText: name});
    if(await row.count()){
        break;
    }

    const nextButton = page.getByTestId("next-page");
    if(await nextButton.isDisabled()){
        throw new Error(`Row with name ${name} not found in the table`);
    }
    await nextButton.click();

    const email = await row.locator("td[data-col='email']").innerText();
    console.log(email);

    const country = await row.locator("td[data-col='country']").innerText();
    console.log(country);

    await page.waitForTimeout(3000);
    await page.pause();

}



});