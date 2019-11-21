import { Given } from "cypress-cucumber-preprocessor/steps";


Given(`User open App`, () => {
  cy.openAppWithCorrectData();
});
