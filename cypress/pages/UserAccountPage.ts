import { AccountInfo, AddressInfo } from "../support/types";

class UserAccountPage {
  private enterAccountInfoTitle = () => cy.contains("Enter Account Information");
  private titleRdo = (type: string) => cy.contains(`${type}`);
  private passwordTxt = () => cy.get("[data-qa='password']");
  private dayDdl = () => cy.get("[data-qa='days']");
  private monthDdl = () => cy.get("[data-qa='months']");
  private yearDdl = () => cy.get("[data-qa='years']");
  private newsLetterLbl = () => cy.contains("Sign up for our newsletter!");
  private partnersLbl = () => cy.contains("Receive special offers from our partners!");
  private firstNameTxt = () => cy.get('[data-qa="first_name"]');
  private lastNameTxt = () => cy.get('[data-qa="last_name"]');
  private addressTxt = () => cy.get('[data-qa="address"]');
  private countryDdl = () => cy.get('[data-qa="country"]');
  private stateTxt = () => cy.get('[data-qa="state"]');
  private cityTxt = () => cy.get('[data-qa="city"]');
  private zipCodeTxt = () => cy.get('[data-qa="zipcode"]');
  private mobileNumberTxt = () => cy.get('[data-qa="mobile_number"]');
  private createAcountBtn = () => cy.get('[data-qa="create-account"]');

  public verifySignupPageIsVisible(): void {
    this.enterAccountInfoTitle().should("be.visible");
  }

  public fillAccountInfo(accountInfo: AccountInfo): void {
    this.titleRdo(accountInfo.status).click();
    this.passwordTxt().type(accountInfo.password);
    this.dayDdl().select(accountInfo.day);
    this.monthDdl().select(accountInfo.month);
    this.yearDdl().select(accountInfo.year);
    this.newsLetterLbl().click();
    this.partnersLbl().click();
  }

  public fillAddressInfo(addressInfo: AddressInfo): void {
    this.firstNameTxt().type(addressInfo.firstName);
    this.lastNameTxt().type(addressInfo.lastName);
    this.addressTxt().type(addressInfo.address);
    this.countryDdl().select(addressInfo.country);
    this.stateTxt().type(addressInfo.state);
    this.cityTxt().type(addressInfo.city);
    this.zipCodeTxt().type(addressInfo.zipCode);
    this.mobileNumberTxt().type(addressInfo.mobilePhone);
  }

  public clickCreateAccount(): void {
    this.createAcountBtn().click();
  }
}

export const userAccountPage = new UserAccountPage();
