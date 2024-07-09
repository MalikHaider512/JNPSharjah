import favoriteSlice from "./slice";

export const favoriteSliceReducer = favoriteSlice.reducer;

export const { setFavorite, addFavorite, removeFavorite } =
  favoriteSlice.actions;

export const selectFavoriteList = (state) => state.favorites.favoritetList;
