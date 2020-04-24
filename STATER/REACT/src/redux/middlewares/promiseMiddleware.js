const promiseMiddleware = (store) => (next) => (action) => {
  if (!(action instanceof Promise)) {
    return next(action);
  }
  return (async () => {
    const resolvedAction = await Promise.resolve(action);
    store.dispatch(resolvedAction);
  })();
};

export default promiseMiddleware;
