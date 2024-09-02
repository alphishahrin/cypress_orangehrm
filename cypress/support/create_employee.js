

import { generateStrongPassword } from './utils';

const { faker } = require('@faker-js/faker');
const fs = require('fs');

export function createNewEmployee() {
  // Navigate to PIM
  cy.get(':nth-child(2) > .oxd-main-menu-item').click();  

  // Click On Add Button
  cy.get('.orangehrm-header-container > .oxd-button').click();  

  // Generate random employee data
  const employeeId = faker.random.numeric(5);
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = faker.internet.userName();
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

  // Read existing file content
  // cy.readFile('cypress/fixtures/employeeDetails.json').then(existingData => {
  //   // Check if the file is empty
  //   if (existingData && Array.isArray(existingData)) {
  //     // Append the new employee data
  //     existingData.push(employeeData);
  //   } else {
  //     // Create a new array if the file was empty or not in the expected format
  //     existingData = [employeeData];
  //   }

    // Write the updated content back to the file
    cy.writeFile('cypress/fixtures/employeeDetails.json', employeeData);
    // });


  // Enter Employee ID
  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear();
  cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(employeeId);

  // Enter Firstname and Lastname
  cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(firstName);  
  cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(lastName);

  // Click on Create Login Details Toggle
  cy.get('.oxd-switch-input').click();  

  // Enter Employee Creation Information
  cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);  // Adjust this selector if necessary
  cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
  cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);

  // Click on Submit button
  cy.get('.oxd-button--secondary').click();  // Adjust this selector if necessary

  // Validation: Assert Employee Created
  cy.contains('Successfully Saved', { timeout: 10000 }).should('be.visible');

  // Validation: Assert Employee Profile Created
  cy.get('.orangehrm-edit-employee-name > .oxd-text', { timeout: 15000 }) // Extend timeout if necessary
  .should('exist') // Ensure the element exists
  .should('be.visible') // Ensure the element is visible
  .should('contain.text', `${firstName} ${lastName}`);

}
