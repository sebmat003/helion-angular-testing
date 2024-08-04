import { navigateTo } from '../../utils/navigate';

describe('Error interceptor', () => {
  beforeEach(() => {
    navigateTo(6);
  });

  it('should display error message as a snackbar', () => {
    cy.get('[data-cy="send-error-request-button"]').click();

    cy.get('.mat-mdc-snack-bar-label').should(
      'contain.text',
      'Error occurred: Http failure during parsing for http://localhost:4200/dummy/api'
    );
  });
});
