afterEach(() => {
    cy.screenshot(`screenshots/${Cypress.spec.name}-${Cypress.mocha.getRunner().suite.ctx.currentTest.title}`)
})