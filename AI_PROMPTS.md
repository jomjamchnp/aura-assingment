## AI Prompts Used During Assignment

Below are examples of how AI prompts were structured and used to assist
during this assignment. AI was used to accelerate implementation,
while all architectural and testing decisions were made by the engineer.

---

### Prompt Example 1 – Generate Add-to-Cart Test (Structured Prompt)

**Objective**  
Generate a Playwright test to validate the Add-to-Cart functionality
in an e-commerce application, including separation of locators using
the Page Object pattern.

**Context**
- Framework: Playwright (JavaScript)
- Architecture: Page Object Model
- Environment: Hosted demo site
- Focus: Test stability and maintainability
- Constraint: Avoid brittle selectors

**Requirements**
- Separate test file and page object file
- Use robust locators (avoid `nth-child` and fragile CSS selectors)
- Include assertions for:
  - Product is added successfully
  - Cart counter is updated
  - Correct product name and price appear in the cart

**Edge Cases to Consider**
- Multiple clicks on the Add-to-Cart button
- Page refresh after adding an item
- Quantity increments correctly when adding the same item multiple times

**Expected Output**
- `ProductPage.js` (Page Object)
- `product.spec.js` (Test file)

**Response Format**
- Structured bullet points

### Prompt Example 2 – Production-Ready Docker Setup for Playwright

Teach me how to design a production-ready Docker setup
for a Playwright (JavaScript) test automation project.

**Include**
- Usage of the official Playwright Docker image
- Multi-stage build considerations (if applicable)
- Best practices for managing environment variables
- Volume mounting vs. copy strategies
- CI/CD compatibility
- Strategies for handling flaky tests in hosted SUT environments

**Output Requirements**
- Provide explanation first
- Follow with a concrete implementation example

## AI Suggestions That Were Rejected

- Full Page Object Model implementation for all pages  
- End-to-end tests covering all user journeys  
- Complex Docker multi-stage optimizations  
  **Reason:** Unnecessary complexity for the assignment scope

---

## Validation of Correctness
- Tests were executed locally using Docker and Docker Compose
- Playwright artifacts (screenshots and videos) were reviewed on failures
