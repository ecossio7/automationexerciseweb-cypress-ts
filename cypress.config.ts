import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: "https://www.automationexercise.com/",
    setupNodeEvents(on, config) {
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
