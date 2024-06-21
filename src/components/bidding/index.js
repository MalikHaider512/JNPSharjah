import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Timer from "../timer";
import styles from "./styles";
import AppColors from "../../utils/AppColors";
import InputText from "../inputText";
import { useDispatch, useSelector } from "react-redux";
import { addBid, selectUser } from "../../redux/slices/user";
import {
  contributeGroupBid,
  createBiddingGroup,
  getGroupBids,
  joinBiddingGroup,
  postSoloBid,
} from "../../api/bidding";
import {
  setHighestBid,
  setMyBid,
  setTotalBids,
} from "../../redux/slices/bidding";
import Button from "../button";

export default function Bidding({ item }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [bidType, setBidType] = useState("Solo Bid");
  const [bid, setBid] = useState(0);

  const handleIncreaseBid = () => {
    setBid(bid + 10);
  };

  const handleDecreaseBid = () => {
    if (bid > 10) {
      setBid(bid - 10);
    }
  };

  const handleBid = async () => {
    console.log("Amount", bid);
    console.log("User Id", user?._id);
    console.log("Item Id", item?._id);

    if (bidType === "Solo Bid") {
      let res = await postSoloBid(item?._id, user?._id, bid);
      console.log("Solo Bid Post Response", res);

      if (res?.message === "Bid placed successfully") {
        const matchingRecord = res.bids.filter(
          (bid) => bid.user_id === user?._id
        );

        const bidAmounts = res.bids.map((bid) => bid.amount);
        const highestBidAmount = Math.max(...bidAmounts);
        console.log("Random", Math.random());

        if (highestBidAmount > 0) {
          dispatch(setHighestBid(100));
        } else {
          dispatch(setHighestBid(0));
        }

        dispatch(setTotalBids(100));
        dispatch(setMyBid(100));

        dispatch(addBid(1));
        setBid(0);
      }
    } else {
      let res = await contributeGroupBid(
        "66656fb41af14b3d87c2cf03",
        user?._id,
        bid
      );
      console.log("Group Bid");
    }
  };

  const createGroup = async () => {
    console.log("Creating Group");
    console.log("Item Id", item?._id);
    console.log("User Id", user?._id);

    let res = await createBiddingGroup(item?._id, user?._id);
    console.log("Creating group response", res);
  };

  const joinGroup = async () => {
    console.log("Creating Group");
    console.log("Item Id", item?._id);
    console.log("User Id", user?._id);

    let res = await joinBiddingGroup(
      "66656fb41af14b3d87c2cf03",
      user?._id,
      "ek9a2ornh6t"
    );
    console.log("Creating group response", res);
  };

  const getrGoupBidData = async () => {
    let res = await getGroupBids(item?._id);
    console.log("Group Bidding Data", res);
  };

  useEffect(() => {
    if (bidType === "Solo Bid") {
      console.log("Solo Bidding");
    } else {
      getrGoupBidData();
    }
  }, [bidType]);

  return (
    <View>
      <View style={styles.bidTitleView}>
        <TouchableOpacity
          onPress={() => {
            setBidType("Solo Bid");
          }}
          style={
            bidType === "Solo Bid"
              ? styles.highlightView
              : styles.unHighlightView
          }
        >
          <Text style={styles.signText}>Solo Bid</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setBidType("Group Bid");
          }}
          style={
            bidType === "Group Bid"
              ? styles.highlightView
              : styles.unHighlightView
          }
        >
          <Text style={styles.signText}>Group Bid</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.biddingView}>
        <InputText
          label="Next Bid"
          viewStyle={styles.inputView}
          style={styles.inputStyle}
          value={bid.toString()}
          onChangeText={setBid}
          keyboardType="numeric"
          inputMode="numeric"
        />

        <View style={styles.bidView}>
          <TouchableOpacity
            style={styles.decreaseBidTouch}
            onPress={handleDecreaseBid}
          >
            <Text style={styles.bidText}>-$10</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bidTouch} onPress={handleBid}>
            <Text style={styles.bidText}>Bid</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inCreaseBidTouch}
            onPress={handleIncreaseBid}
          >
            <Text style={styles.bidText}>+ $10</Text>
          </TouchableOpacity>
        </View>

        {bidType === "Group Bid" && (
          <View style={styles.btnView}>
            <Button
              title="Create Group"
              press={createGroup}
              btnStyle={styles.btnStyle}
              textStyle={styles.btnTextStyle}
            />
            <Button
              title="Join Group"
              press={joinGroup}
              btnStyle={styles.btnStyle}
              textStyle={styles.btnTextStyle}
            />
          </View>
        )}

        <Text>
          You must have atleast 10% of the amount you want to bid in you wallet
        </Text>
      </View>
    </View>
  );
}
