describe('Test3 spec', () => {
  it('Test 3 failing', () => {
    cy.visit('https://example.cypress.io')
    expect(false).to.be.true
  })
})