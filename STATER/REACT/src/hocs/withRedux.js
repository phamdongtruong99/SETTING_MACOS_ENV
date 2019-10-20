import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '../redux/store';

const withRedux = App => props => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App {...props} />
      </ConnectedRouter>
    </Provider>
  );
};

export default withRedux;
