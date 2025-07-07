import { header } from "../pages/Header";
import { loginPage } from "../pages/LoginPage";

describe("Login and New User Signup test cases", () => {
  beforeEach(() => {
    header.navigateLoginPage();
  });

  it("should be visible the 'Signup and Login' forms.", () => {
    loginPage.verifyLoginFormIsVisible();
    loginPage.verifySignupFormIsVisible();
  });
});
