# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Frame_Iframe\01_Iframe.spec.ts >> Verify frame and iframe
- Location: tests\09_Frame_Iframe\01_Iframe.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#frame-one').contentFrame().getByText('RESULT_TextArea-1', { exact: true })

```

# Test source

```ts
  1  | import{test, expect, FrameLocator} from '@playwright/test';
  2  | 
  3  | test("Verify frame and iframe", async({page})=>{
  4  | 
  5  |     await page.goto("https://app.thetestingacademy.com/playwright/frames/");
  6  |     let vehicleFrame : FrameLocator = page.frameLocator("#frame-one");
  7  | 
  8  |     await vehicleFrame.locator("#RESULT_TextField-1").fill("Mauriti i10");
  9  |     await vehicleFrame.locator("#RESULT_TextField-2").fill("Deepali");
  10 |     await vehicleFrame.locator("#RESULT_TextField-3").fill("UP-12-AB-1234");
  11 |     await vehicleFrame.locator("#RESULT_RadioButton-1").selectOption("SUV");
  12 |     await vehicleFrame.locator("#RESULT_TextField-4").fill("2024");
  13 |     await vehicleFrame.locator("#RESULT_TextArea-1").fill("Good car with excellent mileage and features.");
> 14 |     await vehicleFrame.getByText("RESULT_TextArea-1", { exact: true }).click();
     |                                                                        ^ Error: locator.click: Target page, context or browser has been closed
  15 | 
  16 |     let output = await vehicleFrame.locator("#vehicle-output").innerText();
  17 |     console.log("Vehicle Output: " + output);
  18 | 
  19 | 
  20 | 
  21 | });
```