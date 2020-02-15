import crudRedux from 'redux/utils/crudRedux';

export const { sagas, actions, reducer } = crudRedux({
  name: 'users',
});

export default reducer;
