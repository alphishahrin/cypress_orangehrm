export function updateInfo() {
    cy.get(':nth-child(3) > .oxd-main-menu-item').click()

    //clcik gender
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()

    //click blood group
    cy.get('.oxd-select-dropdown > :nth-child(6)').click()

    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()

    // Validation: Assert that the changes are saved successfully
    cy.contains('Successfully Saved', { timeout: 10000 }).should('be.visible');
}