describe('Assignment', () => {
  it('login', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#submit').click()
  })

  it('add contact', ()=> {
    cy.get('#add-contact').click()
    cy.get('#firstName').type(Cypress.env('testPersonFirstName'))
    cy.get('#lastName').type(Cypress.env('testPersonLastName'))
    cy.get('#phone').type(Cypress.env('testPersonPhoneNumber'))
    cy.get('#email').type(Cypress.env('testPersonEmail'))
    cy.get('#birthdate').type(Cypress.env('testPersonBirthDate'))
    cy.get('#street1').type(Cypress.env('testPersonStreet1'))
    cy.get('#street2').type(Cypress.env('testPersonStreet2'))
    cy.get('#postalCode').type(Cypress.env('testPersonPostalCode'))
    cy.get('#country').type(Cypress.env('testPersonCountry'))
    cy.get('#city').type(Cypress.env('testPersonCity'))
    cy.get('#stateProvince').type(Cypress.env('testPersonState'))
    cy.get('#submit').click()
  })

  it('check contact', ()=>{
    cy.get('#myTable').contains(Cypress.env('testPersonFirstName')+' '+Cypress.env('testPersonLastName'))
  })
})