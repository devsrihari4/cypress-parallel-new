const { defineConfig } = require('cypress');
const { allureCypress } = require('allure-cypress/reporter');

// const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            // allureCypress(on, config);
            return config;
        }
    }
});