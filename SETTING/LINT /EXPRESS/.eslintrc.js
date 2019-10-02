module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb-base', 'prettier', 'jest'],
  plugins: ['prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
};
