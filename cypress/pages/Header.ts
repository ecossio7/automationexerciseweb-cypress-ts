class Header {
  private signupLoginBtn = () => cy.contains("Signup / Login");
  private logoutBtn = () => cy.contains("Logout");
  private deleteAccountBtn = () => cy.contains("Delete Account");
  private cartBtn = () => cy.contains("Cart");
  private productsBtn = () => cy.contains("Products");
  private contactUsBtn = () => cy.contains("Contact us");
  private seletedHomePage = () => cy.get('a[href="/"]');

  public navigateLoginPage(): void {
    this.signupLoginBtn().click();
  }

  public navigateDeleteAccountPage(): void {
    this.deleteAccountBtn().click();
  }

  public navigateCartPage(): void {
    this.cartBtn().click();
  }

  public navigateProductsPage(): void {
    this.productsBtn().click();
  }

  public navigateContactUsPage(): void {
    this.contactUsBtn().click();
  }

  public verifyDeleteAccountBtnIsVisible() {
    this.deleteAccountBtn().should("be.visible");
  }

  public verifyLogoutBtnIsVisible() {
    this.logoutBtn().should("be.visible");
  }

  public verifyHomeBtnIsSelected(): void {
    this.seletedHomePage().should("have.attr", "style").and("include", "color:brown");
  }
}

export const header = new Header();
