import{test, expect} from '@playwright/test';
import path from 'path';

test.describe('Download a file', ()=>{

    test.beforeEach(async({page})=>{
        page.goto("https://qajobfit.com/dashboard?tab=builder");
        await page.getByRole('textbox', { name: 'your.email@example.com' }).click();
        await page.getByRole('textbox', { name: 'your.email@example.com' }).fill('deepali.sri2406@gmail.com');;
        await page.getByRole('textbox', { name: '••••••••' }).click();
        await page.getByRole('textbox', { name: '••••••••' }).fill('Livelife@24');        
        await page.getByRole('button', { name: 'Sign in' }).click();
        //await page.getByRole('button', { name: 'Close', exact: true }).click();
        await page.locator('//a[contains(text(), "Build resume")]').click();
        console.log("website opened");
        await page.pause();

    });

    test('Verify download file', async({page})=>{

        const [downloadPDF] = await Promise.all([
            page.waitForEvent('download'),
            page.getByRole('button', {name:'PDF'}).click()

        ]);

        const filePath = path.join('output',downloadPDF.suggestedFilename());
        await downloadPDF.saveAs(filePath); 
        
      

    });


})