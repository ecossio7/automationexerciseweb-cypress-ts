import { header } from "../pages/Header";
import { loginPage } from "../pages/LoginPage";

describe("Login and New User Signup test cases", () => {
  beforeEach(() => {
    cy.login();
  });

  //ej:3
  it("should successfully login and show Logout and Delete Account buttons.", () => {
    header.verifyLogoutBtnIsVisible();
    header.verifyDeleteAccountBtnIsVisible();
  });
});
