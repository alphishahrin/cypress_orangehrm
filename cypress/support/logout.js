export function logout() {
    cy.get('.oxd-userdropdown-tab').click();  
  
    cy.get(':nth-child(4) > .oxd-userdropdown-link').contains('Logout').click(); 
  
    cy.url().should('include', '/auth/login');  
  }