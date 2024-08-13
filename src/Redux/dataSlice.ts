// src/features/dataSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface DataState {
  data: Array<{ id: string; title: string }>;
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

// Create an async thunk for fetching data
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return (await response.json()) as Array<{ id: string; title: string }>;
  }
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

// Selector to access the state
export const selectData = (state: RootState) => state.data.data;
export const selectLoading = (state: RootState) => state.data.loading;
export const selectError = (state: RootState) => state.data.error;

export default dataSlice.reducer;
