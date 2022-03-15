describe('FunctionLogin', () => 
{
    it('Positive TestCase Login', () => 
    {
      cy.visit('https://www.facebook.com/')
      cy.get('input[id="email"]').type('testing@gmail.com')
      cy.wait(500)
      cy.get('input[id="pass"]').type('testing@gmail.com')
      cy.wait(300)
      //cy.get('._6ltg [data-testid="royal_login_button"]').click();
      //cy.get('input[type="submit" and id="u_0_d_YB"]').click('topRight');
      cy.get("[type='submit']").click('topRight')
    })
})