import employeeDetails from '../fixtures/employeeDetails.json';

export function searchEmployeeById() {
    // Navigate to the Employee Search or PIM section
    cy.get(':nth-child(2) > .oxd-main-menu-item').click();  // Adjust selector if necessary
  
    // Enter the Employee ID in the search box
    cy.get(':nth-child(2) > .oxd-input').type(employeeDetails.employeeId);  // Adjust selector if necessary
  
    // Click the search button
    cy.get('.oxd-form-actions > .oxd-button--secondary').contains('Search').click();  // Adjust selector if necessary
  
    // Validate that the employee is found in the search results
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('contain', employeeDetails.employeeId);  // Adjust selector if necessary
  }