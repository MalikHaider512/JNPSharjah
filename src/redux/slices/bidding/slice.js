import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  highestBid: 10,
  totalBids: 10,
  myBid: 10,
};

const biddingSlice = createSlice({
  name: "bidding",
  initialState,
  reducers: {
    setHighestBid: (state, action) => {
      console.log("Highest Bid", action.payload);

      state.highestBid = action.payload;
    },
    setTotalBids: (state, action) => {
      console.log("Total Bids", action.payload);
      state.totalBids = action.payload;
    },

    setMyBid: (state, action) => {
      console.log("My  Bid", action.payload);
      state.myBid = action.payload;
    },
  },
});

export default biddingSlice;
