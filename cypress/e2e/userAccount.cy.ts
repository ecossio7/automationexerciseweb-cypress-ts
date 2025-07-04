import { accountCreatedPage } from "../pages/AccountCreatedPage";
import { deleteAccountPage } from "../pages/DeleteAccountPage";
import { header } from "../pages/Header";
import { userAccountPage } from "../pages/UserAccountPage";

describe("User account test cases", () => {
  beforeEach(() => {
    cy.newUserSignup("john", "john25@blass.com");
  });

  //ej:2
  it("should successfully register and display the Account Created page", () => {
    userAccountPage.fillAccountInfo("Mr.", "pass-123", "15", "1", "2000");
    userAccountPage.fillAddressInfo(
      "john",
      "Dop",
      "1225 Hartzog Loop",
      "United States",
      "Los Angeles",
      "North Pole",
      "99705",
      "610-979-6915"
    );
    userAccountPage.clickCreateAccount();
    accountCreatedPage.verifyNewUserAccountIsCreated();
    accountCreatedPage.clickContinue();
  });

  afterEach(() => {
    header.navigateDeleteAccountPage();
    deleteAccountPage.clickDelete();
  });
});
