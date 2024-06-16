import { View, Text } from "react-native";
import React from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import styles from "./styles";
import AppColors from "../../utils/AppColors";

export default function Home() {
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Text>Home</Text>
      </View>
    </ScreenWrapper>
  );
}
