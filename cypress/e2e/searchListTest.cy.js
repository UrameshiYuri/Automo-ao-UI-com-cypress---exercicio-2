/// <reference types="cypress" />

import users from '../fixtures/data.json';
const { homePage } = require("../support/pages/home.page");

describe('List Products', () => {

    beforeEach(() => {
        const userLOCAL = users[2];
        cy.log(userLOCAL.email);
        cy.log(userLOCAL.senha);
        cy.login(userLOCAL.email, userLOCAL.senha)
    })

    it(`should search product`, () => {
        cy.wait(2000)
        homePage.openSearchProduct()
        cy.wait(2000)
        homePage.searchProduct('in')
        cy.wait(2000)
        homePage.products().should('have.length.greaterThan', 0)
        cy.wait(2000)
        homePage.products().each(product => {
            let price = product.find('[data-testid="price"]').text()
            expect(price).to.contain('R$')
        })
        cy.wait(2000)
        cy.compareSnapshot(Cypress.currentTest.title, 0)
    });

})
