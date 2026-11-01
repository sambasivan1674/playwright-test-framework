import { test, expect } from 'playwright/test';

test.describe('Login page basic operations', () => {
  test('should allow changing role, user type, and terms consent', async ({ page }) => {
    // 1. Select User, change the dropdown to Teacher and then Consultant, and toggle the terms checkbox
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userRadio = page.getByRole('radio', { name: 'User' });
    const adminRadio = page.getByRole('radio', { name: 'Admin' });
    const userType = page.getByRole('combobox');
    const terms = page.getByRole('checkbox', { name: 'I Agree to the terms and conditions' });

    await userRadio.check();
    await page.getByRole('button', { name: 'Okay' }).click();
    await expect(userRadio).toBeChecked();
    await expect(adminRadio).not.toBeChecked();

    await userType.selectOption({ label: 'Teacher' });
    await expect(userType.locator('option:checked')).toHaveText('Teacher');
    await userType.selectOption({ label: 'Consultant' });
    await expect(userType.locator('option:checked')).toHaveText('Consultant');

    await terms.check();
    await expect(terms).toBeChecked();
    await terms.uncheck();
    await expect(terms).not.toBeChecked();
  });
});
