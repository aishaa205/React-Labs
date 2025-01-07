import { createSlice } from "@reduxjs/toolkit";
import Favourite from '../../pages/Favourite';

const initialState = {
  favoriteMovies: [],
};

const FavouriteSlice = createSlice({
  name: "favoritemovie",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const existingIndex = state.favoriteMovies.findIndex((m) => m.id === movie.id);

      if (existingIndex >= 0) {
        // If movie exists, remove it //check if it work or not
        state.favoriteMovies.splice(existingIndex, 1);
      } else {
        // If movie doesn't exist, add it
        state.favoriteMovies.push(movie);
      }
    },
    clearFavorites: (state) => {
      // Reset favorite movies
      state.favoriteMovies = [];
    },
  },
});

export const {
  toggleFavorite, 
  clearFavorites,
} = FavouriteSlice.actions;

export default FavouriteSlice.reducer;

