describe("examples testing", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("multi page testing", () => {
    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getDataTest("nav-forms").click();
    cy.location("pathname").should("equal", "/forms");

    cy.getDataTest("nav-overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("nav-component").click();
    cy.location("pathname").should("equal", "/component");

    cy.getDataTest("nav-examples").click();
    cy.location("pathname").should("equal", "/examples");
  });
  it.only("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("post-button").click();
  });
});
