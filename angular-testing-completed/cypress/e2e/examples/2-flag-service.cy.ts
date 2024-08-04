import { navigateTo } from '../../utils/navigate';

describe('Flag service', () => {
  beforeEach(() => {
    navigateTo(1);
  });

  it('should display UK in english countries', () => {
    cy.get('[data-cy="english-countries"]').should(
      'contain.text',
      'United Kingdom'
    );
  });

  it('should display correct flag in Poland section', () => {
    cy.get('[data-cy="polish-flag"]')
      .find('img')
      .should('have.attr', 'src')
      .should('include', 'https://flagcdn.com/w320/pl.png');
  });

  it('should show all flags', () => {
    cy.get('[data-cy="countries"]').find('img').should('have.length', 250);
  });
});
