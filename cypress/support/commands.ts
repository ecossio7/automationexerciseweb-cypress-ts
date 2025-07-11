/// <reference types="cypress" />

import { deleteAccountPage } from "../pages/DeleteAccountPage";
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

/***
 * Deletes an user account via the AutomationExercise API.
 *
 * Note:
 * The API documentation states it should return status code 200 and the message: "Account deleted!".
 *
 * However, it only returns status code 200, while the actual message indicates an error.
 * It seems the deletion  is  only  simulated  by the website for demonstration purposes and does not
 * perform a real delete.
 */
Cypress.Commands.add("deleteUserAccountByAPI", (email: string, password: string) => {
  cy.request({
    method: "DELETE",
    url: "https://automationexercise.com/api/deleteAccount",
    form: true,
    body: {
      email,
      password,
    },
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
    //expect(response.body.message).to.eq("Account deleted!");
  });
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
      deleteUserAccountByAPI(email: string, password: string): Chainable<void>;
    }
  }
}
