class Header {
  private signupLoginBtn = () => cy.contains("Signup / Login");
  private logoutBtn = () => cy.contains("Logout");
  private deleteAccountBtn = () => cy.contains("Delete Account");
  private cartBtn = () => cy.contains("Cart");

  public goSignupLoginPage(): void {
    this.signupLoginBtn().click();
  }

  public goDeleteAccountPage(): void {
    this.deleteAccountBtn().click();
  }

  public goCartPage(): void {
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
