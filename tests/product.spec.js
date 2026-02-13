import { test, expect } from '@playwright/test';
import { ProductPage } from './pages/product.page'; 

test('User can search and add item to cart', async ({ page }) => {
    const productPage = new ProductPage(page)
    const { name, price } = await productPage.getProductDetails();
    await expect(productPage.productHeader).toBeVisible();
    await productsPage.goto();
    await productsPage.search('Laptop');
    await productPage.addToCart();

});