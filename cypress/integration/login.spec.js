export const login = () => {
  // cy.visit("https://adoptadicos.github.io");
  cy.visit("http://localhost:3000");

  cy.get(".nav-link").last().should("have.text", "Log In");

  cy.contains("Log In").click();

  // Should navigate to Log in
  cy.url().should("include", "/#/login");

  cy.get("[type='email']").type("test@test.com");
  cy.get("[type='email']").should("have.value", "test@test.com");

  cy.get("[type='password']").type("test");
  cy.get("[type='password']").should("have.value", "test");

  cy.get("form").submit();

  // Should navigate to Home
  cy.url().should("include", "/");

  // Display profile pic or placeholder, instead of login
  cy.get(".nav-link").last().should("not.have.text", "Log In");
};

it("Login with test user", () => {
  login();
});
