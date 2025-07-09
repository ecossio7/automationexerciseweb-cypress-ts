/// <reference types="cypress" />

import { header } from "../pages/Header";
import { loginPage } from "../pages/LoginPage";
import { productsPage } from "../pages/ProductsPage";
import { NewUser, TestUserCredential } from "./types";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

export {};

Cypress.Commands.add("navigateHomePage", () => {
  header.navigateLoginPage();
  cy.fixture("testUserCredential").then((userAccount: TestUserCredential) => {
    loginPage.fillLoginForm(userAccount.email, userAccount.password);
  });
});

Cypress.Commands.add("navigateProductDetailPage", () => {
  cy.navigateHomePage();
  header.navigateProductsPage();
  productsPage.selectFirstProductOfList();
});

Cypress.Commands.add("newUserSignup", (user: NewUser) => {
  header.navigateLoginPage();
  loginPage.fillSignupForm(user.name, user.email);
});

Cypress.Commands.add("navigateProductsPage", () => {
  cy.navigateHomePage();
  header.navigateProductsPage();
});

Cypress.Commands.add("navigateCartPage", () => {
  cy.navigateHomePage();
  header.navigateCartPage();
});

Cypress.Commands.add("navigateContactUsPage", () => {
  cy.navigateHomePage();
  header.navigateContactUsPage();
});

declare global {
  namespace Cypress {
    interface Chainable {
      navigateHomePage(): Chainable<void>;
      newUserSignup(user: NewUser): Chainable<void>;
      navigateProductDetailPage(): Chainable<void>;
      navigateProductsPage(): Chainable<void>;
      navigateCartPage(): Chainable<void>;
      navigateContactUsPage(): Chainable<void>;
    }
  }
}
