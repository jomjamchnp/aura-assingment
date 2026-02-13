## AI Prompt Used During Assignment

Below is an example of how I structured AI prompts to assist in this assignment.

---

### Prompt Example 1 – Generate Add to Cart Test (Structured Prompt)

Objective:
Generate a Playwright test for validating Add to Cart functionality in an e-commerce application and store a file of locator in page object.
Context:
- Framework: Playwright with JavaScript
- Architecture: Page Object Model
- Environment: Hosted demo site
- Focus: Stability and maintainability
- Avoid brittle selectors
Requirements:
- Separate test file and page object
- Use robust locators (avoid nth-child and fragile CSS)
- Include assertion for:
  - Product added successfully
  - Cart counter updated
  - Correct product name and price in cart
Edge Cases to Consider:
- Multiple clicks on Add to Cart
- Page refresh after adding item
- Ensure quantity increments correctly
Output Format:
- ProductPage.js (Page Object)
- product.spec.js (Test file)
Answer in structured bullet points.

###Teach me how to design a production-ready Docker setup 
for a Playwright (JavaScript) test automation project.

Include:
- Official Playwright Docker image usage
- Multi-stage build consideration (if needed)
- Best practices for environment variables
- Volume mounting vs copy strategy
- CI/CD compatibility
- Handling flaky tests in hosted SUT environments

Provide explanation first, then implementation.