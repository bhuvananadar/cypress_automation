

describe("testing", () => {

    it("test it 01", () => {
        cy.log("Testong log")
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click() 
        cy.get(".product_sort_container").select("Name (Z to A)")
        cy.get("#item_3_title_link").click()
        cy.xpath("//button[@class='inventory_details_back_button']").click({force: true})

        cy.wait(2000)
        cy.xpath("//button[text()='Close Menu']").click({force: true})
        // cy.get(".bm-menu-wrap").click({force: true})
        cy.get("#logout_sidebar_link").click()
    })

})