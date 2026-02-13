import { test, expect } from '@playwright/test';
import { ProductsPage } from './pages/products.page'
import { CartPage } from './pages/cart.page';
import { ProductPage } from './pages/product.page';

test('User can search product and add to cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await productsPage.goto();
  await productsPage.search('Iphone');

  await productsPage.openFirstProduct();

  const { name, price } = await productPage.getProductDetails();

  await productPage.addToCart();

  await cartPage.goto();
  await cartPage.assertItem(name, price);
});