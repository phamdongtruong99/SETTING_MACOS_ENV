import 'babel/polyfill';
import React from 'react';
import App from './App';
import { render } from 'react-dom';
import * as Sentry from '@sentry/browser'
import { SentryCredentials } from './config/sentryConfig'

Sentry.init(SentryCredentials)

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
