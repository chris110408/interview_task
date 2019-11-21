import {Then} from "cypress-cucumber-preprocessor/steps";


Then(`The page should have functional tabs and there are 3 tabs`, table => {
    cy.get(".vegas-hotel-info-tab-group").should("be.visible");
    cy.get(".vegas-hotel-info-tab-group").children().should(els => {
        expect(els.length).to.equal(3);
    });
})


Then(`Default tab selected should be the Description Tab and the old tab’s content should hide`, table => {
    cy.get(".vegas-hotel-info-tab_button--active")
        .should("have.text", "description")
        .should("not.have.text", "DETAILS")
        .should("not.have.text", "LOCATION");
    cy.get('.vegas-hotel-info-tab-panel-desc').should("be.visible");
    cy.get('.vegas-hotel-info-tab-panel-detail').should("not.be.visible");
    cy.get('.vegas-hotel-info-tab-location').should("not.be.visible");

})





Then(`The detail button is active and the tab’s content should be shown and the old tab’s content should hide`, table => {
    cy.get(".vegas-hotel-info-tab_button--active")
        .should("have.text", "DETAILS")
        .should("not.have.text", "description")
        .should("not.have.text", "LOCATION");
    cy.get('.vegas-hotel-info-tab-panel-detail').should("be.visible");
    cy.get('.vegas-hotel-info-tab-panel-desc').should("not.be.visible");
    cy.get('.vegas-hotel-info-tab-location').should("not.be.visible");

})




Then(`The location button is active and the tab’s content should be shown and the old tab’s content should hide`, table => {
    cy.get(".vegas-hotel-info-tab_button--active")
        .should("have.text", "LOCATION")
        .should("not.have.text", "description")
        .should("not.have.text", "DETAILS");
    cy.get('.vegas-hotel-info-tab-panel-detail').should("not.be.visible");
    cy.get('.vegas-hotel-info-tab-panel-desc').should("not.be.visible");
    cy.get('.vegas-hotel-info-tab-location').should("be.visible");

})




Then(`The description button is active and the tab’s content should be shown and the old tab’s content should hide`, table => {
    cy.get(".vegas-hotel-info-tab_button--active")
        .should("have.text", "description")
        .should("not.have.text", "LOCATION")
        .should("not.have.text", "DETAILS");
    cy.get('.vegas-hotel-info-tab-panel-detail').should("not.be.visible");
    cy.get('.vegas-hotel-info-tab-panel-desc').should("be.visible");
    cy.get('.vegas-hotel-info-tab-location').should("not.be.visible");
})
