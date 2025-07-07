import { faker } from "@faker-js/faker";
import { accountCreatedPage } from "../pages/AccountCreatedPage";
import { deleteAccountPage } from "../pages/DeleteAccountPage";
import { header } from "../pages/Header";
import { userAccountPage } from "../pages/UserAccountPage";

describe("User account test cases", () => {
  beforeEach(() => {
    cy.newUserSignup(faker.person.firstName(), faker.internet.email());
  });

  it("should complete registration process for a new user account.", () => {
    const status = faker.helpers.arrayElement(["Mr.", "Mrs."]);
    const password = faker.internet.password();
    const day = faker.number.int({ min: 1, max: 28 }).toString();
    const month = faker.number.int({ min: 1, max: 12 }).toString();
    const year = faker.number.int({ min: 1900, max: 2023 }).toString();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const address = faker.location.streetAddress();
    const country = faker.helpers.arrayElement(["India", "Canada", "United States", "Australia"]);
    const city = faker.location.city();
    const state = faker.location.state();
    const zipCode = faker.location.zipCode();
    const phone = faker.phone.number();

    userAccountPage.fillAccountInfo(status, password, day, month, year);
    userAccountPage.fillAddressInfo(firstName, lastName, address, country, state, city, zipCode, phone);
    userAccountPage.clickCreateAccount();
    accountCreatedPage.verifyNewUserAccountIsCreated();
    accountCreatedPage.clickContinue();
  });

  afterEach(() => {
    header.navigateDeleteAccountPage();
    deleteAccountPage.clickDelete();
  });
});
