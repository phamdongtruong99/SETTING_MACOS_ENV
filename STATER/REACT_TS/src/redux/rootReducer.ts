import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux-starter-kit';
import { History } from 'history';

const rootReducer = (history: History): any =>
  combineReducers({
    router: connectRouter(history),
  });

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer;
