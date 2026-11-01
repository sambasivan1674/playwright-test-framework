import { test, expect } from 'playwright/test';

test.describe('Login page basic operations', () => {
  test('should sign in with the displayed demo credentials', async ({ page }) => {
    // 1. Enter the demo username and password shown on the page, keep Admin and Student selected, check the terms checkbox, and click Sign In
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.getByLabel('Username:').fill('rahulshettyacademy');
    await page.getByLabel('Password:').fill('Learning@830$3mK2');
    await expect(page.getByRole('radio', { name: 'Admin' })).toBeChecked();
    await expect(page.getByRole('combobox').locator('option:checked')).toHaveText('Student');
    await page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' }).check();
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');
    await expect(page).toHaveTitle('ProtoCommerce');
  });
});
