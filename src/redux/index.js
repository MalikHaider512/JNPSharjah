import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./slices/user";
import { biddingSliceReducer } from "./slices/bidding";
import { favoriteSliceReducer } from "./slices/favorites";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    bidding: biddingSliceReducer,
    favorites: favoriteSliceReducer,
  },
});
