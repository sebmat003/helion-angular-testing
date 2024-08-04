import { navigateTo } from '../../utils/navigate';

describe('Boooks', () => {
  beforeEach(() => {
    navigateTo(0);
  });

  it('should show science-fiction books', () => {
    cy.get('[data-cy="book-category-button"]')
      .contains('Science Fiction')
      .click();
    cy.get('[data-cy="book"]')
      .contains('Solaris - science fiction')
      .should('be.visible');
    cy.get('[data-cy="book"]').should('have.length', 3);
  });

  it('should display discounts in red color', () => {
    cy.get('[data-cy="book"]')
      .filter(':contains(My biography - thriller)')
      .should('be.visible')
      .find('[data-cy="book-price"]')
      .should('have.css', 'color', 'rgb(255, 62, 62)')
      .should('contain.text', '5$');
  });

  it('should highlight bestseller properly', () => {
    cy.get('[data-cy="book"]')
      .filter(':contains(bestseller!)')
      .should('contain.text', 'Harry Potter and the Order of the Phoenix')
      .should('contain.text', 'Harry Potter and the Philosopher`s Stone')
      .should('contain.text', 'Harry Potter and the Chamber of Secrets')
      .should('contain.text', 'Harry Potter and the Prisoner of Azkaban')
      .should('have.length', 6);
  });
});
