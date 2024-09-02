

export function loginAsAdmin() {

  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Admin user pass
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: 120000 }).should('be.visible').type('Admin');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: 120000 }).should('be.visible').type('admin123');
  
  cy.get('.oxd-button', { timeout: 120000 }).should('be.visible').click();
 
  // cy.url().then(url => {
  //   cy.log(`URL after login: ${url}`);
  // });

  // Validate 
  cy.get('.oxd-topbar-header-title').should('be.visible');
}
  