import { When} from "cypress-cucumber-preprocessor/steps";


When('I click on detail button', () => {

    cy.get('.vegas-hotel-info-tab_button')
        .contains('DETAILS')
        .click()
})

When('I click on description button', () => {

    cy.get('.vegas-hotel-info-tab_button')
        .contains('description')
        .click()
})


When('I click on location button', () => {

    cy.get('.vegas-hotel-info-tab_button')
        .contains('LOCATION')
        .click()
})
