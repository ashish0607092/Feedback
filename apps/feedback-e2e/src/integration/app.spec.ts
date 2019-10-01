import { getGreeting } from '../support/app.po';

describe('feedback', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to feedback!');
  });
});
