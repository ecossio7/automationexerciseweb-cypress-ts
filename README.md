# Web Application Testing with Cypress and TypeScript

This project is an **end-to-end** testing framework built with **Cypress** and **TypeScript**, following the **Page Object Model** (POM) design pattern. It automates browser interactions to ensure the functionality and user experience of web applications are working as expected. The use of POM helps in making the test code more maintainable, reusable, and scalable, as each page’s elements and actions are encapsulated in separate page objects.

## Project Structure

The project structure is organized as follows:

```
AUTOMATIONEXERCISEWEB-CYPRESS-TS/
│
├── cypress/                   # Cypress test folder
│   ├── downloads/             # Files downloaded during tests
│   ├── e2e/                   # End-to-end test files
│   │   └── spec.cy.ts         # Example test written in TypeScript
│   ├── fixtures/              # Mock data for tests (e.g., JSON)
│   ├── support/               # Custom commands, test setup
│
├── node_modules/              # Installed dependencies
├── cypress.config.ts          # Cypress configuration file
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Lock file for dependencies
├── tsconfig.json              # TypeScript configuration file
```

## Installation

### Step 1: Clone the repository

```bash
git clone <repository-url>
```

### Step 2: Install dependencies

```bash
npm install
```
This will install **Cypress**, **TypeScript**, and other necessary dependencies defined in `package.json`.

## Configuration

This project uses **TypeScript** and **Cypress** together for end-to-end testing. The configuration files are:

- **`cypress.config.ts`**: The configuration for Cypress settings (e.g., base URLs, cypress project id, allure, browser settings, timeouts).
- **`tsconfig.json`**: The TypeScript configuration to ensure the proper compilation of TypeScript files in the project.

## Running the Tests

### Using npx

```bash
-Run all tests using browser by default Eletron:
$ npx cypress open

-Run all tests using Chrome:
$ npx cypress run -b <chrome>

-Run a test (Add only in test i.e. it.only(...);):
Define the spec for example below
$ npx cypress run -b chrome --spec "cypress/e2e/cart.cy.ts"

-Run all tests and display them in cypress dashboard (--record --key kevalue) for example:
$ npx cypress run -b chrome --record --key b9784bc1-fed5-477e-b4be-92fc90985f06

Note: Add headed parameter allows to see the browser execution, example:
$ npx cypress open --headed
```

### Using a script from package.json
For example "cy:run": "cypress run"

```bash
-Run all tests using browser by default Eletron:
$ npm run cy:run

-Run all tests using Chrome:
$ npm run cy:run -- -b <chrome>

-Run a test (Add only in test i.e. it.only(...);):
Example
$ npm run cy:run -- -b chrome --spec "cypress/e2e/cart.cy.ts"

-Run all tests and display them in cypress dashboard, for example:
$ npm run cy:run -- -b chrome --record --key b9784bc1-fed5-477e-b4be-92fc90985f06
```

## Writing Tests

Tests are located inside the `cypress/e2e/` folder. Each test file is written in **TypeScript** with the `.cy.ts` extension.

Example of a simple test (`firstExample.cy.ts`):

```typescript
describe("Set Tests", () => {
  it("Should visit the website and check title", () => {
    cy.visit("https://example.com");
    cy.title().should("include", "Example");
  });
});
```

## Custom Commands

You can add custom commands for reusable test functionality. Custom commands are located in the `cypress/support/` folder, where you can create new commands in `commands.ts` or configure the test setup.

Example of adding a custom login command (`commands.ts`):

```typescript
export{};
Cypress.Commands.add("login", (email: string, password: string) => {
    header.navigateLoginPage();
    loginPage.fillLoginForm();
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;   
    }
  }
```

## 📘 Documentation

- [Naming Conventions for Page Objects](./naming-conventions.md)
- [Cypress core concepts](https://docs.cypress.io/app/core-concepts/interacting-with-elements)
