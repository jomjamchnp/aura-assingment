import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(
    process.env.USER_EMAIL,
    process.env.USER_PASSWORD
  );

  await expect(page).toHaveURL(/products/);
});