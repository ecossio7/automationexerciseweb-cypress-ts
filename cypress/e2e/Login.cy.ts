import { header } from "../pages/Header";
import { loginPage } from "../pages/LoginPage";

describe("Header test cases", () => {
  beforeEach(() => {
    header.goLoginPage();
  });
  it("should be visible the Login form.", () => {
    loginPage.verifyLoginPageIsVisible();
  });
});
