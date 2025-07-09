class Carousel {
  private titleLbl = () => cy.contains("AutomationExercise");
  private subTitleLbl = () => cy.contains("Full-Fledged practice website");
  private descriptionLbl = () => cy.contains("This is for everybody to help");

  public verifyCarouselIsVisibleInHomePage(): void {
    this.titleLbl().should("be.visible");
    this.subTitleLbl().should("be.visible");
    this.descriptionLbl().should("be.visible");
  }
}

export const carousel = new Carousel();
