import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPage } from "../pages/commonPage"

let commonPage = new CommonPage(); // Declaramos como objeto commonPage de

Given("I visit {string}", (url) => {
  commonPage.visitLink(url);
}
)
When ("I check that {string} respond with a status {int}", (url, int) => {
  commonPage.checkStatus200(url);
})
Then ("I check that url is {string}", (url) => {
  commonPage.currentUrlCheck(url);
}
);