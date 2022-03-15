describe('CreateAdd', () => 
{
    it('Positive TestCase Create Add', () => 
    {
      cy.visit('http://computer-database.gatling.io/computers')
      cy.get('.btn.success').click()
      cy.wait(500)
      cy.get('input[id="name"]').type('Testing Computer')
      cy.wait(500)
      cy.get('input[id="introduced"]').type('1990-01-01')
      cy.wait(500)
      cy.get('input[id="discontinued"]').type('1991-01-01')
      cy.wait(500)
      cy.get('select').select('1').should('have.value', '1')
      cy.wait(500)
      //khusus get Title
      cy.contains('Create this computer').click()
      //get class
      //cy.get('.btn.primary').click()
      cy.wait(500)
    })

    it('Positive TestCase Searching', () => 
    {
        cy.get('input[id="searchbox"]').type('ACE')
        cy.contains('Filter by name').click()
    })

})