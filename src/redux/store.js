import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './slices/campersSlice.js';
import favoritesReducer from './slices/favoritesSlice';
import filtersReducer from './slices/filtersSlice.js';


const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});

export default store;
