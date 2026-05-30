import { test, expect } from '@playwright/test';

test('Verify Demoblaze homepage loads', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
  await expect(page).toHaveTitle(/STORE/);
});
