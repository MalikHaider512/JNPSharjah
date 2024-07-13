import { View, Text } from "react-native";
import React from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import styles from "./styles";
import AppColors from "../../utils/AppColors";
import { Header } from "../../components";

export default function EditProfile() {
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header title="Edit Profile" back={true} />
      </View>
    </ScreenWrapper>
  );
}
