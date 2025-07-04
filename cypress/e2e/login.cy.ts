import { header } from "../pages/Header";
import { loginPage } from "../pages/LoginPage";

describe("Login and New User Signup test cases", () => {
  beforeEach(() => {
    header.navigateLoginPage();
  });

  //ej:1
  it("should be visible the 'Signup and Login' forms.", () => {
    loginPage.verifySignupAndLoginFormsAreVisible();
  });
});
