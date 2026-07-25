import { test, expect } from '@playwright/test';

test.setTimeout(60000);

test.use({
  storageState: './user-session.json',
});

test('go directly to dashboard — no login', async ({ page }) => {
  await page.goto('https://app.wingify.com/#/dashboard?accountId=1227004', {
    waitUntil: 'networkidle',
    timeout: 60000,
  });

  await page.waitForURL(/dashboard/, { timeout: 60000 });
  await expect(page).toHaveURL(/dashboard/);
  console.log('Dashboard URL verified ✅');
});

test('go directly to settings — no login', async ({ page }) => {
  await page.goto('https://app.wingify.com/#/settings/accounts/general?accountId=1227004', {
    waitUntil: 'networkidle',
    timeout: 60000,
  });

  await page.waitForURL(/settings/, { timeout: 60000 });
  await expect(page).toHaveURL(/settings/);
  console.log('Settings URL verified ✅');
});

