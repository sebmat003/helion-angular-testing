import { navigateTo } from '../../utils/navigate';

describe('Auth guard', () => {
  beforeEach(() => {
    navigateTo(5);
  });

  it('should show admin page', () => {
    cy.get('button').contains('Login as Admin').click();

    cy.get('button').contains('Go to the "Admin" page').click();

    cy.url().should('contain', '/admin');
  });

  it('should show user page', () => {
    cy.get('button').contains('Login as User').click();

    cy.get('button').contains('Go to the "User" page').click();

    cy.url().should('contain', '/user');
  });

  it('should be able to login to user/admin page when owner is logged in', () => {
    cy.get('button').contains('Login as Owner').click();

    cy.get('button').contains('Go to the "Admin" page').click();
    cy.url().should('contain', '/admin');
    cy.get('button').contains('Go to the "User" page').click();
    cy.url().should('contain', '/user');
  });

  it('should not access to pages for not logged-in user', () => {
    cy.get('button').contains('Go to the "Admin" page').click();

    cy.url().should('not.contain', '/admin');
    cy.url().should('eq', 'http://localhost:4200/6');
  });
});
