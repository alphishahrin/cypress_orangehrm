

export function searchEmployeeInDirectory() {
    // Navigate to the Directory menu
    cy.get(':nth-child(9) > .oxd-main-menu-item').click();
  
    // Retrieve the firstName and lastName from aliases
    cy.get('@firstName').then((firstName) => {
        cy.get('@lastName').then((lastName) => {
            const fullName = `${firstName}  ${lastName}`;

            // Search by employee's full name
            cy.get('.oxd-autocomplete-text-input > input').type(firstName);
            // Wait for the suggestions to appear and select the first one
            cy.get('.oxd-autocomplete-dropdown > div')
            .first()
            .should('contain', fullName)
            .click();

            cy.get('.oxd-button--secondary').contains('Search').click();

            // Validate the employee is found in the search results
            // cy.get('.orangehrm-directory-card-header').should('contain', fullName);
        });
    });
}
  