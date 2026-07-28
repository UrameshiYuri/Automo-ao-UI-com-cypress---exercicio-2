/// <reference types="cypress" />

const { categories } = require("../fixtures/categories.json");
import users from '../fixtures/data.json';
const { homePage } = require("../support/pages/home.page");

describe('Categories', () => {

    beforeEach(() => {
        const userLOCAL = users[2];
        cy.log(userLOCAL.email);
        cy.log(userLOCAL.senha);
        cy.login(userLOCAL.email, userLOCAL.senha)
    })

    categories.forEach(category => {
        it(`Validacao categoria ${category.name}`, () => {
            homePage.openSearchProduct()
            cy.wait(2000)
            homePage.openCategoriesFilter()
            cy.wait(2000)
            homePage.categories().should('contain.text', category.name)

            cy.compareSnapshot(Cypress.currentTest.title, 1)
        });
    })

})
