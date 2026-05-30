import { test, expect } from '@playwright/test';

import { LoginPage } from '../Pages/LoginPage';
import { CartPage } from '../Pages/CartPage';

test.describe('Demoblaze E2E Suite', () => {
  test.setTimeout(60000);

  // SMOKE TEST
  test('Login using POM @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.demoblaze.com/');
    await loginPage.login('NaksAutoUser_1140_B', 'Test123');
    await expect(page.locator('#logout2')).toBeVisible();
  });

  // REGRESSION TEST
  test('Place order successfully @regression', async ({ page }) => {
    const cartPage = new CartPage(page);
    await page.goto('https://www.demoblaze.com/');
    await cartPage.addItemToCart();
    await cartPage.placeOrder();
  });

  // SMOKE TEST
  test('Logout user @smoke', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.click('#logout2');
    await page.waitForLoadState('networkidle');
  });
});
