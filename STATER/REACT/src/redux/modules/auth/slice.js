import { createSlice, createAction } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  isAuth: !!localStorage.getItem('sessionToken'),
  // isAuth: true,
  error: {
    isFailure: false,
    messages: '',
  },
};

const { actions, reducer } = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    loginSuccess: state => {
      state.isAuth = true;
    },
    logout: state => {
      state.isAuth = false;
      localStorage.removeItem('sessionToken');
    },
    loginFairlure: (state, { payload }) => {
      state.error.isFailure = true;
      state.error.messages = payload;
    },
    getInfoSuccess: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const login = createAction('Auth/login');
export const getInfo = createAction('Auth/getInfo');
export const { loginSuccess, logout, getInfoSuccess, loginFairlure } = actions;
export default reducer;
