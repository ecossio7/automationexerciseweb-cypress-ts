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

  public fillAccountInfo(type: string, password: string, day: string, month: string, year: string): void {
    this.titleRdo(type).click();
    this.passwordTxt().type(password);
    this.dayDdl().select(day);
    this.monthDdl().select(month);
    this.yearDdl().select(year);
    this.newsLetterLbl().click();
    this.partnersLbl().click();
  }

  public fillAddressInfo(
    firstName: string,
    lastName: string,
    address: string,
    country: string,
    state: string,
    city: string,
    zipCode: string,
    mobileNumber: string
  ): void {
    this.firstNameTxt().type(firstName);
    this.lastNameTxt().type(lastName);
    this.addressTxt().type(address);
    this.countryDdl().select(country);
    this.stateTxt().type(state);
    this.cityTxt().type(city);
    this.zipCodeTxt().type(zipCode);
    this.mobileNumberTxt().type(mobileNumber);
  }

  public clickCreateAccount(): void {
    this.createAcountBtn().click();
  }
}

export const userAccountPage = new UserAccountPage();
