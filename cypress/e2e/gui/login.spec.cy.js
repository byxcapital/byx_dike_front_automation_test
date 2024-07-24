import '../../support/globalAfterEach';

const loginData = Cypress.env('login');

describe('Login Screen Tests', () => {
    beforeEach(() => {
       cy.setCustomHeaders();
        cy.visit('/')
    });

    it.only('should successfully log in with valid credentials', () => {
        cy.login(loginData.valid.username, loginData.valid.password);
        cy.get('.sc-dAlxHm > .ant-typography').should('be.visible').and('contain', 'Conciliation as a Service');
        cy.checkLoginSuccessMessage();
    });

    it('should not log in with invalid username', () => {
        cy.login(loginData.invalidUsername.username, loginData.invalidUsername.password);
        cy.checkInvalidLoginMessage();
    });

    it('should not log in with invalid password', () => {
        cy.login(loginData.invalidPassword.username, loginData.invalidPassword.password);
        cy.checkInvalidLoginMessage();
    });

    it('should keep login button disabled with empty username', () => {
        cy.get('#password').type(loginData.valid.password);
        cy.checkLoginButtonDisabled();
    });

    it('should keep login button disabled with empty password', () => {
        cy.get('#identifier').type(loginData.valid.username);
        cy.checkLoginButtonDisabled();
    });
});

