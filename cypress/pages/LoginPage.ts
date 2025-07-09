class LoginPage {
  private newUserSignupLbl = () => cy.get(".signup-form h2");
  private loginLbl = () => cy.get(".login-form h2");
  private emailTxt = () => cy.get("[data-qa='login-email']");
  private passwordTxt = () => cy.get("[data-qa='login-password']");
  private loginBtn = () => cy.get("[data-qa='login-button']");
  private nameTxt = () => cy.get("[data-qa='signup-name']");
  private emailAddressTxt = () => cy.get("[data-qa='signup-email']");
  private signupBtn = () => cy.get("[data-qa='signup-button']");

  public fillLoginForm(email: string, password: string): void {
    this.emailTxt().type(email);
    this.passwordTxt().type(password);
    this.loginBtn().click();
  }

  public fillSignupForm(name: string, emailAddress: string): void {
    this.nameTxt().type(name);
    this.emailAddressTxt().type(emailAddress);
    this.signupBtn().click();
  }

  public verifySignupFormIsVisible(): void {
    this.newUserSignupLbl().should("be.visible").and("have.text", "New User Signup!");
    this.nameTxt().should("be.visible").and("be.enabled");
    this.emailTxt().should("be.visible").and("be.enabled");
    this.signupBtn().should("be.visible");
  }

  public verifyLoginFormIsVisible(): void {
    this.loginLbl().should("be.visible").and("have.text", "Login to your account");
    this.emailAddressTxt().should("be.visible").and("be.enabled");
    this.passwordTxt().should("be.visible").and("be.enabled");
    this.loginBtn().should("be.visible");
  }
}

export const loginPage = new LoginPage();
