import { test, expect } from 'playwright/test';

test.describe('Login page basic operations', () => {
  test('should reject invalid credentials', async ({ page }) => {
    // 1. Enter an invalid username and password, then click Sign In
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.getByLabel('Username:').fill('invalid-user');
    await page.getByLabel('Password:').fill('wrong-password');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page.getByText(/Incorrect\s*username\/password\./)).toBeVisible();
    await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');
  });
});
