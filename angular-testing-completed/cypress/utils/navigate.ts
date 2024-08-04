export const navigateTo = (pathIndex: number) => {
  cy.visit('/');
  cy.get('[data-cy="nav-link"]')
    .filter((index) => index === pathIndex)
    .click();
};
