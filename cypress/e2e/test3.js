beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
});
///<reference types = "Cypress"/>


describe('log in', () => {
    it('login standard_user', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click();
    });
})

    it('to add all items to the cart', ()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
       let sizeButtons = cy.get('div#inventory_container').find('.btn');
       sizeButtons.then((buttons) =>{
        const count =buttons.length;
        // numbutton= console.log(count);
        for (let i = 0; i < count; i+=2) {
         cy.get('div#inventory_container').find('.btn').eq(i).click()  ;
            
        }
       })
                
            })
    