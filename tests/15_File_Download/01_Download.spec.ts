import{test , expect} from '@playwright/test';
import path from 'path';

test.describe('File Downalod Code', ()=> {

    test.beforeEach(async({page})=>{
        page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
        
    });

    test('Verify the download button is working, we are able to save the file.', async({page})=>{

        const [downloadStatic] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-static').click()
        ]);

        const filePath = path.join('output',downloadStatic.suggestedFilename());
        await downloadStatic.saveAs(filePath);

    }); 


});