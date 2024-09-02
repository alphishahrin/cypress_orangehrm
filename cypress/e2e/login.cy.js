
import { loginAsAdmin } from '../support/login';  
import { createNewEmployee } from '../support/create_employee';
import { searchEmployeeById } from '../support/searchByEId';
import{ searchEmployeeInDirectory } from '../support/seach_by_employee_name';
import { logout } from '../support/logout';
import { loginWithNewEmployee } from '../support/loginWithNewEmployee';


describe('OrangeHRM Test Suite', () => {
  it('should login as admin and display the dashboard', () => {
    loginAsAdmin();
    cy.wait(2000);  // Wait for 2 seconds
    createNewEmployee(); 
    cy.wait(2000);  
    searchEmployeeById();  
    cy.wait(2000); 
    searchEmployeeInDirectory();
    cy.wait(2000);
    logout();
    cy.wait(2000);
    loginWithNewEmployee()
  });

});






