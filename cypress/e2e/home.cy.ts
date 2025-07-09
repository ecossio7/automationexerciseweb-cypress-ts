import { carousel } from "../pages/Carousel";
import { header } from "../pages/Header";

describe("Home test cases", () => {
  beforeEach(() => {
    cy.navigateHomePage();
  });

  it("should show 'Home'page and 'Logout and Delete Account' buttons after successful login", () => {
    header.verifyLogoutBtnIsVisible();
    header.verifyDeleteAccountBtnIsVisible();
    carousel.verifyCarouselIsVisibleInHomePage();
  });
});
