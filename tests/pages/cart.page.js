import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart-item');
  }

  async goto() {
    await this.page.goto('/cart');
  }

  async assertItem(expectedName, expectedPrice) {
    const item = this.cartItems.first();

    await expect(item).toBeVisible();
    await expect(item).toContainText(expectedName);
    await expect(item).toContainText(expectedPrice);
  }
}
