// We need to be logged in
import { login } from './login.spec.js';

it("Create new thread", () => {
  login();

  // cy.visit("https://adoptadicos.github.io/foros");
  cy.visit("http://localhost:3000/#/foro");

  cy.contains("Crear hilo").click();

  let timestamp = Date.now();
  let title = "Cypress post " + timestamp;
  cy.get('input[placeholder="Título"]').type(title);
  cy.get('input[placeholder="Título"]').should('have.value', title);

  cy.get('select').select('General');
  cy.get('select').should('have.value', 'General');

  let body = "Cypress body " + timestamp;
  cy.get('textarea').type(body);
  cy.get('textarea').should('have.value', body);

  cy.contains('Publicar').click();

  cy.get('.post').first().contains(title);
});
