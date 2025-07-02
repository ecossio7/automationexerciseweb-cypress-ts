/// <reference types="cypress" />

import { header } from "../pages/Header";
import { signupLoginPage } from "../pages/SignupLoginPage";
import { UserCredential } from "./types";

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

Cypress.Commands.add("login", () => {
  cy.fixture("userCredentials").then((credential: UserCredential) => {
    header.goSignupLoginPage();
    signupLoginPage.fillLoginForm(credential.email, credential.password);
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
    }
  }
}
