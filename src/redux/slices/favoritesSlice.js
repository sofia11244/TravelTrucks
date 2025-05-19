import { createSlice } from '@reduxjs/toolkit';

// localStorage'dan favorileri yükle
const loadFavoritesFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('favorites');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// localStorage'a favorileri kaydet
const saveFavoritesToLocalStorage = (favorites) => {
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch {""}
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: loadFavoritesFromLocalStorage(), // başlarken localStorage'dan yükle
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
        saveFavoritesToLocalStorage(state.items);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((id) => id !== action.payload);
      saveFavoritesToLocalStorage(state.items);
    },
    toggleFavorite: (state, action) => {
      if (state.items.includes(action.payload)) {
        state.items = state.items.filter((id) => id !== action.payload);
      } else {
        state.items.push(action.payload);
      }
      saveFavoritesToLocalStorage(state.items); 
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
