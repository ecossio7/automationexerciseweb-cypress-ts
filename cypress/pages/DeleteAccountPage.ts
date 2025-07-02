class DeleteAccountPage {
  private accountDeletedLb = () => cy.get("[data-qa='account-deleted']").find("b");
  private deletedConfirmationLbl = () => cy.contains("permanently deleted!");
  private continueBtn = () => cy.get('[data-qa="continue-button"]');

  public clickContinue(): void {
    this.continueBtn().click();
  }

  public verifyDeleteAccountPageIsVisible(): void {
    this.accountDeletedLb().should("have.text", "Account Deleted!");
    this.deletedConfirmationLbl().should("be.visible");
  }
}

export const deleteAccountPage = new DeleteAccountPage();
