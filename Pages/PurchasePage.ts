import { Page } from '@playwright/test';

export class PurchasePage {
  constructor(private page: Page) {}

  async placeOrder() {
    await this.page.click('button[data-target="#orderModal"]');
    await this.page.fill('#name', 'Test User');
    await this.page.fill('#country', 'India');
    await this.page.fill('#city', 'Hyderabad');
    await this.page.fill('#card', '123456789012');
    await this.page.fill('#month', 'May');
    await this.page.fill('#year', '2026');
    await this.page.click('button[onclick="purchaseOrder()"]');
    await this.page.waitForSelector('.sweet-alert');
    await this.page.click('button.confirm');
  }
}
