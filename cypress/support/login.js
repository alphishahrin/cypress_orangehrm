

export function loginAsAdmin() {

  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Enter the admin credentials
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: 120000 }).should('be.visible').type('Admin');
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: 120000 }).should('be.visible').type('admin123');
  
  // // Click the login button
  cy.get('.oxd-button', { timeout: 120000 }).should('be.visible').click();
  
  // Log current URL for debugging
  cy.url().then(url => {
    cy.log(`URL after login: ${url}`);
  });

  // // Validate that the dashboard is visible after login
  cy.get('.oxd-topbar-header-title').should('be.visible');
}
  