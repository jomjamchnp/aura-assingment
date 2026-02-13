export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: /search/i });
    this.productCards = page.locator('.product-card'); 
  }

  async goto() {
    await this.page.goto('/products');
  }

  async search(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');
  }

  async openFirstProduct() {
    const firstProduct = this.productCards.first();
    const productName = await firstProduct.locator('.product-name').innerText(); 
    await firstProduct.click();
    return productName;
  }
}
