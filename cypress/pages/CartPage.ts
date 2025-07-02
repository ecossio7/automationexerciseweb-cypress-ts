class CartPage {
  private hereLnk = () => cy.contains("here");
  private cartIsEmptyLbl = () => cy.contains("Cart is empty!");

  public verifyCartEmptyIsVisible(): void {
    this.cartIsEmptyLbl().should("be.visible");
  }

  public backProductsPage(): void {
    this.hereLnk().click();
  }
}

export const cartPage = new CartPage();
