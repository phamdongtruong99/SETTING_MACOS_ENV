import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

const crudSlice = ({ baseUrl, name }) => {
  const fetchAll = createAsyncThunk(`${name}/fetchAll`, (params) => {
    const querystring = new URLSearchParams(params);
    return axios.get(`${baseUrl}?${querystring}`).then((res) => res.data.data);
  });

  const fetchById = createAsyncThunk(`${name}/fetchById`, (id, params) =>
    axios.get(`${baseUrl}/${id}`).then((res) => res.data),
  );

  const deleteById = createAsyncThunk(`${name}/deleteById`, (id) =>
    axios.get(`${baseUrl}/${id}`).then(() => id),
  );

  const createOne = createAsyncThunk(`${name}/creatOne`, (data) =>
    axios.post(`${baseUrl}`, data).then((res) => res.data),
  );

  const updateById = createAsyncThunk(`${name}/creatOne`, (id, data) =>
    axios.patch(`${baseUrl}/${id}`, data).then((res) => res.data),
  );

  const adapter = createEntityAdapter();

  const slice = createSlice({
    name,
    initialState: adapter.getInitialState({
      isFetching: false,
      isCreating: false,
      isUpdating: false,
      isDeleting: false,
    }),
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchById.pending, (state) => {
        state.isFetching = true;
      });
      builder.addCase(fetchById.rejected, (state) => {
        state.isFetching = false;
      });
      builder.addCase(fetchById.fulfilled, (state, action) => {
        state.isFetching = false;
        adapter.upsertOne(state, action);
      });
      builder.addCase(fetchAll.pending, (state) => {
        state.isFetching = true;
      });
      builder.addCase(fetchAll.rejected, (state) => {
        state.isFetching = true;
      });
      builder.addCase(fetchAll.fulfilled, (state, action) => {
        state.isFetching = false;
        adapter.upsertMany(state, action);
      });
      builder.addCase(deleteById.pending, (state) => {
        state.isDeleting = true;
      });
      builder.addCase(deleteById.rejected, (state) => {
        state.isDeleting = false;
      });
      builder.addCase(deleteById.fulfilled, (state, action) => {
        state.isDeleting = false;
        adapter.removeOne(state, action);
      });
      builder.addCase(createOne.pending, (state) => {
        state.isCreating = true;
      });
      builder.addCase(createOne.rejected, (state) => {
        state.isCreating = false;
      });
      builder.addCase(createOne.fulfilled, (state, action) => {
        state.isCreating = false;
        adapter.upsertOne(state, action);
      });
      builder.addCase(updateById.pending, (state) => {
        state.isUpdating = true;
      });
      builder.addCase(updateById.rejected, (state) => {
        state.isUpdating = false;
      });
      builder.addCase(updateById.fulfilled, (state, action) => {
        state.isUpdating = false;
        adapter.upsertOne(state, action);
      });
    },
  });

  return {
    reducer: slice.reducer,
    ...adapter.getSelectors((state) => state[name]),
    fetchById,
    fetchAll,
    deleteById,
    updateById,
    createOne,
  };
};

export default crudSlice;
