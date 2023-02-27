import { configureStore } from '@reduxjs/toolkit';
import namesReducer from './namesSlice';

export const store = configureStore({
  reducer: {
    names: namesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
