describe("End to End testing...", () => {
    describe('Landing Page', () => {
        it('loads without crashing', () => {
            cy.visit('/')
        }) 
    })  
})