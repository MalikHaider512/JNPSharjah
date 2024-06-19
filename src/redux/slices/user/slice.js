import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isLogin: false,
  token: null,
  favoritesList: [],
  bid: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    addFavorites: (state, action) => {
      state.favoritesList = [action.payload, ...state.favoritesList];
    },
    removeFavorites: (state, action) => {
      const newList = state.favoritesList.filter((item) => {
        return item !== action.payload;
      });
      state.favoritesList = newList;
    },
    addBid: (state, action) => {
      state.bid = state.bid + 1;
    },
  },
});

export default userSlice;
