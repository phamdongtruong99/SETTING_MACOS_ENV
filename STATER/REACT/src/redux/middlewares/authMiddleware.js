export const authMiddleware = (store, action, dispatch) => {
  return (next) => (action) => {
    if (!action['@@redux-saga/SAGA_ACTION']) {
      console.log(store);
    }
    return next(action);
  };
};
