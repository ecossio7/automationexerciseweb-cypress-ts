import { contactUsPage } from "../pages/ContactUsPage";
import { getRandomSupportMessage } from "../support/utils";

describe("Contact us test cases", () => {
  beforeEach(() => {
    cy.navigateContactUsPage();
  });

  it("should show title, inputs, buttons in 'Contact us' page", () => {
    contactUsPage.verifyContactUsPageIsVisible();
  });

  it("should display success message after form submission", () => {
    const supportMessage = getRandomSupportMessage();
    contactUsPage.fillForm(supportMessage);
    contactUsPage.verifySuccessMessageIsVisible();
  });
});
