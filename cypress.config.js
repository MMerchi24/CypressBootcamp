const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { defineConfig } = require('cypress');
module.exports = defineConfig({
    e2e: {
        //baseUrl: "https://jsonplaceholder.typicode.com/posts/1/comments",
        chromeWebSecurity: false,
        specPattern: ['**/*.feature', '**/apiTests/*/*.js'],
        defaultCommandTimeout: 10000,
        //numTestsKeptInMemory: 10,
        env: {
            snapshotOnly: true,
            requestMode: true
          },
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                'file:preprocessor',
                createBundler({ plugins: [createEsbuildPlugin(config)] })
            );
            return config;
        }
    }
})