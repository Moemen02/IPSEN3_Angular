describe('Category composition', () => {

  it('Should make new composition', () => {
    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[name="logEmail"]').type('admin@admin.com');
    cy.get('[name="logPassword"]').type('adminpass');
    cy.get('button').click();
    cy.wait(700)

    cy.visit('/afvalstoffen');
    cy.url().should('includes', 'afvalstoffen');

    cy.get('.mat-mdc-form-field-flex').click();
    cy.get('.newComper').click();
    
    cy.get('[name="name"]').type('100% CO test');
    cy.get('[name="color"]').type('1');
    
    cy.get('.addRule').click();
    
    cy.get('[name="procNumber"]').type('100');
    cy.get('[name="type"]').type('CO');
    
    
    cy.get('.allcomps').click();
    cy.get('.SameThan').click();
    cy.get('.button-submit').click();

    cy.get('.mat-mdc-form-field-flex').click();
    cy.get('.mat-mdc-option').eq(0).should("contain.text", "100% CO test")
    
  });
})

