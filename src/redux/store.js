import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import weatherReducer from './weather/weatherSlice';

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    middleware,
  },
});
