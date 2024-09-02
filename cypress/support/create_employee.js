

import { generateStrongPassword } from './utils';

const { faker } = require('@faker-js/faker');

export function createNewEmployee() {
  // Navigate to PIM
  cy.get(':nth-child(2) > .oxd-main-menu-item').click();  

  // Click Add btn
  cy.get('.orangehrm-header-container > .oxd-button').click();  

  const employeeId = faker.random.numeric(5);
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = `${firstName}_${lastName}`;
  const password = generateStrongPassword();

  // Save firstName and lastName as Cypress aliases
  cy.wrap(firstName).as('firstName');
  cy.wrap(lastName).as('lastName');
  
  const employeeData = {
    employeeId: employeeId,
    firstName: firstName,
    lastName: lastName,
    username: username,
    password: password
  }

  cy.writeFile('cypress/fixtures/employeeDetails.json', employeeData);

  // Enter ID, name, user, password
  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(employeeId);

  cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(firstName);  
  cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(lastName);

  cy.get('.oxd-switch-input').click();  

  cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);  // Adjust this selector if necessary
  cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
  cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);

  // Click on Submit button
  cy.get('.oxd-button--secondary').click();  

  // Validation: Assert Employee Created Successfully
  cy.contains('Successfully Saved', { timeout: 10000 }).should('be.visible');

  // Validation: Assert Employee Profile Created
  cy.get('.orangehrm-edit-employee-name > .oxd-text', { timeout: 15000 }) 
  .should('exist') 
  .should('be.visible') 
  .should('contain.text', `${firstName} ${lastName}`);

}
