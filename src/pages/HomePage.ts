import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default class HomePage {

  constructor(private page: Page) { }
  private readonly welcomeMsg = ".welcomeMessage";
  

  async expectwelcomeMsgToBeVisible() {
    await expect(this.page.locator(this.welcomeMsg)).toBeVisible({
      timeout: 15000,
    }).catch((error) => {
      logger.error(`Error clicking login button: ${error}`);
      throw error; // rethrow the error if needed
    }).then(() => logger.info("Welcome Message is visible"));
  }

}