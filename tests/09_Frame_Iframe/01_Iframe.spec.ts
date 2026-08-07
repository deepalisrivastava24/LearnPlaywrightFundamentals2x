import{test, expect, FrameLocator} from '@playwright/test';

test("Verify frame and iframe", async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    
    let vehicleFrame : FrameLocator = page.frameLocator("#frame-one");

    await vehicleFrame.locator("#RESULT_TextField-1").fill("Mauriti i10");
    await vehicleFrame.locator("#RESULT_TextField-2").fill("Deepali");
    await vehicleFrame.locator("#RESULT_TextField-3").fill("UP-12-AB-1234");
    await vehicleFrame.locator("#RESULT_RadioButton-1").selectOption("SUV");
    await vehicleFrame.locator("#RESULT_TextField-4").fill("2024");
    await vehicleFrame.locator("#RESULT_TextArea-1").fill("Good car with excellent mileage and features.");
    await vehicleFrame.getByText("Submit registration", { exact: true }).click();

    let output = await vehicleFrame.locator("#vehicle-output").innerText();
    console.log("Vehicle Output: " + output);



});