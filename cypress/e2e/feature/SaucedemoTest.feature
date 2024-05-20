@regression @saucedemoTest
Feature: Webpage Test
  #Scenario: Compruebo que la páina web está online
  # Give Visito la web X,
  # When Compruebo que X responde con un estado 200 (la página carga correctamente en el navegador)
  # Then Compruebo que la url que hay ahora es igual a X (la web que escribimos anteriormente)

  @smoke
  Scenario: Check webpage is online

    #Given in commonSteps
    Given I visit "https://www.saucedemo.com/"
    When I check that "https://www.saucedemo.com/" respond with a status 200
    Then I check that url is "https://www.saucedemo.com/"
@smoke
  Scenario: Credentials corrects

    #Given in commonSteps
    Given I visit "https://www.saucedemo.com/"

    #When in loginSteps
    When I type a username in the input username and check the value is "standard_user"
    When I type a password in the input password and check the value is "secret_sauce"
    When I click on login button
    Then The webpage change to "https://www.saucedemo.com/inventory.html"

@smoke
  Scenario: Click in a button

    #Given in commonSteps
    Given I visit "https://www.saucedemo.com/"
    And I login with the user and password correct

    #When in loginSteps
    When I click on Add to cart button of the product Sauce Labs Backpack
    Then The button Add to cart change to "Remove"


  Scenario: Select an option of a dropdown

    #Given in commonSteps
    Given I visit "https://www.saucedemo.com/"
    And I login with the user and password correct

    #When in loginSteps
    When I select the second option on filter products with Name Z to A "za"
    Then I check that the select value is Name Z to A "za"



