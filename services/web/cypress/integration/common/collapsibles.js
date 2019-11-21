import {Then,When} from "cypress-cucumber-preprocessor/steps";



Then(`The {string}  button should be visible,icon is on {string} side and have {string}`, (name,position,icon )=> {
    cy.get(".vegas-hotel-info-tab-panel-button").contains(name).should("be.visible");
    cy.get(".vegas-hotel-info-tab-panel-button").find(".vegas-icon-wrapper").should('have.class', `${position}`)
    cy.get(".vegas-hotel-info-tab-panel-button").find("i").should('have.class', `${icon}`)
})

Then(`The section is expanded`, name => {
    cy.get('.vegas-hotel-info-tab-panel-desc').should('not.have.class', 'vegas-hotel-info-tab-panel-hidden')
})

Then(`The section is collapsed`, name => {
    cy.get('.vegas-hotel-info-tab-panel-desc').should('have.class', 'vegas-hotel-info-tab-panel-hidden')
})

Then(`The detail section is expanded`, name => {
    cy.get('.vegas-hotel-info-tab-panel-detail').should('not.have.class', 'vegas-hotel-info-tab-panel-hidden')
})

Then(`The detail section is collapsed`, name => {
    cy.get('.vegas-hotel-info-tab-panel-detail').should('have.class', 'vegas-hotel-info-tab-panel-hidden')
})

When(`click The {string} button`, name => {
    cy.get(".vegas-hotel-info-tab-panel-button").contains(name).click()
})

Then(`The {string} button should hide`, name => {
    cy.get(".vegas-hotel-info-tab-panel-button").contains(name).should("not.be.visible");
})

