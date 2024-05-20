
export class LoginPage { 
    
    // Atributos = Variables
    inputUsernameSelector = '';
    inputPasswordSelector = '';
    buttonSelector = '';
    username = '';
    passwordName = '';

     

    // Metodos
    inputTypeTest(selector, stringValue) {
        cy.get(selector).should('be.empty').type(stringValue).and('have.value', stringValue);
    }
    buttonClick(selector) {
        cy.get(selector).contains('Login').should('be.visible').click(); //al tener el selector no es necesario poner que contenga el texto 'Login'
    }
    loginTestButton(inputUsernameSelector, username, inputPasswordSelector, passwordName, buttonSelector) {
        this.inputTypeTest(inputUsernameSelector, username);
        this.inputTypeTest(inputPasswordSelector, passwordName);
        this.buttonClick(buttonSelector);
    }
}