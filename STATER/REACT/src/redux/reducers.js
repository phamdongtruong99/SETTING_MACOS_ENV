import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth/slice';
import loading from './utils/loading';
// import here
import users from './users';

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    users,
  });
