import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.click('#login2');
    await this.page.fill('#loginusername', username);
    await this.page.fill('#loginpassword', password);
    await this.page.click('button[onclick="logIn()"]');

    await this.page.waitForLoadState('networkidle');
    await this.page.waitForSelector('#nameofuser', { state: 'visible', timeout: 30000 });

    await expect(this.page.locator('#nameofuser')).toContainText(username);
  }
}
