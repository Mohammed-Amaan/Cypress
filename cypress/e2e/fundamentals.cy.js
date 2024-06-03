describe("fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("Header text ", () => {
    cy.get('[data-test="fundamentals-header"]').contains(
      "Testing Fundamentals"
    );
    cy.get('[data-test="fundamentals-header"]').should(
      "contain.text",
      "Testing Fundamentals"
    );
  });
  it("Accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
  //create a custom command in support/commands.js , this command is named getDataTest which fetches an element based on the data-test attribute.
  it("header", () => {
    cy.getDataTest("fundamentals-header").contains("Testing Fundamentals");
  });
});
