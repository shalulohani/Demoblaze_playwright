// tests/e2e/smoke.test.ts
import { test, expect } from '@playwright/test';

// ✅ Smoke test: homepage loads
test('@smoke homepage loads', async ({ page }) => {
  await page.goto('http://localhost:3000'); // change to your app’s URL
  await expect(page).toHaveTitle(/My App/); // update regex to match your app title
});

// ✅ Smoke test: login works
test('@smoke login works', async ({ page }) => {
  await page.goto('http://localhost:3000/login'); // adjust path if different
  await page.fill('#username', 'demo');           // update selectors to match your login form
  await page.fill('#password', 'demo123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);      // update regex to match your post-login route
});

// ✅ Smoke test: signup page works
test('@smoke signup works', async ({ page }) => {
  await page.goto('http://localhost:3000/signup');
  await page.fill('#email', 'demo@example.com');
  await page.fill('#password', 'demo123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/welcome/);        // adjust to your post-signup route
});

// ✅ Smoke test: API health endpoint responds
test('@smoke API health check', async ({ request }) => {
  const response = await request.get('http://localhost:3000/api/health');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.status).toBe('ok');                 // adjust to your API’s response format
});

// ✅ Smoke test: dashboard key widget renders
test('@smoke dashboard widget', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard');
  await expect(page.locator('#main-widget')).toBeVisible(); // update selector
});
