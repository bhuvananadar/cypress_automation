import constants from '../../support/constants'
import locators from '../../support/locators'
describe("testing", () => {

    it("test it 01", () => {
        cy.log("Testong log")
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get(locators.username_field).type(constants.username)
        cy.get(locators.password_field).type(constants.password)
        cy.get("#login-button").click() 
        cy.get(".product_sort_container").select("Name (Z to A)")
        cy.get("#item_3_title_link").click()
        cy.xpath("//button[@class='inventory_details_back_button']").click({force: true})

        cy.wait(2000)
        cy.xpath(locators.closemenu).click(constants.click)
        // cy.get(".bm-menu-wrap").click({force: true})
        cy.get("#logout_sidebar_link").click()
    })

})