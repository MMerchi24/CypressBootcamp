export class CommonPage { //Declaramos nuestro js como una clase para poder utilizar sus métodos en otras clases.
  visitLink(url) { //Hacemos una función para visitar esa url
    cy.visit(url); //Visito una url (como parámetro, la que pasemos por parámetro)
  }

  checkStatus200(url) {  // Función a la que le pasamos una url (url como parámetro)
    cy.request(url).then((response) => { //Hago un request a la web x y entonces esperamos una respueta
      expect(response.status).to.eq(200); // Esperamos que esa respuesta tenga un status igual a 200. 
    })
  }

  currentUrlCheck(url) {  // Función a la que le pasamos una url (url como parámetro)
    cy.url().should('eq', url);  //La web que está en el navegador es igual a la url que escribimos antes.
  }

  checkSelectOption (selector, option) {
    cy.get(selector).should('have.value', option);
  }
   
}