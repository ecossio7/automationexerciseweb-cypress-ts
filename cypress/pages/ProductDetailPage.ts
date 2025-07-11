import { Product, WriteYourReview } from "../support/types";

class ProductDetailPage {
  private titleLbl = () => cy.get(".product-information > h2");
  private productInfo = (value: string) => cy.contains(value);
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

  public verifyAllElementsAreVisibleInPage(expectedProduct: Product): void {
    this.titleLbl().should("have.text", expectedProduct.name);
    this.productInfo(expectedProduct.description!).should("be.visible");
    this.productInfo(expectedProduct.availability!).should("be.visible");
    this.productInfo(expectedProduct.condition!).should("be.visible");
    this.productInfo(expectedProduct.brand!).should("be.visible");
    this.starsLbl().should("be.visible");
    this.priceLbl().should("contain.text", expectedProduct.price);
    this.quantityLbl().invoke("val").should("eq", expectedProduct.quantity?.toString());
    this.addToCartBtn().should("be.enabled");
    this.writeYourReviewLbl().should("have.text", "Write Your Review");
    this.emailTxt().should("be.visible").and("be.enabled");
    this.nameTxt().should("be.visible").and("be.enabled");
    this.addReviewTxt().should("be.visible").and("be.enabled");
    this.submitBtn().should("be.visible").and("be.enabled");
  }

  public summitReview(userOpinion: WriteYourReview): void {
    this.nameTxt().type(userOpinion.firstName);
    this.emailTxt().type(userOpinion.email);
    this.addReviewTxt().type(userOpinion.review);
    this.submitBtn().click();
  }

  public verifySuccessMessageIsVisble(message: string): void {
    this.alertSuccessMsg().should("be.visible").and("contain.text", message);
  }
}

export const productDetailPage = new ProductDetailPage();
