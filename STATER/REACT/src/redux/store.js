import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { reduxBatch } from '@manaflair/redux-batch';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import deferredMiddleware from './ExposedPromiseMiddleware';
import rootReducer from './reducers';
import rootSagas from './sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware(),
  deferredMiddleware,
  sagaMiddleware,
  routerMiddleware(history),
];

process.env.NODE_ENV !== 'production' && middleware.push(logger);

const store = configureStore({
  reducer: rootReducer(history),
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
});

sagaMiddleware.run(rootSagas);

export default store;
