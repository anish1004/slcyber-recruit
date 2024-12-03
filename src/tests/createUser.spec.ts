import { expect, test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import logger from "../utils/LoggerUtil";
import CreateUser from "../pages/createUser";


test.describe('Learn Automation Courses: Create User', () => {

  test("Click Signup Link", async ({ page }) => {
    const createUser = new CreateUser(page);
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await createUser.clickSignupLink();
    await createUser.expectSubmitBtnToBeDisabled();
    logger.info("Test for Click Signup Link is completed");
  });

  test("Enter New User Details", async ({ page }) => {
    const createUser = new CreateUser(page);
    const loginPage = new LoginPage(page);
    await createUser.fillName("Test");
    await loginPage.fillEmail("Test@test.com");
    await loginPage.fillPassword("Test@12345");
    await createUser.selectCheckBox();
    await createUser.selectRadioButton();
    await createUser.selectDropdown();
    await createUser.selectMultiDropdown()
    await createUser.clickSubmitButton()
    logger.info("Test for Enter New User Deails is completed");
  });
})