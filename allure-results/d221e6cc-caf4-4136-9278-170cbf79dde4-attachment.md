# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\10_Advanced_Select_Pro.spec.ts >> Verify Select!
- Location: tests\07_WebTables\10_Advanced_Select_Pro.spec.ts:3:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByTestId('rs-async-input')
Expected substring: "pune"
Received string:    ""
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for getByTestId('rs-async-input')
    13 × locator resolved to <input type="text" aria-label="Search cities" data-testid="rs-async-input"/>
       - unexpected value ""

```

```yaml
- textbox "Search cities": pun
```

# Test source

```ts
  1  | import {test , expect} from '@playwright/test';
  2  | 
  3  | test('Verify Select!' , async({page})=>{
  4  | 
  5  |     //① Single — searchable
  6  |  await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
  7  |  await page.getByTestId("rs-single-input").click(); 
  8  |  await page.getByText('Selenium').click();
  9  |  
  10 | 
  11 |  //② Multi — chips with remove
  12 |  await page.getByTestId('rs-multi-input').click();
  13 |  await page.getByText('Pytest',{exact: true}).click();
  14 |  await page.getByText('JUnit',{exact: true}).click();
  15 |  await page.keyboard.press('Escape');
  16 | 
  17 |  //③ Creatable multi — type and Enter
  18 |   await page.getByTestId('rs-creatable').click();
  19 |  await page.getByText('api-testing',{exact: true}).click();
  20 |  await page.getByText('security',{exact: true}).click();
  21 |  await page.keyboard.press('Escape');
  22 | 
  23 |  //④ Grouped — categorised options
  24 |  await page.getByTestId('rs-grouped').click();
  25 |  await page.getByText('AWS',{exact: true}).click();
  26 |  
  27 |  //Async — fetched on type
  28 |  await page.getByTestId('rs-async').click();
  29 |  await page.getByTestId('rs-async-input').fill('pun');
> 30 |  await expect(page.getByTestId('rs-async-input')).toContainText('pune');
     |                                                   ^ Error: expect(locator).toContainText(expected) failed
  31 |  await page.getByText('Pune',{exact: true}).click();
  32 |  
  33 |  await page.pause();
  34 |  
  35 | });
```