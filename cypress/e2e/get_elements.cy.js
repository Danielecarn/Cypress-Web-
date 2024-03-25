
describe('Login', () => {
    it('Login com sucesso', () => {
        cy.visit('/')
            .get('.mobile-menu-logo')  

        cy.get('#top_header').as('cabecalho')
            .contains('Login')

        cy.get('#top_header')
            .find('.fa-user')

        cy.get('@cabecalho')
            .find('.fa-user')
        
    })
})