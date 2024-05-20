import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPage } from "../pages/commonPage"
import { ProductsPage } from "../pages/productsPage"
import { LoginPage } from "../pages/loginPage"

let commonPage = new CommonPage();
let productsPage = new ProductsPage();
let loginPage = new LoginPage();

productsPage.addProductButtonSelector = '#add-to-cart-sauce-labs-backpack';
productsPage.removeProductButtonSelector = '#remove-sauce-labs-backpack';
productsPage.selector = '#header_container > div.header_secondary_container > div > span > select'
//productsPage.selectOption2 = '#header_container > div.header_secondary_container > div > span > select'
productsPage.selectOption2 = '.product_sort_container';

//productoPage.textOption2 = 'Name (Z to A)';


When ('I click on Add to cart button of the product Sauce Labs Backpack', () => {
    productsPage.clickButtonAddProduct(productsPage.addProductButtonSelector); 
});

Then ('The button Add to cart change to {string}', (text) => {
    productsPage.buttonTextTest(productsPage.removeProductButtonSelector, text);
});

When ('I select the second option on filter products with Name Z to A {string}', (textOption2) => {
    productsPage.selectFilterButton( productsPage.selectOption2, textOption2);
});
//When ('I select the second option on filter products with {string}', (textOption2) => {
Then ('I check that the select value is Name Z to A {string}', (textOption2) => {
    commonPage.checkSelectOption(productsPage.selectOption2, textOption2);
});


