import { expect, Page } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default class CreateUser {
    private readonly signupLink = ".subLink";
    private readonly submitButton = ".submit-btn";
    private readonly nameInput = "#name";
    private readonly emailInput = "#email";
    private readonly passwordInput = "#password";
    private readonly cypressCheckbox = "xpath=//label[text()='Cypress']//preceding::input[1]";
    private readonly azureCheckbox = "xpath=//label[text()='Azure devops']//preceding::input[6]";
    private readonly selectState = "#state";
    private readonly selectHobbies = "#hobbies";
    private readonly selectGender = "xpath=//input[@value='Male']";
    
    constructor(private page: Page) { }

    async clickSignupLink(){
        await this.page
        .locator(this.signupLink)
        .click()
        .catch((error) => {
            logger.error(`Error clicking signup link: ${error}`);
            throw error; // rethrow the error if needed
          })
          .then(() => logger.info("Clicked Signup link"));
    }

    async expectSubmitBtnToBeDisabled(){
        await expect(this.page.locator(this.submitButton)).toBeDisabled()
        .catch((error) => {
          logger.error(`Signup button is enabled: ${error}`);
          throw error; // rethrow the error if needed
        }).then(() => logger.info("Signup Button is disabled"));
      }

      async fillName(name: string){
        await this.page.locator(this.nameInput).fill(name);
        logger.info("Filled Name");
      }

      async selectCheckBox(){
        await this.page.locator(this.cypressCheckbox).click();
        await expect(this.page.locator(this.cypressCheckbox)).toBeChecked();
        logger.info("Cypress Selected");
        await this.page.locator(this.azureCheckbox).click();
        await expect(this.page.locator(this.azureCheckbox)).toBeChecked();
        logger.info("Azure DevOps Selected");
      }

      async selectDropdown(){
        await this.page.selectOption(this.selectState, {
            value: "Gujarat"
        })
        logger.info("Gujarat is Selected from Single Dropdown");
      }

      async selectMultiDropdown(){
        await this.page.selectOption(this.selectHobbies, [
            {value: "Reading"},
            {value: "Swimming"}
        ])
        logger.info("Reading and Swimming Hobbies are Selected from Multi Dropdown");
      }

      async selectRadioButton(){
        await this.page.locator(this.selectGender).click();
        await expect(this.page.locator(this.selectGender)).toBeChecked();
        logger.info("Male Selected");
      }

      async clickSubmitButton(){
        await this.page
        .locator(this.submitButton)
        .click()
        .catch((error) => {
            logger.error(`Error clicking Submit Button: ${error}`);
            throw error; // rethrow the error if needed
          })
          .then(() => logger.info("Clicked Submit Button"));
      }

      async CreateUser(name: string){
        await this.fillName(name);
        await this.selectCheckBox();
        await this.selectRadioButton();
        await this.selectDropdown();
        await this.selectMultiDropdown();
        return await this.clickSubmitButton();
      }

}
