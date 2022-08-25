// teardown.js
const os = require("os");
const rimraf = require("rimraf");
const path = require("path");

const DIR = path.join(".", "jest_puppeteer_global_setup");
module.exports = async function() {
  // close the browser instance
  await global.__BROWSER_GLOBAL__.close();

  // clean-up the wsEndpoint file
  // rimraf.sync(DIR);
};