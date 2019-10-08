describe("Unit Testing", () => {

})

describe("E2E", () => {
    describe('Landing Page', () => {
        it('loads without crashing', () => {
            cy.visit('/')
        }) 
    })  
})