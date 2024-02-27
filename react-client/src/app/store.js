import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { nasaApi } from '../slices/nasaApi';
import searchReducer from '../slices/searchSlice';

export const store = configureStore({
  reducer: {
    [nasaApi.reducerPath]: nasaApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nasaApi.middleware),
})

setupListeners(store.dispatch);
