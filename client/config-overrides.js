const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox
} = require("customize-cra");
const path = require("path");

module.exports = function override(config, env){
  console.log(config)
  console.log(env)

  config.entry = {
    appMain : config.entry,
    appLanding : '/Volumes/WD HDD/OpenHouseApplication/OpenHouse-Hub/client/src/indexLanding.js'
  }
  // config.output = {
  //   ...config.output,
  //   filename: 'static/js/[name].bundle.js'
  // }
  return config
}