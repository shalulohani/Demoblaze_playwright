import { Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addItemToCart() {
    this.page.on('dialog', dialog => dialog.accept());
    await this.page.click('a[onclick="addToCart(1)"]');
    await this.page.waitForTimeout(2000);
  }

  async placeOrder() {
    await this.page.click('button[data-target="#orderModal"]');
    await this.page.waitForLoadState('networkidle');
  }
}
