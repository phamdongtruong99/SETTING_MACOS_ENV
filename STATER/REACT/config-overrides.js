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
      '@card-shadow': THEME.card.shadow,
      '@card-radius': '16px',
      '@border-radius-base': '10px',
      '@table-header-bg': THEME.background.headerTable,
      '@table-header-color': THEME.text.headerTable,
      '@layout-sider-background-light': THEME.background.sidebar,
      '@input-bg': THEME.background.input,
    },
  }),
);
