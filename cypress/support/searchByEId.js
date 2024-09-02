import employeeDetails from '../fixtures/employeeDetails.json';

export function searchEmployeeById() {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click(); 
  
    cy.get(':nth-child(2) > .oxd-input').type(employeeDetails.employeeId); 
  
    cy.get('.oxd-form-actions > .oxd-button--secondary').contains('Search').click(); 
  
    // Validate the searched employee
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should('contain', employeeDetails.employeeId);  
  }