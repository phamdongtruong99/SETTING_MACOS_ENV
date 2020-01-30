import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loading from './loading';
// import here
import auth from './auth/reducer';
import users from './users/reducer';
import brands from './brands/reducer';
import orders from './orders/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    loading,
    orders,
    users,
    brands,
  });
