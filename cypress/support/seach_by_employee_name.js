

export function searchEmployeeInDirectory() {
    cy.get(':nth-child(9) > .oxd-main-menu-item').click();
  
    // Get name from alias
    cy.get('@firstName').then((firstName) => {
        cy.get('@lastName').then((lastName) => {
            const fullName = `${firstName}  ${lastName}`;

            cy.get('.oxd-autocomplete-text-input > input').type(firstName);
            cy.get('.oxd-autocomplete-dropdown > div')
            .first()
            .should('contain', fullName)
            .click();

            cy.get('.oxd-button--secondary').contains('Search').click();

            // Validate: Assert that the employee is found in the directory
            cy.get('.orangehrm-directory-card-header').should('contain', fullName);
        });
    });
}
  