import {test , expect} from '@playwright/test';

test('Verify Select!' , async({page})=>{

    //① Single — searchable
 await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
 await page.getByTestId("rs-single-input").click(); 
 await page.getByText('Selenium').click();
 

 //② Multi — chips with remove
 await page.getByTestId('rs-multi-input').click();
 await page.getByText('Pytest',{exact: true}).click();
 await page.getByText('JUnit',{exact: true}).click();
 await page.keyboard.press('Escape');

 //③ Creatable multi — type and Enter
  await page.getByTestId('rs-creatable').click();
 await page.getByText('api-testing',{exact: true}).click();
 await page.getByText('security',{exact: true}).click();
 await page.keyboard.press('Escape');

 //④ Grouped — categorised options
 await page.getByTestId('rs-grouped').click();
 await page.getByText('AWS',{exact: true}).click();
 
 //Async — fetched on type
 await page.locator('#rs-async').click();
 //await page.getByTestId('rs-async-input').fill('pun');
 await page.getByTestId('rs-async-input').fill('pun');
 //await expect(page.getByTestId('rs-async-menu')).toContainText('pune');
 await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
 await page.getByText('Pune',{exact: true}).click();
 
 await page.pause();
 
});