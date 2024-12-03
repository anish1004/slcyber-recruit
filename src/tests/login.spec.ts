import { expect, test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import logger from "../utils/LoggerUtil";
import HomePage from "../pages/homePage";


test.describe('Learn Automation Courses: Login', () => {

  test("simple login test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillEmail("patelanish1911@gmail.com");
    await loginPage.fillPassword("Test@1234");
    await loginPage.clickLoginButton();
    const homePage = new HomePage(page);
    await homePage.expectwelcomeMsgToBeVisible();
    logger.info("Test for login is completed");
  });
  
});