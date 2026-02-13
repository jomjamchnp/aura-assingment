export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#emailLoginPage');
    this.passwordInput = page.locator('#passwordLoginPage');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}