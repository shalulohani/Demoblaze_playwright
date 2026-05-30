# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\smoke.test.ts >> @smoke signup works
- Location: tests\e2e\smoke.test.ts:20:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/signup
Call log:
  - navigating to "http://localhost:3000/signup", waiting until "load"

```

# Test source

```ts
  1  | // tests/e2e/smoke.test.ts
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | // ✅ Smoke test: homepage loads
  5  | test('@smoke homepage loads', async ({ page }) => {
  6  |   await page.goto('http://localhost:3000'); // change to your app’s URL
  7  |   await expect(page).toHaveTitle(/My App/); // update regex to match your app title
  8  | });
  9  | 
  10 | // ✅ Smoke test: login works
  11 | test('@smoke login works', async ({ page }) => {
  12 |   await page.goto('http://localhost:3000/login'); // adjust path if different
  13 |   await page.fill('#username', 'demo');           // update selectors to match your login form
  14 |   await page.fill('#password', 'demo123');
  15 |   await page.click('button[type="submit"]');
  16 |   await expect(page).toHaveURL(/dashboard/);      // update regex to match your post-login route
  17 | });
  18 | 
  19 | // ✅ Smoke test: signup page works
  20 | test('@smoke signup works', async ({ page }) => {
> 21 |   await page.goto('http://localhost:3000/signup');
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/signup
  22 |   await page.fill('#email', 'demo@example.com');
  23 |   await page.fill('#password', 'demo123');
  24 |   await page.click('button[type="submit"]');
  25 |   await expect(page).toHaveURL(/welcome/);        // adjust to your post-signup route
  26 | });
  27 | 
  28 | // ✅ Smoke test: API health endpoint responds
  29 | test('@smoke API health check', async ({ request }) => {
  30 |   const response = await request.get('http://localhost:3000/api/health');
  31 |   expect(response.status()).toBe(200);
  32 |   const body = await response.json();
  33 |   expect(body.status).toBe('ok');                 // adjust to your API’s response format
  34 | });
  35 | 
  36 | // ✅ Smoke test: dashboard key widget renders
  37 | test('@smoke dashboard widget', async ({ page }) => {
  38 |   await page.goto('http://localhost:3000/dashboard');
  39 |   await expect(page.locator('#main-widget')).toBeVisible(); // update selector
  40 | });
  41 | 
```