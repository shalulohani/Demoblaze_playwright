import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import { HomePage } from '../../Pages/HomePage';
import { CartPage } from '../../Pages/CartPage';
import { OrderPage } from '../../Pages/PurchasePage';

// Define fixture types
type PagesFixture = {
  loginPage: LoginPage;
  homePage: HomePage;
  cartPage: CartPage;
  orderPage: OrderPage;
};

// Extend Playwright test with typed fixtures
const test = base.extend<PagesFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  orderPage: async ({ page }, use) => {
    await use(new OrderPage(page));
  },
});

export { test };
export const expect = base.expect;
