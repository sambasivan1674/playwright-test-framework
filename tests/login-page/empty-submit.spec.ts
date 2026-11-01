import { test, expect } from 'playwright/test';

test.describe('Login page basic operations', () => {
  test('should show validation feedback when submitting empty credentials', async ({ page }) => {
    // 1. Open the login page and click Sign In without entering either credential
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page.getByText(/Empty\s*username\/password\./)).toBeVisible();
    await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');
  });
});
