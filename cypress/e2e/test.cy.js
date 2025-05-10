describe('Test1 spec', () => {
  it('Test 1 failing', () => {
    cy.visit('https://example.cypress.io')
    expect(false).to.be.true
  })
})