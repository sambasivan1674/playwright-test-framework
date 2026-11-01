import { test, expect } from 'playwright/test';

test.describe('Login page basic operations', () => {
  test('should display the login form and default selections', async ({ page }) => {
    // 1. Open https://rahulshettyacademy.com/loginpagePractise/
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await expect(page).toHaveTitle(/LoginPage Practise/);
    await expect(page.getByLabel('Username:')).toBeVisible();
    await expect(page.getByLabel('Password:')).toBeVisible();
    await expect(page.getByRole('radio', { name: 'Admin' })).toBeVisible();
    await expect(page.getByRole('radio', { name: 'User' })).toBeVisible();
    await expect(page.getByRole('combobox')).toBeVisible();
    await expect(page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    await expect(page.getByRole('radio', { name: 'Admin' })).toBeChecked();
    await expect(page.getByRole('combobox').locator('option:checked')).toHaveText('Student');
    await expect(page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' })).not.toBeChecked();
  });
});
