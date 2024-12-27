import { test, expect } from '@playwright/test';

test('Open home page and verify title', async ({ page }) => {
  // test steps
  await page.goto('https://www.fifa.com/en');

  await expect(page).toHaveTitle('FIFA | The Home of Football');
});