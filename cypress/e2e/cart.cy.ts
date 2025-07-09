import { productsPage } from "../pages/ProductsPage";
import { cartPage } from "../pages/CartPage";

describe("Shopping cart test cases", () => {
  beforeEach(() => {
    cy.navigateCartPage();
  });

  it("should redirect from empty cart to the Products page", () => {
    cartPage.verifyCartEmptyIsVisible();
    cartPage.backProductsPage();
    productsPage.verifyProductsPageIsVisible();
  });
});
