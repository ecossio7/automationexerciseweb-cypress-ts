import { header } from "../pages/Header";
import { signupLoginPage } from "../pages/SignupLoginPage";

describe("Login test cases", () => {
  beforeEach(() => {});

  //ej:1
  it("should be visible the 'Signup/Login' form.", () => {
    header.goSignupLoginPage();
    signupLoginPage.verifySignupLoginPageIsVisible();
  });

  //ej:3
  it("should successfully login and show Logout and Delete Account buttons.", () => {
    cy.login();
    header.verifyLogoutBtnIsVisible();
    header.verifyDeleteAccountBtnIsVisible();
  });
});
