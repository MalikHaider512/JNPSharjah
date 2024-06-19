import userSlice from "./slice";
export const userSliceReducer = userSlice.reducer;
export const {
  setIsLogin,
  setUserData,
  addFavorites,
  removeFavorites,
  addBid,
} = userSlice.actions;
export const selectIsLogin = (state) => state.user.isLogin;
export const selectUser = (state) => state.user.userData;
export const selectFavorites = (state) => state.user.favoritesList;
export const selectToken = (state) => state.user.token;
export const selectBid = (state) => state.user.bid;
