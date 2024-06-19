import biddingSlice from "./slice";
export const biddingSliceReducer = biddingSlice.reducer;
export const { setHighestBid, setTotalBids, setMyBid } = biddingSlice.actions;
export const selectHighestBid = (state) => state.bidding.highestBid;
export const selectTotalBids = (state) => state.bidding.totalBids;
export const selectMyBid = (state) => state.bidding.myBid;
export const selectBiddingData = (state) => state.bidding;
