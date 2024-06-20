import constants from '../../support/constants'
import locators from '../../support/locators'
describe("testing", () => {

    it("test it 01", () => {
        cy.log("Testong log")
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get(locators.username_field).type(constants.username)
        cy.get(locators.password_field).type(constants.password)
        cy.get(locators.login).click() 
        cy.get(locators.container).select(constants.ztoa)
        cy.get(locators.link).click()
        cy.xpath(locators.back_button).click({force: true})

        cy.wait(2000)
        cy.xpath(locators.close_menu).click({force: true})
        // cy.get(".bm-menu-wrap").click({force: true})
        cy.get(locators.logout).click()
    })

})