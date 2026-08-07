import{test, expect} from '@playwright/test';

test("JS alert 1", async({page})=>{

     test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    });

    // Register the dialog handler BEFORE triggering the alert
    page.once('dialog', async dialog =>{
        console.log('alert type', dialog.type());
        console.log('Alert message:', dialog.message());
        expect(dialog.message()).toBe("I am a JS Alert");
        await dialog.accept();
    });

    await page.getByRole('button',{name : "Click for JS Alert"}).click();
    
});

   test("JS alert 2", async({page})=>{    

    // Register the dialog handler BEFORE triggering the alert

    page.once('dialog', async dialog =>{
        console.log('alert type:', dialog.type());
        expect(dialog.type()).toBe("confirm");
        console.log('Alert message:', dialog.message());
        expect(dialog.message()).toBe("I am a JS Confirm");
        //await dialog.accept();
        await dialog.dismiss();
    });

    await page.getByRole('button',{name : "Click for JS Confirm"}).click();   

});

test("JS alert 3", async({page})=>{  

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Register the dialog handler BEFORE triggering the alert
    const inputText = 'Hello From The Testing Academy';
    page.once('dialog', async dialog =>{
        console.log('alert type:', dialog.type());
        expect(dialog.type()).toBe("prompt");
        console.log('Alert message:', dialog.message());
        expect(dialog.message()).toBe("I am a JS prompt");
        expect(dialog.defaultValue()).toBe('');
        await dialog.accept(inputText);
        //await dialog.dismiss();
    });

    await page.getByRole('button',{name : "Click for JS Prompt"}).click();   

});