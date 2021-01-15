module.exports = {
  extends: ['airbnb', 'prettier'],
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'prettier',
    'jest',
    'eslint-comments',
    'jam3',
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
    'jam3/rule-name': 2
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts'] }],
    'react/jsx-props-no-spreading': 0,
    'no-console': ['error'],
    'no-nested-ternary': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-else-return': ['error'],
    'node/callback-return': ['error'],
    'no-lonely-if': ['error'],
    'import/no-extraneous-dependencies': [
      error,
      {
        devDependencies: ['.storybook/**', 'stories/**'],
      },
    ],
  },
};
