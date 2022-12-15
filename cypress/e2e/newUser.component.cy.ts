describe('NewUserComponent', () => {

  it('Should give feedback when no fields are filled', () => {
    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[name="logEmail"]').type('admin@admin.com');
    cy.get('[name="logPassword"]').type('adminpass');
    cy.get('button').click();
    cy.wait(700)

    cy.visit('/new-user');
    cy.url().should('includes', 'new-user');

    cy.get('.button-submit').click();

    cy.get('[name="emailRec"]').should('contain.text', "Email is verplicht")
  });

  it('Should give invalid email when email is invalid', () => {
    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[name="logEmail"]').type('admin@admin.com');
    cy.get('[name="logPassword"]').type('adminpass');
    cy.get('button').click();
    cy.wait(700)

    cy.visit('/new-user');
    cy.url().should('includes', 'new-user');

    cy.get('[name="email"]').type('invalidemail');

    cy.get('.button-submit').click();

    cy.get('[name="emailInv"]').should('contain.text', "Voer een geldig e-mail adres in")
  });

  it('Should not make new user if email already in use', () => {
    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[name="logEmail"]').type('admin@admin.com');
    cy.get('[name="logPassword"]').type('adminpass');
    cy.get('button').click();
    cy.wait(700)

    cy.visit('/new-user');
    cy.url().should('includes', 'new-user');

    cy.get('[name="email"]').type('admin@admin.com');
    cy.get('[name="name"]').type('admin');
    cy.get('[name="role"]').click().get('mat-option').contains('Medewerker').click();



    cy.get('.button-submit').click();

    cy.wait(700)

    cy.get('.errorText').should('contain', "gebuiker bestaat al")


  });
})
