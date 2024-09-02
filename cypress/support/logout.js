export function logout() {
    // Click on the profile or user menu to open the dropdown
    cy.get('.oxd-userdropdown-tab').click();  // Adjust selector as needed
  
    // Click on the Logout button
    cy.get(':nth-child(4) > .oxd-userdropdown-link').contains('Logout').click();  // Adjust selector as needed
  
    // Optional: Verify that the login page is displayed after logout
    cy.url().should('include', '/auth/login');  // Adjust URL path as needed
  }