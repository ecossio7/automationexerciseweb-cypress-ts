class DeleteAccountPage {
  private continueBtn = () => cy.get('[data-qa="continue-button"]');

  public clickDelete(): void {
    this.continueBtn().click();
  }
}

export const deleteAccountPage = new DeleteAccountPage();
