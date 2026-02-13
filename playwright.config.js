const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'https://your-app-url.com',
    headless: true,
    screenshot: 'only-on-failure',
    video:'retain-on-failure',
  },
  retries: 1,
});