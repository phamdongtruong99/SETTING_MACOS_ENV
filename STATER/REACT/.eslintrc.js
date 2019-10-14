module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'prettier',
    'jest',
    'eslint-comments',
  ],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        semi: true,
        trailingComma: 'all',
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts'] }],
    'react/jsx-props-no-spreading': 0,
  },
};
