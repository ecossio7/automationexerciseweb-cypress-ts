import { productDetailPage } from "../pages/ProductDetailPage";
import { getExpectedProductDetail, getRandomUser, getRandomWriteYourReview } from "../support/utils";

describe("Product detail test cases", () => {
  beforeEach(() => {
    cy.navigateProductDetailPage();
  });

  it.only("should display all info detail about selected product (Blue Top) correctly", () => {
    const blueTop = getExpectedProductDetail();
    productDetailPage.verifyAllElementsAreVisibleInPage(blueTop);
  });

  it("should sumit a review info detail about selected product correctly", () => {
    const userOpinion = getRandomWriteYourReview();
    productDetailPage.summitReview(userOpinion);
    productDetailPage.verifySuccessMessageIsVisble("Thank you for your review.");
  });
});
