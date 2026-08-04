# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\Task_SpiceJet.spec.ts >> SpiceJet Dynamic Webtable
- Location: tests\07_WebTables\Task_SpiceJet.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Mumbai', { exact: true })

```

# Test source

```ts
  1  | import{test , expect} from '@playwright/test';
  2  | 
  3  | test("SpiceJet Dynamic Webtable", async({page})=>{
  4  | 
  5  |     await page.goto("https://www.spicejet.com/");
  6  | 
  7  |      await page.pause();
  8  |     await page.getByTestId("to-testID-origin").click();    
  9  |     await page.getByTestId("to-testID-origin").locator('input').fill('Mum');       
> 10 |     await page.getByText('Mumbai', { exact: true }).click();
     |                                                     ^ Error: locator.click: Target page, context or browser has been closed
  11 | 
  12 |     await page.getByTestId("to-testID-destination");    
  13 |     await page.getByTestId("to-testID-destination").locator('input').fill('Del');
  14 |     await page.getByText('New Delhi', { exact: true }).click();
  15 |     
  16 |     
  17 | 
  18 |    /*  // 1. Navigate to the SpiceJet homepage
  19 |     await page.goto('https://www.spicejet.com/');
  20 |     //await page.pause();
  21 |     // 2. Click the "From" (Origin) box to open the city selection panel.
  22 |     await page.getByTestId('to-testID-origin').click();
  23 |     await page.getByTestId('to-testID-origin').locator('input').fill("De");
  24 |     // 3. Select 'Delhi' from the opened panel.
  25 |     await page.getByText('Delhi', { exact: true }).click();
  26 |     // 4. The "To" (Destination) panel opens AUTOMATICALLY on SpiceJet.
  27 |     // await page.getByTestId('to-testID-destination').click();(Not required)
  28 |     await page.getByTestId("to-testID-destination").locator("input").fill("Ban");
  29 |     await page.getByText('Bengaluru', { exact: true }).click();
  30 |     //5. optional to verify data............
  31 |     await expect(page.getByTestId('to-testID-origin').locator('input')).toHaveValue(/Delhi/i);
  32 |     await expect(page.getByTestId('to-testID-destination').locator('input')).toHaveValue(/Bengaluru/); */
  33 | 
  34 | 
  35 |     
  36 | });
  37 | 
```