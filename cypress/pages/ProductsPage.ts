class ProductsPage {
  private saleImg = () => cy.get("#sale_image");
  private categoryLbl = () => cy.contains("Category");
  private allProductsLbl = () => cy.contains("All Products");

  public verifyProductsPageIsVisible(): void {
    this.saleImg().should("be.visible");
    this.categoryLbl().should("be.visible");
    this.allProductsLbl().should("be.visible");
  }
}

export const productsPage = new ProductsPage();
