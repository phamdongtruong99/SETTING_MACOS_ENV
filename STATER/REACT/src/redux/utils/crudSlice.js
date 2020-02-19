/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';
import { capitalize } from 'utils/string';

export const PRIMARY_KEY = '_id';

const crudSlice = ({ name, initialState = {}, reducers = {} }) => {
  const { actions, reducer } = createSlice({
    name: capitalize(name),
    initialState: {
      allData: [],
      data: {},
      totalPage: 0,
      totalItems: 0,
      offset: 0,
      limit: null,
      page: null,
      ...initialState,
    },
    reducers: {
      // actions
      getAllData: () => {},
      getDataById: () => {},
      deleteDataById: () => {},
      createData: () => {},
      editData: () => {},
      // reducers
      getAllDataSuccess: (state, { payload }) => {
        state.allData = payload.items.map((item, index) => {
          return {
            ...item,
            key: (payload.currentPage - 1) * payload.limit + index + 1,
          };
        });
        state.totalPage = payload.totalPage;
        state.totalItems = payload.totalItems;
        state.limit = payload.limit;
        state.page = payload.currentPage;
      },
      getDataByIdSuccess: (state, { payload }) => {
        state.data = payload;
      },
      deleteDataSuccess: (state, { payload }) => {
        state.allData.filter(
          data => data[PRIMARY_KEY] !== payload[PRIMARY_KEY],
        );
      },
      editDataSuccess: (state, { payload }) => {
        state.allData = state.allData.map(data => {
          if (data[PRIMARY_KEY] === payload[PRIMARY_KEY]) {
            return { ...data, ...payload, key: data.key };
          }
          return data;
        });
        state.data = { ...payload, key: state.data.key };
      },
      createDataSuccess: (state, { payload }) => {
        state.allData.push({
          ...payload,
          key: state.totalItems + 1,
        });
      },
      ...reducers,
    },
  });

  return { actions, reducer };
};
export default crudSlice;
