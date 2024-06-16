import { View, Text, Image, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./styles";
import AppColors from "../../utils/AppColors";

export default function LoadingIndicator() {
  return (
    <View style={styles.parentView}>
      <ActivityIndicator color={AppColors.primary} size={"large"} />
    </View>
  );
}
