import { showError } from 'redux/exception';
import { setLoading } from 'redux/loading';

const crudSaga = (resource, actions, sagas = []) => {
  function* getAllDataSaga() {
    try {
    } catch (error) {
      yield put(setLoading(false));
      showError(err);
    }
  }

  function* getDataByIdSaga() {
    try {
    } catch (error) {
      yield put(setLoading(false));
      showError(err);
    }
  }
  function* editDataSaga() {
    try {
    } catch (error) {
      yield put(setLoading(false));
      showError(err);
    }
  }

  function* createDataSaga() {
    try {
    } catch (error) {
      yield put(setLoading(false));
      showError(err);
    }
  }

  function* deleteDataSaga() {
    try {
    } catch (error) {
      yield put(setLoading(false));
      showError(err);
    }
  }

  return [
    takeLatest([actions.getAllData().type], getAllDataSaga),
    takeLatest([actions.getDataById().type], getDataByIdSaga),
    takeEvery([actions.createData().type], createDataSaga),
    takeEvery([actions.deleteData().type], deleteDataSaga),
    takeEvery([actions.editData().type], editDataSaga),
    ...sagas,
  ];
};

export default crudSaga;
