/// <reference types="cypress" />

import users from '../fixtures/data.json';
const { homePage } = require("../support/pages/home.page");

describe('deve usar o intercept para simular e validar respostas dadas pela API', () => {

    beforeEach(() => {
        const userLOCAL = users[2];
        cy.log(userLOCAL.email);
        cy.log(userLOCAL.senha);
        cy.login(userLOCAL.email, userLOCAL.senha)
    })

    it('deve interceptar uma compra com Intercept', () => {
        cy.intercept(
            'PUT',
            '/public/updateCart/67f55de836e994dfd8baa11a',
            {
                statusCode: 200,
                body: {
                    message: 'Produto adicionado com sucesso!',

                }
            }
        ).as('putUpdateCart');
        homePage.openSearchProduct()
        cy.wait(2000)
        homePage.searchProduct('camiseta EBAC ')
        cy.wait(2000)
        homePage.getProduct(1)
        cy.wait(2000)
        homePage.buyProduct()
    });

})
