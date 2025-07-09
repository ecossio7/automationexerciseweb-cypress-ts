import { accountCreatedPage } from "../pages/AccountCreatedPage";
import { deleteAccountPage } from "../pages/DeleteAccountPage";
import { header } from "../pages/Header";
import { userAccountPage } from "../pages/UserAccountPage";
import { getRandomUser } from "../support/utils";

describe("User account test cases", () => {
  var newUser: any;
  beforeEach(() => {
    newUser = getRandomUser();
    cy.newUserSignup(newUser);
  });

  it("should complete registration process for a new user account.", () => {
    userAccountPage.fillAccountInfo(newUser.accountInfo);
    userAccountPage.fillAddressInfo(newUser.addressInfo);
    userAccountPage.clickCreateAccount();
    accountCreatedPage.verifyNewUserAccountIsCreated();
    accountCreatedPage.clickContinue();
  });

  afterEach(() => {
    header.navigateDeleteAccountPage();
    deleteAccountPage.clickDelete();
  });
});
