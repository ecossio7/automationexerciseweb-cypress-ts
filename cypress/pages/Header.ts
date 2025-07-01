class Header {
  private loginBtn = () => cy.contains("Signup / Login");

  public goLoginPage(): void {
    this.loginBtn().click();
  }
}

export const header = new Header();
