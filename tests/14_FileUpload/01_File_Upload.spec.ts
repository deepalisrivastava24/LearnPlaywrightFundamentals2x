import{test, expect, Locator} from '@playwright/test'
import path from 'path';

const URL = 'https://the-internet.herokuapp.com/upload';

test.describe('Grouping testcase', ()=>{    

    test.beforeEach(async ({ page }) => {
        
        await page.goto(URL);
    });

    test('Single File Upload', async({page})=>{
        const filePath = path.join(__dirname,'testdata.txt');
        await page.setInputFiles('#file-upload', filePath);
        await page.click('#file-submit');

        await expect(page.locator('h3')).toContainText('File Uploaded!');
        await expect(page.locator('#uploaded-files')).toContainText('testdata.txt')

        await page.pause();

                 
               
       
    });

    

    
});