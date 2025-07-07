class ContactUsPage {
  private contactUsLbl = () => cy.contains("Contact Us");
  private nameTxt = () => cy.get("[data-qa='name']");
  private emailTxt = () => cy.get("[data-qa='email']");
  private subjectTxt = () => cy.get("[data-qa='subject']");
  private messageTxt = () => cy.get("[data-qa='message']");
  private submitBtn = () => cy.get("[data-qa='submit-button']");
  private successLbl = () => cy.get(".status");

  public verifyContactUsPageIsVisible(): void {
    this.contactUsLbl().should("be.visible");
    this.nameTxt().should("be.visible");
    this.emailTxt().should("be.visible");
    this.subjectTxt().should("be.visible");
    this.messageTxt().should("be.visible");
    this.submitBtn().should("be.visible").and("be.enabled");
  }

  public verifySuccessMessageIsVisible() {
    this.successLbl().should("be.visible").and("have.text", "Success! Your details have been submitted successfully.");
  }

  public fillForm(name: string, email: string, subject: string, message: string): void {
    this.nameTxt().type(name);
    this.emailTxt().type(email);
    this.subjectTxt().type(subject);
    this.messageTxt().type(message);

    this.submitBtn().click();
  }
}

export const contactUsPage = new ContactUsPage();
