import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: "https://www.automationexercise.com/",
    projectId: "ii61dm",
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "node_modules/allure-results",
      });
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.family === "chromium" && browser.name !== "electron") {
          launchOptions.args.push("--start-fullscreen");
          return launchOptions;
        }

        if (browser.name === "electron") {
          launchOptions.preferences.fullscreen = true;
          return launchOptions;
        }
      });
    },
  },
});
