import { navigateTo } from '../../utils/navigate';

describe('Input text', () => {
  Cypress.on('window:before:load', (window) => {
    cy.spy(window.console, 'log').as('consoleLog');
  });

  beforeEach(() => {
    navigateTo(9);
  });

  it('should display an input value in the console', () => {
    const inputValue = '15';
    cy.get('[data-cy="input-number"]').clear().type(inputValue);
    cy.get('[data-cy="submit-form"]').click();

    cy.get('@consoleLog').should('be.calledWith', +inputValue);
  });

  it('should disable the Submit button when form is invalid', () => {
    cy.get('[data-cy="input-number"]').clear().type('10000000');

    cy.get('[data-cy="submit-form"]').should('be.disabled');
  });
});
