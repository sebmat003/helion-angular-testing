import { navigateTo } from '../../utils/navigate';

describe('NgRx store', () => {
  beforeEach(() => {
    navigateTo(7);
  });

  it('should add a new product to the store', () => {
    const productName = 'My product';
    const productPrice = '100';
    cy.get('[data-cy="product-add-button"]').click();
    cy.get('[data-cy="product-name-input"]').type(productName);
    cy.get('[data-cy="product-price-input"]').type('100');
    cy.get('[data-cy="product-thumbnail-select"]').click();
    cy.get('[data-cy="product-thumbnail-select-option"]').eq(2).click();
    cy.get('[data-cy="add-edit-save-button"]').click();

    cy.get('.product').should('have.length', 4);
    cy.get('.product')
      .eq(4)
      .find('.product-name')
      .should('contain.text', productName);
    cy.get('.product')
      .eq(4)
      .find('.product-price')
      .should('contain.text', productPrice + ' zł');
    cy.get('.product')
      .eq(4)
      .find('.product-image')
      .should(
        'have.css',
        'background-image',
        'url("http://localhost:4200/assets/hotdog.jpg")'
      );
  });

  it('should remove a product from the store', () => {
    cy.get('.product')
      .eq(0)
      .trigger('mouseover', { force: true })
      .find('[data-cy="product-delete-button"]')
      .click({ force: true });

    cy.get('.product').should('have.length', 3);
  });

  it('should edit a product in the store', () => {
    const editedName = 'Edited';
    cy.get('.product')
      .eq(0)
      .find('[data-cy="product-edit-button"]')
      .click({ force: true });
    cy.get('[data-cy="product-name-input"]').type(editedName);
    cy.get('[data-cy="add-edit-save-button"]').click();

    cy.get('.product')
      .eq(0)
      .find('.product-name')
      .should('contain.text', 'Burger' + editedName);
  });
});
