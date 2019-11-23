import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from 'theme/theme';
import Routes from 'routes';

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'darkturquoise',
  });
}

// github: https://stackblitz.com/edit/react-qi8pho?file=index.js

const GlobalStyle = createGlobalStyle``;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);

export default App;
