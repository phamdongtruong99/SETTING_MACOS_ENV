module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: [
    'prettier',
    'react-hooks',
    'react-native',
    'eslint-comments',
    'react',
    'jest'
  ],
  rules: {
    'react/jsx-curly-newline': [
      1,
      {
        multiline: 'consistent',
        singleline: 'consistent'
      }
    ],
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }]
  },
  env: {
    jest: true
  }
};
