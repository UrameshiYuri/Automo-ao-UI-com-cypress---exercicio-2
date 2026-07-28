import { homePage } from "../pages/home.page"
import { loginPage } from '../pages'
import users from '../../fixtures/data.json'

Cypress.Commands.add('login', (email, senha) => {
    cy.setCookie('ebacStoreVersion', Cypress.env("ebacStoreVersion"), { domain: 'lojaebac.ebaconline.art.br' })
    cy.wait(2000)
    cy.visit("/")
    cy.wait(2000)
    homePage.openMenu('Account')
    loginPage.login(email, senha)
})
