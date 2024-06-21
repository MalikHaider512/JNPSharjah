import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import Images from "../../images";
import { subString } from "../../utils/Methods";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import Timer from "../timer";

export default function ListView({ item }) {
  const navigation = useNavigation();

  const [extend, setExtend] = useState(false);

  const handleExtend = () => {
    const newExtend = !extend;
    setExtend(newExtend);
  };

  const handleDetails = () => {
    navigation.navigate(ScreenNames.DETAILS, { item: item });
  };

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
          {/* Title */}
          <Text style={styles.titleText} numberOfLines={1}>
            {subString(item?.title, 23)}
          </Text>

          {/* Remaining Time */}
          <View style={styles.counterView}>
            <Timer date={"2024-11-31"} />
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
