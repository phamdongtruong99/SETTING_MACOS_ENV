import { all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import auth from './auth/sagas';
import { sagas as users } from './users/sagas';

export default function* root() {
  yield all([...users, ...auth]);
}
