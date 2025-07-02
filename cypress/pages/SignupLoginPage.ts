class SignupLoginPage {
  private newUserSignupLbl = () => cy.get(".signup-form h2");
  private loginLbl = () => cy.get(".login-form h2");
  private emailTxt = () => cy.get("[data-qa='login-email']");
  private passwordTxt = () => cy.get("[data-qa='login-password']");
  private loginBtn = () => cy.get("[data-qa='login-button']");
  private nameTxt = () => cy.get("[data-qa='signup-name']");
  private emailAddressTxt = () => cy.get("[data-qa='signup-email']");
  private signupBtn = () => cy.get("[data-qa='signup-button']");

  public fillLoginForm(loginEmail: string, loginPassword: string): void {
    this.emailTxt().type(loginEmail);
    this.passwordTxt().type(loginPassword);
    this.loginBtn().click();
  }

  public fillSignupForm(name: string, emailAddress: string): void {
    this.nameTxt().type(name);
    this.emailAddressTxt().type(emailAddress);
    this.signupBtn().click();
  }

  public verifySignupLoginPageIsVisible(): void {
    this.loginLbl().should("have.text", "Login to your account");
    this.newUserSignupLbl().should("have.text", "New User Signup!");
  }
}

export const signupLoginPage = new SignupLoginPage();
