describe('Ikebana Ottawa smoke tests', () => {
  it('Home page shows brand and navigation links', () => {
    cy.visit('/');
    cy.contains(/Ikebana/i).should('exist');
    cy.get('nav').within(() => {
      cy.contains(/Events/i).should('exist');
      cy.contains(/Membership/i).should('exist');
    });
  });

  it('Membership page shows join form', () => {
    cy.visit('/membership');
    cy.get('form').should('exist');
    cy.contains(/Join|Submit|Become a member/i).should('exist');
  });

  it('Events page shows event listings', () => {
    cy.visit('/events');
    cy.get('[class*=event], [data-event], .event-card, .event-list li').should('exist');
  });
});
