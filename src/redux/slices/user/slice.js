import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isLogin: false,
  token: null,
  myAdsList: [],
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

    setMyAdsList: (state, action) => {
      state.myAdsList = action.payload;
    },

    addBid: (state, action) => {
      state.bid = state.bid + 1;
    },
  },
});

export default userSlice;
