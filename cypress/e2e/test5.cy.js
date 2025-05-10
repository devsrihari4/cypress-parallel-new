describe('Test5 spec', () => {
  it('Test 5 failing', () => {
    cy.visit('https://example.cypress.io')
    expect(false).to.be.true
  })
})