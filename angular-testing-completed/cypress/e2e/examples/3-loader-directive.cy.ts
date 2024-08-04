import { navigateTo } from '../../utils/navigate';

describe('Loader directive', () => {
  beforeEach(() => {
    navigateTo(3);
  });

  it('should show the spinner while waiting for the response', () => {
    cy.get('[data-cy="loading-spinner"').should('be.visible');
  });

  it('should show content after the response completion', () => {
    cy.wait(2000)
      .get('[data-cy="loader-usage-content"]')
      .should('be.visible')
      .should('contain.text', 'content');
  });
});
