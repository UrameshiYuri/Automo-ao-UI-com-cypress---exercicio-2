/// <reference types="cypress" />

const { email, senha } = require("../fixtures/data.json");
const { homePage } = require("../support/pages/home.page");

describe('deve usar o intercept para simular e validar respostas dadas pela API', () => {

    beforeEach(() => {
        cy.login(email, senha)
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
        homePage.searchProduct('camiseta EBAC ')
        homePage.getProduct(1)
        homePage.buyProduct()
    });

})
