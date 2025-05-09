import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [], // camper ids or all nesne tutulabilir
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((id) => id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      if (state.items.includes(action.payload)) {
        state.items = state.items.filter((id) => id !== action.payload);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
