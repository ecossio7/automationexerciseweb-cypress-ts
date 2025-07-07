import { header } from "../pages/Header";

describe("Header test cases", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should show 'Logout and Delete Account' buttons after successful login", () => {
    header.verifyLogoutBtnIsVisible();
    header.verifyDeleteAccountBtnIsVisible();
  });
});
