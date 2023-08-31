import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { missionsApi } from '../api/missionsApi';
import payloadReducer from './payload/payloadSlice';

const store = configureStore({
  reducer: {
    [missionsApi.reducerPath]: missionsApi.reducer,
    payload: payloadReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(missionsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
