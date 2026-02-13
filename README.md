## A1 – Automation Strategy (Brief)

For this system, I would adopt a hybrid automation strategy,
prioritizing API-level automation first, followed by a small set of
high-value UI end-to-end (E2E) tests that protect critical revenue flows.

---

### 1. API-Level First (Speed, Stability, Business Protection)

API tests are faster, more stable, and less brittle than UI tests.They provide strong coverage for high-risk business logic whilemaintaining fast feedback in CI/CD pipelines.

I would prioritize automating:

- Login / Register
- Product search
- Add to cart
- Payment processing

A key focus would be preventing double payment scenarios by validating API idempotency.

This includes testing:
- Repeated payment requests
- User double-click behavior
- Network retries
- Accidental resubmissions

The system must ensure:
- No duplicate transactions are created
- Financial records remain consistent
- Payment status remains accurate

By validating these scenarios at the API level,we protect revenue with minimal maintenance cost.

---

### 2. Targeted UI E2E for Critical Revenue Journeys

After stabilizing core APIs, I would automate a limited number of
business-critical UI flows:

- Register → Login → Browse Product → Add to Cart → Checkout → Payment → Confirmation

At the UI level, I would validate:

- Protection against double submission
- Multiple clicks on payment button
- Page refresh after submission
- Correct transaction status displayed to the user

UI automation should focus on validating user experience,not duplicating API coverage.

This ensures high confidence while keeping the test suite stable and maintainable.

## A2 – Critical Test Scenarios

The following scenarios are prioritized based on business impact,revenue protection, and system reliability.

---

### 1. Login (Happy Path)
- User logs in successfully
- Correct redirection occurs
- A valid session is established

**Why:** Authentication is the entry point to purchasing.
If login fails, revenue is immediately blocked.

---

### 2. Invalid Login (Negative Scenario)
- Incorrect credentials show proper error message
- No session is created

**Why:** Ensures proper access control and secure authentication handling.

---

### 3. Browse / Search Products
- User accesses `/products`
- Search returns relevant results
- Product list renders correctly

**Why:** Product discovery directly impacts conversion rate.

---

### 4. Open Product Detail
- User accesses `/product/:id`
- Product name, price, and details display correctly

**Why:** Incorrect product information reduces user trust
and may result in revenue loss.

---

### 5. Add to Cart (Purchase Intent)
- User adds product to cart
- Cart counter updates correctly
- Correct product and price appear in cart

**Why:** Cart activity represents strong purchase intent
and directly affects revenue.

---

### 6. Cart Persistence
- Cart state persists within the same session
- Items remain after page refresh

**Why:** Prevents loss of purchase intent and improves user experience.

---

### 7. Duplicate Add / Quantity Handling
- Multiple clicks on “Add to Cart” increment quantity correctly
- No duplicate or inconsistent cart entries are created

**Why:** Protects cart integrity and prevents incorrect orders.

## Section D — Leadership & Quality Judgment

### D1. What NOT to Automate

As a Lead QA, automation is not about automating everything.It is about automating the right things for maximum ROI,stability, and long-term maintainability.

---

### 1. Highly Dynamic UI (Frequent Design Changes)

Examples:
- Layout positioning
- Cosmetic styling changes
- Marketing banners

**Why not automate?**
These elements change frequently and are not business-critical.
Automating them increases maintenance cost and creates brittle tests.

**Better approach:**
- Manual exploratory testing
- Visual verification in STG/UAT
- Lightweight smoke checks

---

### 2. Third-Party System Behavior (Outside Our Control)

Examples:
- External payment gateway UI
- Bank redirection pages
- External identity providers

**Why not automate?**
These systems are outside our ownership and may change without notice.
UI automation on external pages often creates flaky tests.

Additionally, third-party services may introduce unpredictable latency or timeouts,
which can break E2E tests even when our system works correctly.

**Better approach:**
- Mock or stub integrations at API level
- Contract testing
- Validate timeout handling and fallback logic
- Monitor timeout rates and failure logs in production

## Tools Chosen and Why

I chose Playwright for automation testing because it provides:

- Strong stability
- Built-in auto-waiting mechanisms
- Excellent cross-browser support
- Modern and maintainable architecture

Playwright enables reliable end-to-end testing
with minimal flakiness compared to traditional UI automation tools.

Additionally, I currently use Playwright in my professional work,
which allows me to apply proven best practices,
design scalable test structures,
and deliver efficient, production-ready automation.


## How to Run Tests Locally (Docker / Docker Compose)

### Prerequisites
- Docker
- Docker Compose

### Steps

1. Clone the repository
   ```bash
   git clone https://github.com/jomjamchnp/aura-assingment.git
   cd aura-assignment
2.	Create environment file
3.	Run automated tests : docker-compose up --build

### How to view artifacts (screenshots/video) on failure
Playwright is configured to automatically capture debugging artifactswhen a test fails.

The following artifacts are generated:
- Screenshots (on failure)
- Videos (on failure)

All artifacts are stored in the `test-results/` directory.

Example configuration (playwright.config.ts):
- `screenshot: 'only-on-failure'`
- `video: 'retain-on-failure'`

To inspect a failure:
1. Navigate to the `test-results/` folder
2. Open the screenshot or video file associated with the failed test
3. Use these artifacts to quickly diagnose the root cause without re-running tests

## Environment Variables

Before running tests, make sure the following environment variables are defined
in a `.env` file (you can copy from `.env.example`):
BASE_URL=http://localhost:3000
USER_EMAIL=test@test.com
USER_PASSWORD=Password123!

## Example Output
Running 3 tests using 1 worker
✓ login.spec.js
✓ cart.spec.js
✓ product.spec.js
