
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import dataReducer from './dataSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
