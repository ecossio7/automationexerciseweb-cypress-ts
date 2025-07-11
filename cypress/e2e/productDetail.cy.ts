import { productDetailPage } from "../pages/ProductDetailPage";
import { getRandomWriteYourReview } from "../support/utils";

describe("Product detail test cases", () => {
  beforeEach(() => {
    cy.navigateProductDetailPage();
  });

  it("should display all info detail about selected product (Blue Top) correctly", () => {
    const blueTop = {
      name: "Blue Top",
      description: "Category: Women > ",
      price: "Rs. 500",
      quantity: 1,
      availability: "In Stock",
      condition: "New",
      brand: "Polo",
    };
    productDetailPage.verifyAllElementsAreVisibleInPage(blueTop);
  });

  it("should sumit a review info detail about selected product correctly", () => {
    const userOpinion = getRandomWriteYourReview();
    productDetailPage.summitReview(userOpinion);
    productDetailPage.verifySuccessMessageIsVisble("Thank you for your review.");
  });
});
