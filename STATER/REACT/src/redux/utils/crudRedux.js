import crudSaga from './crudSaga';
import crudSlice from './crudSlice';

const crudRedux = ({ name, initialState = {}, reducers = {} }) => {
  const { actions, reducer } = crudSlice({
    name: name,
    initialState,
    reducers,
  });
  const sagas = crudSaga(name, actions);
  return { sagas, actions, reducer };
};
export default crudRedux;
