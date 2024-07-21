import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import Images from "../../images";
import { subString } from "../../utils/Methods";
import { Feather, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import Timer from "../timer";
import MoreMenu from "../moreMenu";
import Favorite from "../favorite";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user";
import { format } from "date-fns";

export default function ListView({ item, myAds = false }) {
  const navigation = useNavigation();

  const user = useSelector(selectUser);

  const [extend, setExtend] = useState(false);
  const [endDate, setEndDate] = useState("");

  const handleExtend = () => {
    const newExtend = !extend;
    setExtend(newExtend);
  };

  const handleDetails = () => {
    navigation.navigate(ScreenNames.DETAILS, { item: item });
  };

  const formatDates = () => {
    // let parsedBidDuration;
    // try {
    //   parsedBidDuration = JSON.parse(route.params.item?.bidDuration);
    // } catch (error) {
    //   console.error("Error parsing bidDuration JSON:", error);
    // }

    // // Parse the end date from the bidDuration object
    // if (parsedBidDuration && parsedBidDuration.end) {
    //   const { end } = parsedBidDuration;
    //   if (end.year && end.month && end.day) {
    //     console.log("End Date", new Date(end.year, end.month - 1, end.day)); // month is zero-indexed in JavaScript Date
    //   }
    // }
    const bidDuration = item?.bidDuration;

    // console.log("Original bidDuration JSON string:", bidDuration);

    // Parse the JSON string
    const bidDurationObj = JSON.parse(bidDuration);

    // Log the parsed object
    // console.log("Parsed bidDuration object:", bidDurationObj);

    // Extract start and end dates
    const startDateInfo = bidDurationObj.start;
    const endDateInfo = bidDurationObj.end;

    // Log start and end date info
    // console.log("Start Date Info:", startDateInfo);
    // console.log("End Date Info:", endDateInfo);

    const startDate = new Date(
      startDateInfo.year,
      startDateInfo.month - 1,
      startDateInfo.day
    );
    const endfDate = new Date(
      endDateInfo.year,
      endDateInfo.month - 1,
      endDateInfo.day
    );

    // Log the formatted dates
    console.log("Formatted Start Date:", startDate);
    console.log(
      "Formatted End Date:",
      format(new Date(endfDate), "yyyy-MM-dd")
    );

    console.log("Setting Date");

    setEndDate(format(new Date(endfDate), "yyyy-MM-dd"));

    console.log("Date Set");
  };

  useEffect(() => {
    formatDates();
  }, [item]);

  return (
    <TouchableOpacity style={styles.parentView} onPress={handleDetails}>
      <View style={styles.listView}>
        {/* Item Image or default image */}
        {item?.images.length > 0 ? (
          <Image
            source={{ uri: item?.images[0] }}
            style={styles.imageStyle}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={Images.JNPLOGO}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        )}

        {/* Content View */}
        <View style={styles.contentView}>
          <View style={styles.textIconView}>
            {/* Title */}
            <Text style={styles.titleText} numberOfLines={1}>
              {item?.title}
            </Text>

            {/* Favorite Icon and More Menu */}

            {myAds ? (
              <MoreMenu item={item} />
            ) : (
              <View style={styles.iconView}>
                {user?._id != item?.addedBy ? (
                  <Favorite item={item} />
                ) : (
                  <FontAwesome size={15} />
                )}
              </View>
            )}
          </View>

          {/* Remaining Time */}
          <View style={styles.counterView}>
            <Timer date={endDate} />
            {/* <Text style={styles.labelText}>{item.bidDuration?.start}</Text> */}
            {/* <Text style={styles.valueText}>
            {timeLeft.months} M {timeLeft.days} D {timeLeft.hours} H{" "}
            {timeLeft.minutes} Min {timeLeft.seconds}Sec
          </Text> */}
          </View>

          <View style={styles.counterView}>
            <Text style={styles.labelText}>Highest Bid:</Text>
            <Text style={styles.valueText}>$10</Text>
          </View>

          <View style={styles.counterView}>
            <Text style={styles.labelText}>Seller From:</Text>
            <Text style={styles.valueText}>{item.details?.sellerFrom}</Text>
          </View>

          {extend ? (
            <TouchableOpacity
              style={styles.extendIconTouch}
              onPress={handleExtend}
            >
              <Feather name="chevron-up" size={25} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.extendIconTouch}
              onPress={handleExtend}
            >
              <Feather name="chevron-down" size={25} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {extend && (
        <View style={styles.counterView}>
          <Text style={styles.labelText}>Delivery To:</Text>

          {item.details?.deliveryTo.map((country, index) => {
            return (
              <View key={index} style={styles.countryView}>
                <Text style={styles.countryText}>{country}</Text>
              </View>
            );
          })}
        </View>
      )}
    </TouchableOpacity>
  );
}
