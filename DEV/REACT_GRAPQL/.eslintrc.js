module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'prettier',
    'jest',
    'eslint-comments'
  ],
  env: {
    browser: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        semi: true
      }
    ],
    // 'react/jsx-curly-newline': [
    //   1,
    //   {
    //     multiline: 'consistent',
    //     singleline: 'consistent'
    //   }
    // ],
    // 'react/state-in-constructor': 0,
    // 'react/static-property-placement': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-fragments': [1, 'element'],
    'react/jsx-props-no-spreading': 0
  }
};
