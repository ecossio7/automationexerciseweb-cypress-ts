import { faker } from "@faker-js/faker";
import { header } from "../pages/Header";
import { productDetailPage } from "../pages/ProductDetailPage";
import { productsPage } from "../pages/ProductsPage";

describe("Product detail test cases", () => {
  beforeEach(() => {
    cy.login();
    header.navigateProductsPage();
    productsPage.selectFirstProduct();
  });

  it("should display all info detail about selected product correctly", () => {
    const expectedTitle = "Blue Top";
    const exppectedDescription = "Category: Women > ";
    const expectedPrice = "Rs. 500";
    const expectedQuantity = "1";
    const expectedAvailability = "In Stock";
    const expectedCondition = "New";
    const expectedBrand = "Polo";

    productDetailPage.verifyAllElementsAreVisibleInPage(
      expectedTitle,
      exppectedDescription,
      expectedPrice,
      expectedQuantity,
      expectedAvailability,
      expectedCondition,
      expectedBrand
    );
  });

  it("should sumit a review info detail about selected product correctly", () => {
    const name = faker.person.firstName();
    const email = faker.internet.email();
    const review = faker.lorem.sentence();
    productDetailPage.summitReview(name, email, review);
    productDetailPage.verifySuccessMessageIsVisble("Thank you for your review.");
  });
});
