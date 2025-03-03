describe('Login page orange', ()=>{
    
    it('Verfify login working', ()=>{
        cy.visit('/')
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-userdropdown').should('be.visible')
    })

    it('Verify Login to the HRM App with invalid credentials', () => {
        cy.visit('/')
    
        cy.get('input[placeholder="Username"]').type("Admin")
        cy.get('input[placeholder="Password"]').type("admin1235")
        cy.get('button[type="submit"]').click({force:true})
    
        // Use the "should" command to assert element visibility
        cy.get('div[role="alert"]') // Replace '.element-selector' with the actual selector of the element
          .should('be.visible')     // Use 'be.visible' to assert that the element is visible
      })
    
      it('Login Forgot your password link navigation is working', () => {
        cy.visit('/')
    
        cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').click({force:true})
    
        // Use the "should" command to assert element visibility
        cy.get('button[type="button"]') // Replace '.element-selector' with the actual selector of the element
          .should('be.visible')
      })

      
    
      
})
   