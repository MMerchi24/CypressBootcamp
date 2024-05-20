import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/loginPage"
import { CommonPage } from "../pages/commonPage"

// Instanciamos loginPage
let loginPage = new LoginPage(); 
let commonPage = new CommonPage();

// Seteamos los valores iniciales del objeto loginPage
loginPage.inputUsernameSelector = '[data-test="username"]';
loginPage.inputPasswordSelector = '[data-test="password"]';
loginPage.buttonSelector = '[data-test="login-button"]';
loginPage.username = 'standard_user';
loginPage.passwordName = 'secret_sauce';

/**
 * Para rellenar un input en Cypress necesitamos:
 * 1 - Selector 
 * 2 - Texto
 */

When("I type a username in the input username and check the value is {string}", (username) => {
    loginPage.inputTypeTest(loginPage.inputUsernameSelector, username);
});

When("I type a password in the input password and check the value is {string}", (passwordName) => {
    loginPage.inputTypeTest(loginPage.inputPasswordSelector, passwordName);    
});

When("I click on login button", () => {
    loginPage.buttonClick(loginPage.buttonSelector);
});


  
Then("The webpage change to {string}", (url) => {
    commonPage.currentUrlCheck(url);
});

Given ('I login with the user and password correct', () => {
    loginPage.loginTestButton(loginPage.inputUsernameSelector, loginPage.username, loginPage.inputPasswordSelector, loginPage.passwordName, loginPage.buttonSelector);
});