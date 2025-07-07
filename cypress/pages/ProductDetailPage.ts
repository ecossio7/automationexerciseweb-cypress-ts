class ProductDetailPage {
  private titleLbl = () => cy.get(".product-information").find("h2");
  private productInfo = () => cy.get(".product-information > p");
  private priceLbl = () => cy.get(".product-information span").first();
  private starsLbl = () => cy.get('[src*="rating.png"]');
  private quantityLbl = () => cy.get("#quantity");
  private addToCartBtn = () => cy.contains("Add to cart");
  private writeYourReviewLbl = () => cy.get("[data-toggle='tab']");
  private emailTxt = () => cy.get("#email");
  private nameTxt = () => cy.get("#name");
  private addReviewTxt = () => cy.get("#review");
  private submitBtn = () => cy.get("#button-review");
  private alertSuccessMsg = () => cy.get(".alert-success");

  public verifyAllElementsAreVisibleInPage(
    title: string,
    description: string,
    price: string,
    quantity: string,
    availability: string,
    condition: string,
    brand: string
  ): void {
    this.titleLbl().should("have.text", title);
    this.productInfo().eq(0).should("contain.text", description);
    this.productInfo().eq(1).should("contain.text", availability);
    this.productInfo().eq(2).should("contain.text", condition);
    this.productInfo().eq(3).should("contain.text", brand);
    this.starsLbl().should("be.visible");
    this.priceLbl().should("contain.text", price);
    this.quantityLbl().invoke("val").should("eq", quantity);
    this.addToCartBtn().should("be.enabled");
    this.writeYourReviewLbl().should("have.text", "Write Your Review");
    this.emailTxt().should("be.visible").and("be.enabled");
    this.nameTxt().should("be.visible").and("be.enabled");
    this.addReviewTxt().should("be.visible").and("be.enabled");
    this.submitBtn().should("be.enabled");
  }

  public summitReview(name: string, email: string, review: string): void {
    this.nameTxt().type(name);
    this.emailTxt().type(email);
    this.addReviewTxt().type(review);
    this.submitBtn().click();
  }

  public verifySuccessMessageIsVisble(message: string): void {
    this.alertSuccessMsg().should("be.visible").and("contain.text", message);
  }
}

export const productDetailPage = new ProductDetailPage();
