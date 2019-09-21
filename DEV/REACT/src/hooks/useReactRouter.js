import { useContext, useEffect } from 'react';
import { __RouterContext } from 'react-router';
import useForceUpdate from './useForceUpdate';

const INCORRECT_VERSION_ERROR = new Error(
  'use-react-router may only be used with react-router@^5.',
);

const MISSING_CONTEXT_ERROR = new Error(
  'useReactRouter may only be called within a <Router /> context.',
);

const useReactRouter = () => {
  const forceUpdate = useForceUpdate();
  if (!__RouterContext) {
    throw INCORRECT_VERSION_ERROR;
  }
  const context = useContext(__RouterContext);

  if (!context) {
    throw MISSING_CONTEXT_ERROR;
  }
  const forceUpdate = useForceUpdate();
  useEffect(() => context.history.listen(forceUpdate), [context]);
  return context;
};

export default useReactRouter;

// useReactRouter is a React Hook that provides pub - sub behavior for react - router.Unlike the withRouter Higher - Order
// Component, useReactRouter will re - render your component when the location changes!

// HOW TO USE : const { history, location, match } = useReactRouter();
