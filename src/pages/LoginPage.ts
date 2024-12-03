import { expect, Page } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default class LoginPage {
  private readonly emailInput = "#email1";
  private readonly passwordInput = "#password1";
  private readonly loginButton = "button[type='submit']";

  constructor(private page: Page) { }

  async navigateToLoginPage() {
    await this.page.goto("https://freelance-learn-automation.vercel.app/login");
    logger.info("Navigated to freelance-learn-automation.vercel.app/login");
  }

  async fillEmail(email: string) {
    await this.page.locator(this.emailInput).fill(email);
    logger.info("Filled Email Id");
  }

  async fillPassword(password: string) {
    await this.page.locator(this.passwordInput).fill(password);
    logger.info("Filled pasword");
  }

  async clickLoginButton() {
    await this.page
      .locator(this.loginButton)
      .click()
      .catch((error) => {
        logger.error(`Error clicking login button: ${error}`);
        throw error; // rethrow the error if needed
      })
      .then(() => logger.info("Clicked login button"));

    // const homePage = new HomePage(this.page);
    // return homePage;
  }

  async Login(email: string, password: string) {
    await this.navigateToLoginPage();
    await this.fillEmail(email);
    await this.fillPassword(password);
    return await this.clickLoginButton();
  }
}