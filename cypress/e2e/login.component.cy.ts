describe('LoginComponent', () => {

  it('Should not login if email credentials are invalid', () => {
    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[name="logEmail"]').type('geenAtSign');
    cy.get('[name="logPassword"]').type('TestLangGenoegWachtwoord1!');
    cy.get('[name="logButton"]').click()
    cy.get('.errorText').should('contain', "Ongeldige inloggegevens")
  });

  it('Should give feedback if fields are empty', () => {
    cy.visit('/');
    cy.url().should('includes', '');

    cy.get('[name="logButton"]').click()
    cy.get('[name="logEmail"]').should('have.class', "invalid")
    cy.get('[name="logPassword"]').should('have.class', "invalid")
  });

  it('Should login when valid and validated credentials are provided', () => {

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[name="logEmail"]').type('admin@admin.com');
    cy.get('[name="logPassword"]').type('adminpass');
    cy.get('button').click();

    cy.wait(700)

    cy.url().should('include', 'home');
    cy.get('.home-page').should('exist');
  });

  it('Should ask to change password when defualt password', () => {

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[name="logEmail"]').type('test@test.com');
    cy.get('[name="logPassword"]').type('adminpass');
    cy.get('button').click();
    cy.get('.loginText').should('contain', "Update Uw wachtwoord")

  });

  it('Should have a password longer than 6 characters', () => {

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[name="logEmail"]').type('test@test.com');
    cy.get('[name="logPassword"]').type('adminpass');
    cy.get('button').click();
    cy.wait(200)
    cy.get('.loginButton').click();

    cy.get('.errorText').should('contain', "Wachtwoord moet langer zijn dan 6 characters")

  });

  it('Should have passwords that are the same', () => {

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[name="logEmail"]').type('test@test.com');
    cy.get('[name="logPassword"]').type('adminpass');
    cy.get('button').click();
    cy.wait(200)
    cy.get('.loginButton').click();

    cy.get('[name="rePassword1"]').type('qwertyuiop');
    cy.get('[name="rePassword2"]').type('adminpasss');

    cy.get('[name="reButton"]').click();

    cy.get('.errorText').should('contain', "Wachtwoorden komen niet overeen")

  });

  it('Should have a capital letter in password', () => {

    cy.visit('/');
    cy.url().should('includes', '');
    cy.get('[name="logEmail"]').type('test@test.com');
    cy.get('[name="logPassword"]').type('adminpass');
    cy.get('button').click();
    cy.wait(200)
    cy.get('.loginButton').click();

    cy.get('[name="rePassword1"]').type('qwertyuiop');
    cy.get('[name="rePassword2"]').type('qwertyuiop');

    cy.get('[name="reButton"]').click();

    cy.get('.errorText').should('contain', "Wachtwoord moet een hoofdletter bevatten")

  });
})