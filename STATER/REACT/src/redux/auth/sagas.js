import { call, put, takeEvery } from 'redux-saga/effects';
import { loginApi, getInfoApi } from 'api/auth';
// eslint-disable-next-line import/no-cycle
import { history } from 'redux/store';
import { showError } from 'redux/exception';
import {
  login,
  loginSuccess,
  getInfoSuccess,
  getInfo,
  loginFairlure,
} from './slice';

function* loginSaga({ payload }) {
  try {
    const response = yield call(loginApi, payload);
    if (response.data) {
      yield put(loginSuccess());
      localStorage.setItem('sessionToken', response.data.token);
      history.push('/companies');
    } else {
      throw response;
    }
  } catch (error) {
    yield put(loginFairlure(error));
  }
}

function* getInfoSaga() {
  try {
    const response = yield call(getInfoApi);
    if (response.data) {
      yield put(getInfoSuccess(response.data));
    } else {
      throw response;
    }
  } catch (error) {
    showError(error);
  }
}

export default [
  takeEvery([login.type], loginSaga),
  takeEvery([getInfo.type], getInfoSaga),
];
