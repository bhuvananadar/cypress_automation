describe("testing", () => {

    it("test it 01", () => {
        cy.log("Testong log")
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
    })

})