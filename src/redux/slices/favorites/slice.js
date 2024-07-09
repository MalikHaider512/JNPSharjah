import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  favoritetList: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      state.favoritetList = action.payload;
    },
    addFavorite: (state, action) => {
      state.favoritetList = [action.payload, ...state.favoritetList];
    },

    removeFavorite: (state, action) => {
      const newList = state.favoritetList.filter((item) => {
        return item !== action.payload;
      });
      state.favoritetList = newList;
    },
  },
});

export default favoriteSlice;
