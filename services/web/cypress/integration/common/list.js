import { Then } from "cypress-cucumber-preprocessor/steps";
import { uniq, sortedUniq } from "lodash";
Then(`Hotel should have 21 items`, table => {
  cy.get(".vegas-hotels-list-container")
    .children()
    .should(list => {
      expect(list.length).to.equal(21);
    });
});

Then(`Hotel name list is uniq`, () => {
  cy.get(".vegas-hotels-list-container")
    .children()
    .should(list => {
      const names = list.map((a, b) => {
        return Cypress.$(b)
          .find(".vegas-hotels-list__item-name")
          .text();
      });
      const uniqNames = uniq(names);

      expect(uniqNames.length).to.equal(21);
    });
});

Then(`Hotel name list should be uniq and sorted`, () => {
  cy.get(".vegas-hotels-list-container")
    .children()
    .should(list => {
      const names = list.map((a, b) => {
        let name = Cypress.$(b)
          .find(".vegas-hotels-list__item-name")
          .text();
        return name.toLowerCase();
      });
      const uniqNames = sortedUniq(names);
      uniqNames.map((el, i) => {
        expect(el).eq(names[i]);
      });
    });
});
