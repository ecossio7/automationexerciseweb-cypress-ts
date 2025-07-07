class CartPage {
  private hereLnk = () => cy.contains("here");
  private cartIsEmptyLbl = () => cy.contains("Cart is empty!");
  private selectedProduct = (name: string) => cy.contains(`${name}`);
  private shoppingCart = () => cy.get(".cart_quantity_delete");

  public verifyCartEmptyIsVisible(): void {
    this.cartIsEmptyLbl().should("be.visible");
  }

  public backProductsPage(): void {
    this.hereLnk().click();
  }

  public verifySelectedProductsAreVisible(selectedProductNames: string[]): void {
    selectedProductNames.forEach((name) => {
      this.selectedProduct(name).should("be.visible");
    });
    this.unselectedProducts();
  }
  private unselectedProducts(): void {
    this.shoppingCart().each(($product) => {
      cy.wrap($product).click();
    });
  }
}

export const cartPage = new CartPage();
