import { accountCreatedPage } from "../pages/AccountCreatedPage";
import { deleteAccountPage } from "../pages/DeleteAccountPage";
import { header } from "../pages/Header";
import { signupLoginPage } from "../pages/SignupLoginPage";
import { signupPage } from "../pages/SignupPage";

describe("Signup test cases", () => {
  beforeEach(() => {
    header.goSignupLoginPage();
  });

  //ej:2
  it("should successfully register and display the Account Created page", () => {
    signupLoginPage.fillSignupForm("john", "john25@blass.com");
    signupPage.fillEnterAccountInfo("Mr.", "pass-123", "15", "1", "2000");
    signupPage.fillAddressInformation(
      "john",
      "Dop",
      "1225 Hartzog Loop",
      "United States",
      "Los Angeles",
      "North Pole",
      "99705",
      "610-979-6915"
    );
    accountCreatedPage.verifyNewUserAccountIsCreated();
  });

  afterEach(() => {
    accountCreatedPage.clickContinue();
    header.goDeleteAccountPage();
    deleteAccountPage.verifyDeleteAccountPageIsVisible();
    deleteAccountPage.clickContinue();
  });
});
