class AccountCreatedPage {
  private accountCreatedLb = () => cy.get("[data-qa='account-created']").find("b");
  private congratulationsLbl = () => cy.contains("Congratulations!");
  private continueBtn = () => cy.get('[data-qa="continue-button"]');

  public clickContinue(): void {
    this.continueBtn().click();
  }

  public verifyNewUserAccountIsCreated(): void {
    this.accountCreatedLb().should("have.text", "Account Created!");
    this.congratulationsLbl().should("be.visible");
  }
}

export const accountCreatedPage = new AccountCreatedPage();
