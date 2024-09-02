
import fs from 'fs';

export function loginWithNewEmployee() {
    // Read the employee details from the JSON 
    cy.fixture('employeeDetails').then((employeeDetails) => {
      const { firstName, lastName, username, password } = employeeDetails;
  
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
      cy.get('.oxd-button').click();
  
      const fullName = `${firstName} ${lastName}`;
      cy.log(fullName)
  
      // Validate that the full name is displayed beside the profile icon
      cy.get('.oxd-userdropdown-name').should('be.visible').and('contain.text', fullName);
    });
  }