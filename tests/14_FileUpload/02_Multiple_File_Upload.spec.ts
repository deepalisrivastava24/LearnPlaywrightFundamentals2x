import { test, expect } from '@playwright/test';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/';

test.describe('Grouping testcase', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('Multiple File Upload', async ({ page }) => {

        const uploadInput = page.locator('div.pf-v6-c-multiple-file-upload input[type="file"]');

        await uploadInput.setInputFiles([
            {
                name: 'file1.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('image from thetestingacademy code')
            },
            {
                name: 'file2.png',
                mimeType: 'image/png',
                buffer: Buffer.from('this is test')
            }
        ]);

        const uploadWidget = page.locator('div.pf-v6-c-multiple-file-upload');
        await expect(uploadWidget).toContainText('file1.jpg');
        await expect(uploadWidget).toContainText('file2.png');

        //await page.locator(".pf-v6-c-button pf-m-secondary").click();
        await page.locator(".pf-v6-c-button.pf-m-secondary").click();
    });
});