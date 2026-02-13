export class ProductPage {
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator('h1');
    this.productPrice = page.locator('.price');
    this.addToCartButton = page.getByRole('button', { name: /add to cart/i });
  }

  async getProductDetails() {
    const name = await this.productTitle.innerText();
    const price = await this.productPrice.innerText();
    return { name, price };
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
