import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://ikebanaottawa.webflow.io',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    specPattern: 'cypress/e2e/**/*.cy.ts',
    retries: {
      runMode: 1,
      openMode: 0
    },
    setupNodeEvents(_on, _config) {
      // place node event listeners here when needed
    }
  }
});
