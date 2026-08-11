import{test, expect, Locator} from '@playwright/test'
import path from 'path';
import os from 'os';

const URL = 'https://app.thetestingacademy.com/student/settings';

test.describe('Grouping testcase', ()=>{    

    test.beforeEach(async ({ page }) => {
        console.log('TEST_EMAIL:', process.env.TEST_EMAIL);
        console.log('TEST_PASSWORD:', process.env.TEST_PASSWORD);
    
        await page.goto('https://app.thetestingacademy.com/login'); // adjust to real login URL

        await page.locator("input[name='identifier']").fill(process.env.TEST_EMAIL!);
        await page.locator("input[name='password']").fill(process.env.TEST_PASSWORD!);

        await page.locator("//div[@class='cl-internal-1pnppin']").click();

        await page.pause();

    const dismissBtn = page.getByRole('button', { name: 'Dismiss' });

        if (await dismissBtn.isVisible().catch(() => false)) {
            await dismissBtn.click();
        }
        await page.goto(URL);
        
    });

    test('Single File Upload', async({page})=>{
        
        const filePath : string = path.join(os.homedir(),'Downloads','images2.jpg');
        const fileInput: Locator = await page.locator("//input[@id='avatar-upload']");
        await fileInput.setInputFiles(filePath);


        await page.pause();

                 
               
       
    });

    

    
});