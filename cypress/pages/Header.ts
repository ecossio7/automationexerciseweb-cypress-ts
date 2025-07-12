class Header {
  private signupLoginBtn = () => cy.contains("Signup / Login");
  private logoutBtn = () => cy.contains("Logout");
  private deleteAccountBtn = () => cy.contains("Delete Account");
  private cartBtn = () => cy.contains("Cart");
  private productsBtn = () => cy.contains("Products");
  private contactUsBtn = () => cy.contains("Contact us");

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

  public verifyDeleteAccountBtnIsVisible(): void {
    this.deleteAccountBtn().should("be.visible");
  }

  public verifyLogoutBtnIsVisible(): void {
    this.logoutBtn().should("be.visible");
  }
}

export const header = new Header();
