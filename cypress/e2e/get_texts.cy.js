/// <reference types="cypress" />

describe('Get texts', () => {
    it('Obter o texto de um elemento ', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')  

        cy.get('.top_header_left > p')
            .then((element) => {
                console.log(element.text())
            })
        
    })
})