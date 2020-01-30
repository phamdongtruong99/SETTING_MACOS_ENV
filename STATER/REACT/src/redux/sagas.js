import { all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import authSaga from './auth/sagas';
import usersSagas from './users/sagas';
import brandsSagas from './brands/sagas';
import ordersSagas from './orders/sagas';

export default function* root() {
  yield all([...usersSagas, ...authSaga, ...brandsSagas, ...ordersSagas]);
}
