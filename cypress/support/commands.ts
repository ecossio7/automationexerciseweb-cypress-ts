/// <reference types="cypress" />

import { header } from "../pages/Header";
import { loginPage } from "../pages/LoginPage";
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
  header.navigateLoginPage();
  loginPage.fillLoginForm();
});

Cypress.Commands.add("newUserSignup", (name: string, email: string) => {
  header.navigateLoginPage();
  loginPage.fillSignupForm(name, email);
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
      newUserSignup(name: string, email: string): Chainable<void>;
    }
  }
}
