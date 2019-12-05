require('dotenv').config();

const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const themeConfig = require('./config/theme');
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './static/assets/antCustom.less'),
    'utf8'
  )
);

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

module.exports = withLess({
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: Object.assign(themeVariables, {
      '@primary-color': themeConfig.primary,
      '@layout-header-background': themeConfig.primary,
      '@layout-footer-background': themeConfig.background.container,
      '@card-radius': '10px',
      '@body-background': themeConfig.background.content,
      '@btn-font-weight': 700,
      '@btn-border-radius-base': 4,
      '@card-head-color': themeConfig.text.title,
      '@card-head-padding': '20px',
      '@card-padding-base': '20px',
      '@tabs-horizontal-padding': '20px',
      '@font-family': 'Inter',
      '@btn-font-weight': 'bold',
    }), // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      // config.module.rules.push({
      //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 100000,
      //     },
      //   },
      // });
      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    });

    config.resolve.modules.push(path.resolve('.'));

    return config;
  },
});
