describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("form input", () => {
    cy.contains(/testing forms/i);
    cy.contains("Successfully subbed: xyz@gmail.com!").should("not.exist");
    cy.getDataTest("email-form").find("input").as("subscribe-email");
    cy.get("@subscribe-email").type("xyz@gmail.com");
    cy.getDataTest("subscribe-button").click();
    cy.contains("Successfully subbed: xyz@gmail.com!").should("exist");
    cy.wait(3000);
    cy.contains("Successfully subbed: xyz@gmail.com!").should("not.exist");

    cy.get("@subscribe-email").type("xyz@gmail.ae");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: xyz@gmail.ae!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: xyz@gmail.ae!/i).should("not.exist");
  });
});
