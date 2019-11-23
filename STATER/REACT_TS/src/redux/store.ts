import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reduxBatch } from '@manaflair/redux-batch';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory, History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

export const history: History = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger, routerMiddleware(history)];

const store = configureStore({
  reducer: rootReducer(history),
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
});

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSagas);

export default store;
