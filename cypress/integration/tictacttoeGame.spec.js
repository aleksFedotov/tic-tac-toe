/// <reference types="cypress" />

describe('Tic tac toe', () => {
  it('User start game', () => {
    cy.visit('http://localhost:3000/tic-tac-toe');

    // User chose pvp mode and mark x

    cy.findByRole('button', {
      name: /new game \(vs player\)/i,
    }).click();

    // p1 wins with X

    cy.get('[data-testid="cell-0"]').click();
    cy.get('[data-testid="cell-4"]').click();
    cy.get('[data-testid="cell-1"]').click();
    cy.get('[data-testid="cell-5"]').click();
    cy.get('[data-testid="cell-2"]').click();

    // user start new round

    cy.findByRole('button', {
      name: /next round/i,
    }).click();

    // p2 wins
    cy.get('[data-testid="cell-4"]').click();
    cy.get('[data-testid="cell-0"]').click();
    cy.get('[data-testid="cell-5"]').click();
    cy.get('[data-testid="cell-1"]').click();
    cy.get('[data-testid="cell-7"]').click();
    cy.get('[data-testid="cell-2"]').click();

    // user start new round

    cy.wait(1);

    cy.findByRole('button', {
      name: /next round/i,
    }).click({ force: true });

    // ties

    cy.get('[data-testid="cell-0"]').click();
    cy.get('[data-testid="cell-1"]').click();
    cy.get('[data-testid="cell-2"]').click();
    cy.get('[data-testid="cell-4"]').click();
    cy.get('[data-testid="cell-3"]').click();
    cy.get('[data-testid="cell-5"]').click();
    cy.get('[data-testid="cell-7"]').click();
    cy.get('[data-testid="cell-6"]').click();
    cy.get('[data-testid="cell-8"]').click();

    // user restart new game

    cy.findByRole('button', {
      name: /quit/i,
    }).click();

    // chose pvp mode and mark o

    cy.findByRole('button', {
      name: /o mark/i,
    }).click();
    cy.findByRole('button', {
      name: /new game \(vs player\)/i,
    }).click();

    // press resart game and cancel it
    cy.get('[data-testid="restart-btn"]').click();

    cy.findByRole('button', {
      name: /no, cancel/i,
    }).click();

    // press resart game and agree
    cy.get('[data-testid="restart-btn"]').click();

    cy.findByRole('button', {
      name: /yes, restart/i,
    }).click();
  });
});
