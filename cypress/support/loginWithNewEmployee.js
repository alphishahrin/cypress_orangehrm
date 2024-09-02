
import fs from 'fs';

export function loginWithNewEmployee() {
    // Read the employee details from the JSON file using Cypress fixture
    cy.fixture('employeeDetails').then((employeeDetails) => {
      const { firstName, lastName, username, password } = employeeDetails;
  
      // Type the username and password into the login fields
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
      cy.get('.oxd-button').click();
  
      // Construct the full name from firstname and lastname
      const fullName = `${firstName} ${lastName}`;
      cy.log(fullName)
  
      // Validate that the full name is displayed beside the profile icon
      cy.get('.oxd-userdropdown-name').should('be.visible').and('contain.text', fullName);
    });
  }