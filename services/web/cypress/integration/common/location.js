import {Then,When} from "cypress-cucumber-preprocessor/steps";



Then(`hotel info header should correct render`, ( )=> {

    cy.get(".vegas-hotel-info_header-overall").should("be.visible");
    cy.get(".vegas-hotel-info_header-overall-top-name").contains("Venetian");
    cy.get(".vegas-hotel-info_header-price-value").contains("128");
    cy.get(".vegas-hotel-info_header-overall-top_star-group")
        .children()
        .should(stars => {
            expect(stars.length).to.equal(5);
        });
    cy.get(".vegas-hotel-info_header-overall-bottom")
        .children()
        .should(els => {
            expect(els.length).to.equal(3);
            const texts = els.map((i, el) => Cypress.$(el).text());
            const items = texts.get();
            expect(items, "has 3 items").to.have.length(3);
            // use second argument to expect(...) to provide clear
            // message with each assertion
            expect(items, "has expected text in each item").to.deep.eq([
                "Strip",
                "1-866-983-4279",
                "Best Price Guarantee"
            ]);
        });
})

When('I click on location link', () => {

    cy.get('.vegas-hotel-info_header-overall-bottom-button')
        .click()
})


Then(`Location tab should be selected`, table => {
    cy.get(".vegas-hotel-info-tab_button--active")
        .should("not.have.text", "description")
        .should("not.have.text", "DETAILS")
        .should("have.text", "LOCATION");
    cy.get('.vegas-hotel-info-tab-panel-desc').should("not.be.visible");
    cy.get('.vegas-hotel-info-tab-panel-detail').should("not.be.visible");
    cy.get('.vegas-hotel-info-tab-location').should("be.visible");

})
