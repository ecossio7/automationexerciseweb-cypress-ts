class ProductsPage {
  private saleImg = () => cy.get("#sale_image");
  private categoryLbl = () => cy.contains("Category");
  private allProductsLbl = () => cy.contains("All Products");
  private searchProductTxt = () => cy.get("[name='search']");
  private searchBtn = () => cy.get("[id='submit_search']");
  private addTocartBtn = () => cy.contains("Add to cart");
  private continueShoppingBtn = () => cy.contains("Continue Shopping");
  private brandsLbl = () => cy.contains("Brands");
  private productsList = (index: number) => cy.get(".product-image-wrapper").eq(index);

  public selectFirstProductOfList(): void {
    this.productsList(0).contains("View Product").click();
  }

  public selectProducts(seletedProductNames: string[]): void {
    seletedProductNames.forEach((name) => {
      this.selectProduct(name);
    });
  }

  public selectProduct(productName: string): void {
    this.searchProductTxt().type(productName);
    this.searchBtn().click();
    this.addTocartBtn().click();
    this.continueShoppingBtn().click();
    this.searchProductTxt().clear();
  }

  public verifyProductsPageIsVisible(): void {
    this.saleImg().should("be.visible");
    this.searchBtn().should("be.visible").and("be.enabled");
    this.categoryLbl().should("be.visible");
    this.brandsLbl().should("be.visible");
    this.allProductsLbl().should("be.visible");
  }

  public verifyPriceIsCorrect(index: number, expectedPrice: string): void {
    this.productsList(index).should("be.visible").and("contain.text", expectedPrice);
  }
}

export const productsPage = new ProductsPage();
