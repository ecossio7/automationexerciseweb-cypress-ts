import { accountCreatedPage } from "../pages/AccountCreatedPage";
import { userAccountPage } from "../pages/UserAccountPage";
import { NewUser } from "../support/types";
import { getRandomUser } from "../support/utils";

describe("User account test cases", () => {
  let newUser: NewUser;
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
    cy.deleteUserAccountByAPI(newUser.email, newUser.accountInfo.password);
  });
});
