const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "@mentions-dropdown-menu-item-hover-bg": "black",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
