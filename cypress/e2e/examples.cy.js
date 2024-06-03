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
  it("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("post-button").click();
  });
  it.only("grudges test", () => {
    cy.contains(/add some grudges/i).should("exist");
    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("first grudge");
    });
    cy.getDataTest("grudge-button").click();
    cy.contains(/add some grudges/i).should("not.exist");
    cy.contains(/grudges/i).should("exist");
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });
    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("second grudge");
    });
    cy.getDataTest("grudge-button").click();
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);
      cy.get("li").its(1).should("contains.text", "second grudge");
    });
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.get("button").click();
        });
    });
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });
    cy.getDataTest("clear-button").click();
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });
  });
});
