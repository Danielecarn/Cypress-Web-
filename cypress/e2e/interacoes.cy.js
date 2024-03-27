/// <reference types="cypress" />

describe('Interações', () => {
    it('Digitar em um campo', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')  

        cy.get('.form-control')
            .type('daniele@gmail.com')
        
    })

    it('Click', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')  

        //click normal
        // cy.get('.fa-user')
        //     .click()

        //click duplo
        // cy.get('.fa-user')
        //     .dblclick()

        //click botão direito
        // cy.get('.fa-user')
        //     .rightclick()
        
        //click por coordenadas
        // cy.get('.fa-user')
        //     .click(100,100, {force: true})

        //Enter
        cy.get('.form-control')
            .type('daniele@gmail.com{enter}')
    })

    it('Select', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')  

        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Colombia')
    })

    it.only('Checkbox e radio button', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')  

        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        cy.get('#css')
            .check()
    })
})