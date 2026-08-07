# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_JS_Alerts\01_JS_Alert.spec.ts >> JS alert 3
- Location: tests\11_JS_Alerts\01_JS_Alert.spec.ts:38:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Click for JS Prompt' })

```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test';
  2  | 
  3  | test("JS alert 1", async({page})=>{
  4  | 
  5  |      test.beforeEach(async ({ page }) => {
  6  |         await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  7  |     });
  8  | 
  9  |     // Register the dialog handler BEFORE triggering the alert
  10 |     page.once('dialog', async dialog =>{
  11 |         console.log('alert type', dialog.type());
  12 |         console.log('Alert message:', dialog.message());
  13 |         expect(dialog.message()).toBe("I am a JS Alert");
  14 |         await dialog.accept();
  15 |     });
  16 | 
  17 |     await page.getByRole('button',{name : "Click for JS Alert"}).click();
  18 |     
  19 | });
  20 | 
  21 |    test("JS alert 2", async({page})=>{    
  22 | 
  23 |     // Register the dialog handler BEFORE triggering the alert
  24 | 
  25 |     page.once('dialog', async dialog =>{
  26 |         console.log('alert type:', dialog.type());
  27 |         expect(dialog.type()).toBe("confirm");
  28 |         console.log('Alert message:', dialog.message());
  29 |         expect(dialog.message()).toBe("I am a JS Confirm");
  30 |         //await dialog.accept();
  31 |         await dialog.dismiss();
  32 |     });
  33 | 
  34 |     await page.getByRole('button',{name : "Click for JS Confirm"}).click();   
  35 | 
  36 | });
  37 | 
  38 | test("JS alert 3", async({page})=>{  
  39 | 
  40 |     // Register the dialog handler BEFORE triggering the alert
  41 | 
  42 |     page.once('dialog', async dialog =>{
  43 |         console.log('alert type:', dialog.type());
  44 |         expect(dialog.type()).toBe("prompt");
  45 |         console.log('Alert message:', dialog.message());
  46 |         expect(dialog.message()).toBe("I am a JS prompt");
  47 |         //await dialog.accept();
  48 |         await dialog.dismiss();
  49 |     });
  50 | 
> 51 |     await page.getByRole('button',{name : "Click for JS Prompt"}).click();   
     |                                                                   ^ Error: locator.click: Target page, context or browser has been closed
  52 | 
  53 | });
```