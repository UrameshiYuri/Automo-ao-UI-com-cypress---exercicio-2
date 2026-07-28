const { defineConfig } = require("cypress");
const { tabNavigation, setDebuggingPort } = require("./cypress/support/utils/tabNavigation");
require("dotenv").config();

const getCompareSnapshotsPlugin = require("cypress-lens/dist/plugin");

module.exports = defineConfig({
  screenshotsFolder: "./cypress/snapshots/actual/cypress/e2e",
  trashAssetsBeforeRuns: true,
  video: false,

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "mochawesome-report",
    overwrite: false,
    reportFilename: "index",
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    supportFile: "cypress/support/e2e.js",

    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      return config;
    },

    env: {
      MY_ENV: process.env.MY_ENV,
      ebacStoreVersion: "v1",
      failSilently: false,
      SNAPSHOT_BASE_DIRECTORY: "./cypress/snapshots/base/cypress/e2e",
      SNAPSHOT_DIFF_DIRECTORY: "./cypress/snapshots/diff/cypress/e2e"
    }
  }
});
