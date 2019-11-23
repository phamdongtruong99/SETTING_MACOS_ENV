import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { reduxBatch } from '@manaflair/redux-batch';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware(),
  sagaMiddleware,
  logger,
  routerMiddleware(history),
];

const store = configureStore({
  reducer: rootReducer(history),
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
});

sagaMiddleware.run(rootSagas);

export default store;
