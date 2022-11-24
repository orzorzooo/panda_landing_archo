const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  // orzorzooo:拿掉console.log
  configureWebpack(config) {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer[0].options.minimizer.options.compress =
        Object.assign(
          config.optimization.minimizer[0].options.minimizer.options.compress,
          {
            drop_console: true,
          }
        );
      // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
  },
});
