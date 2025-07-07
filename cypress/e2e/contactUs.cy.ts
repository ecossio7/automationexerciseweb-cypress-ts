import { contactUsPage } from "../pages/ContactUsPage";
import { header } from "../pages/Header";
import { faker } from "@faker-js/faker";

describe("Contact us test cases", () => {
  beforeEach(() => {
    cy.login();
    header.navigateContactUsPage();
  });

  it("should show title, inputs, buttons in 'Contact us' page", () => {
    contactUsPage.verifyContactUsPageIsVisible();
  });

  it("should display success message after form submission", () => {
    contactUsPage.fillForm(faker.person.firstName(), faker.internet.email(), faker.lorem.lines(1), faker.lorem.sentence());
    contactUsPage.verifySuccessMessageIsVisible();
  });
});
