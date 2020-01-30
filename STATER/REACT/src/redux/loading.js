import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const usersSlice = createSlice({
  name: 'Loading',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

const { actions, reducer } = usersSlice;

export const { setLoading } = actions;
export default reducer;
