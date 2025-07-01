class LoginPage {
  private loginLbl = () => cy.get(".login-form h2");

  public verifyLoginPageIsVisible(): void {
    this.loginLbl().should("have.text", "Login to your account");
  }
}

export const loginPage = new LoginPage();
