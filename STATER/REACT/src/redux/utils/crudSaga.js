import { showError } from 'redux/exception';
import { setLoading } from 'redux/loading';
import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import {
  getAllDataApi,
  getDataByIdApi,
  postDataApi,
  deleteDataByIdApi,
  putDataApi,
} from 'api/crud';
import { replace } from 'connected-react-router';
import { notification } from 'antd';

const crudSaga = (resource, actions, sagas = []) => {
  function* getAllDataSaga({ payload }) {
    try {
      yield put(setLoading(true));
      const response = yield call(
        getAllDataApi,
        payload.customResource || resource,
        payload.query,
        payload.customURL,
      );
      if (response.data) {
        yield put(actions.getAllDataSuccess(response.data));
        yield put(setLoading(false));
      } else {
        throw response;
      }
    } catch (error) {
      yield put(setLoading(false));
      showError(error);
    }
  }

  function* getDataByIdSaga({ payload }) {
    try {
      const response = yield call(
        getDataByIdApi,
        payload.customResource || resource,
        payload.id,
        payload.query,
      );
      if (response.data) {
        yield put(actions.getDataByIdSuccess(response.data));
      } else {
        throw response;
      }
    } catch (error) {
      showError(error);
    }
  }
  function* editDataSaga({ payload }) {
    try {
      const location = yield select(state => state.router.location);

      const response = yield call(
        putDataApi,
        payload.customResource || resource,
        payload.id,
        payload.data,
      );
      if (response.data) {
        yield put(actions.editDataSuccess(response.data));
        yield put(replace(`${location.pathname}${location.search}`));
        notification.success({
          message: 'Edit success',
        });
      } else {
        throw response;
      }
    } catch (error) {
      showError(error);
    }
  }

  function* createDataSaga({ payload }) {
    try {
      const location = yield select(state => state.router.location);

      const response = yield call(postDataApi, resource, payload);
      if (response.data) {
        yield put(actions.createDataSuccess(response.data));
        yield put(replace(`${location.pathname}${location.search}`));
        notification.success({
          message: 'Create success',
        });
      } else {
        throw response;
      }
    } catch (error) {
      showError(error);
    }
  }

  function* deleteDataByIdSaga({ payload }) {
    try {
      const response = yield call(
        deleteDataByIdApi,
        payload.customResource || resource,
        payload.id,
      );
      if (response.data) {
        yield put(actions.getDataByIdSuccess(response.data));
        notification.success({
          message: 'Delete success',
        });
      } else {
        throw response;
      }
    } catch (error) {
      yield put(setLoading(false));
      showError(error);
    }
  }

  return [
    takeLatest([actions.getAllData().type], getAllDataSaga),
    takeLatest([actions.getDataById().type], getDataByIdSaga),
    takeEvery([actions.createData().type], createDataSaga),
    takeEvery([actions.deleteDataById().type], deleteDataByIdSaga),
    takeEvery([actions.editData().type], editDataSaga),
    ...sagas,
  ];
};

export default crudSaga;
