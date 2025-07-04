class Header {
  private signupLoginBtn = () => cy.contains("Signup / Login");
  private logoutBtn = () => cy.contains("Logout");
  private deleteAccountBtn = () => cy.contains("Delete Account");
  private cartBtn = () => cy.contains("Cart");

  public navigateLoginPage(): void {
    this.signupLoginBtn().click();
  }

  public navigateDeleteAccountPage(): void {
    this.deleteAccountBtn().click();
  }

  public navigateCartPage(): void {
    this.cartBtn().click();
  }

  public verifyDeleteAccountBtnIsVisible() {
    this.deleteAccountBtn().should("be.visible");
  }

  public verifyLogoutBtnIsVisible() {
    this.logoutBtn().should("be.visible");
  }
}

export const header = new Header();
