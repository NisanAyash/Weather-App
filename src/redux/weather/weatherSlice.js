import { createSlice } from '@reduxjs/toolkit';
import {
  getLocationApi,
  getWeatherApi,
  getForecastApi,
  getCurrentByGeoLocation,
} from './weatherApi';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  places: [],
  current: {
    location: {},
    weather: {},
    forecast: [],
  },
  favorites: [],
  loading: false,
  error: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    handleFavorite: (state, { payload }) => {
      const exist = state.favorites.some((fav) => fav.location.Key === payload.location.Key);

      if (exist) {
        state.favorites = state.favorites.filter(
          (favorite) => favorite.location.Key !== payload.location.Key
        );
      } else {
        state.favorites.push({
          id: uuidv4(),
          locationName: payload.location.LocalizedName,
          ...payload,
        });
      }
    },
    changeCurrent: (state, { payload }) => {
      state.current = payload;
    },
  },
  extraReducers: {
    [getLocationApi.pending]: (state) => {
      state.error = '';
      state.loading = true;
    },
    [getLocationApi.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.places = payload;
    },
    [getLocationApi.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    },
    [getWeatherApi.pending]: (state) => {
      state.error = '';
      state.loading = true;
    },
    [getWeatherApi.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.current.location = payload.location;
      state.current.weather = payload.weather;
    },
    [getWeatherApi.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getForecastApi.pending]: (state) => {
      state.error = '';
      state.loading = true;
    },
    [getForecastApi.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.current.forecast = payload;
    },
    [getForecastApi.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getCurrentByGeoLocation.pending]: (state) => {
      state.error = '';
      state.loading = true;
    },
    [getCurrentByGeoLocation.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.current.location = payload;
    },
    [getCurrentByGeoLocation.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { handleFavorite, changeCurrent } = weatherSlice.actions;

export default weatherSlice.reducer;
