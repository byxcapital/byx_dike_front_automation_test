// Comandos personalizados do Cypress

// ----------------------------------------------- Configuration ----------------------------------------------- //
// Comando personalizado para visitar um site com headers
Cypress.Commands.add('setCustomHeaders', () => {
    cy.intercept('*', (req) => {
      req.headers['cypress-byx-capital'] = '12uZ8Q53aE8NgpywzKe8NVr';
      req.continue();
    });
  }); 
  
// ----------------------------------------------- Login ----------------------------------------------- //
// Comandos para a funcionalidade de acesso ao sistema (login)
Cypress.Commands.add('login', (username, password) => {
    cy.get('#identifier').type(username);
    cy.get('#password').type(password);
    cy.get('#btn-login').click();
});

Cypress.Commands.add('checkLoginSuccessMessage', () => {
    cy.get('.ant-notification-notice-message').should('contain', 'Login efetuado com sucesso');
});

Cypress.Commands.add('checkInvalidLoginMessage', () => {
    cy.get('.ant-notification-notice-message').should('contain', 'Usuário ou senha inválidos');
});

Cypress.Commands.add('checkLoginButtonDisabled', () => {
    cy.get('#btn-login').should('be.disabled');
});

// ----------------------------------------------- Forgot Password ----------------------------------------------- //
// Comandos para a funcionalidade de recuperação de senha (forgot password)
Cypress.Commands.add('recoverPassword', (newPassword) => {
    cy.get('#password').type(newPassword);
    cy.get('#confirmPassword').type(newPassword);
    cy.get('.ant-btn').click();
});

Cypress.Commands.add('checkRecoverButtonDisabled', () => {
    cy.get('.ant-btn').should('be.disabled');
});

Cypress.Commands.add('checkErrorMessage', (errorMessage) => {
    cy.get('.ant-form-item-explain').should('contain', errorMessage);
});
