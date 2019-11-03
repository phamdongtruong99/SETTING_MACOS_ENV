/* eslint-disable */
const {
  override,
  fixBabelImports,
  addLessLoader,
  useBabelRc,
} = require('customize-cra');
const THEME = require('./src/configs/theme');

module.exports = override(
  useBabelRc(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': THEME.palette.primary,
      '@font-family': THEME.fonts.primary,
    },
  }),
);
