import { cartPage } from "../pages/CartPage";
import { header } from "../pages/Header";
import { productsPage } from "../pages/ProductsPage";
import { productsData } from "../support/data";

describe("Products test cases", () => {
  beforeEach(() => {
    cy.navigateProductsPage();
  });

  it("should show Special Offer, search bar, categories, and product list in 'Products page'.", () => {
    productsPage.verifyProductsPageIsVisible();
  });

  productsData.forEach((product) => {
    it(`should display correct price (Rs. ${product.price}) for product: ${product.name}`, () => {
      productsPage.selectProduct(product.name);
      productsPage.verifyPriceIsCorrect(product.price);
    });
  });

  it("should show 3 selected products in 'Shopping cart'. ", () => {
    const productNames = ["Blue Top", "Winter Top", "Soft Stretch Jeans"];
    productsPage.selectProducts(productNames);
    header.navigateCartPage();
    cartPage.verifySelectedProductsAreVisible(productNames);
  });
});
