/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const injectDevServer = require('@cypress/react/plugins/next')

module.exports = (on, config) => {
  /*
  TODO: Figgure out how to have the ct test files with the components themselves
  will require to have the webpack config be used from next when the component is outside
  the pages directory
  */
  injectDevServer(on, config)

  return config
}
