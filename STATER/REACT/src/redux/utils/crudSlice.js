import { createSlice } from '@reduxjs/toolkit';

const crudSlice = ({ name, initialState = {}, reducers = [] }) =>
  createSlice({
    name,
    initialState: {
      allData: [],
      data: {},
      limit: null,
      page: null,
      ...initialState,
    },
    reducers: {
      getAllDataSuccess: (state, { payload }) => {
        state.allData = payload;
      },
      getDataByIdSuccess: (state, { payload }) => {
        state.data = payload;
      },
      deleteDataSuccess: (state, { payload }) => {
        state.allData = payload;
      },
      editDataSuccess: (state, { payload }) => {
        state.data = payload;
      },
      createDataSuccess: (state, payload) => {
        state.allData.push(payload);
      },
      ...reducers,
    },
  });

export default crudSlice;
