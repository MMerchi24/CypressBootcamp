export class ProductsPage {

    addProductButtonSelector = '';
    removeProductButtonSelector = '';
    selector = ''
    selectOption2 = '';
    textOption2 = '';
    descriptionProduct = '';

    clickButtonAddProduct(addProductButtonSelector) {
        cy.get(addProductButtonSelector).should('exist').and('be.visible').and('contain', 'Add to cart').click();
    }

    buttonTextTest(selector, text) {
        cy.get(selector).should('exist').and('be.visible').and('contain', text);
    }

    selectFilterButton(selector, textOption2) {

        //cy.get(".product_sort_container").click();
        cy.get(".product_sort_container").should('exist', textOption2);
        cy.get(".product_sort_container").select("za");
        //cy.get(selector).should('have.value', textOption2);

        /*        cy.get(selector).should('exist').and('be.visible').and('contain', text);
                cy.get(selector).select();
                cy.get(selector).should('have.value', textOption2);
                cy.contains(descriptionProduct).and('be.visible'); */
    }
};