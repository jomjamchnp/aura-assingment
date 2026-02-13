export class Register {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#emailLoginPage');
    this.passwordInput = page.locator('#passwordLoginPage');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }
}

