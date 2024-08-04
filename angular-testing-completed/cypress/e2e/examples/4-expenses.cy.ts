import { navigateTo } from '../../utils/navigate';

describe('Expenses', () => {
  beforeEach(() => {
    navigateTo(4);
  });

  it('should change pages correctly', () => {
    cy.get('.mat-mdc-paginator-page-size-select').click();
    cy.get('mat-option').eq(1).click();
    cy.get('.mat-mdc-paginator-navigation-next').click();

    cy.get('.mat-mdc-paginator-range-actions').should(
      'contain.text',
      ' 11 – 19 of 19 '
    );
  });

  it('should filter expenses by category and year correctly', () => {
    cy.get('app-table-filters')
      .find('.mat-mdc-form-field')
      .eq(0)
      .click()
      .find('input')
      .type('2000');
    cy.get('app-table-filters').find('mat-select').click();
    cy.get('mat-pseudo-checkbox').eq(1).click();
    cy.get('.cdk-overlay-pane').invoke('remove');
    cy.get('.cdk-overlay-backdrop').invoke('remove');
    cy.get('[data-cy="filter-button"]').click();

    cy.get('tbody tr').should('have.length', 3);
  });

  it.only('should show no data message', () => {
    cy.get('app-table-filters')
      .find('.mat-mdc-form-field')
      .eq(0)
      .click()
      .find('input')
      .type('2050');
    cy.get('[data-cy="filter-button"]').click();

    cy.get('[data-cy="no-data-info"]').should(
      'contain.text',
      'No data matching the filter.'
    );
  });
});
