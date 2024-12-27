import { test, expect } from '@playwright/test';

test('Open home page and verify title', async ({ page }) => {
  await page.goto('https://www.fifa.com/en');

  await expect(page).toHaveTitle('FIFA | The Home of Football');
});

test('Verify logo is visible and has the alt title', async ({ page }) => {
  await page.goto('https://www.fifa.com/en');

  const logo = page.locator('[href="/en/home"] img');
  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute('title', 'FIFA');
  await expect(logo).toHaveAttribute('alt', 'FIFA');
});