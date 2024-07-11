import { View, Text, Image } from "react-native";
import React from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import Images from "../../images";
import { Button } from "../../components";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";

export default function TradeOption() {
  const navigation = useNavigation();

  const handlePress = (option) => {
    console.log("Pressed", option);
    navigation.navigate(ScreenNames.CATEGORIES, { tradeOption: option });
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Image
          style={styles.imageStyle}
          resizeMode="contain"
          source={Images.JNPLOGO}
        />

        <Button
          title="Want To Buy"
          btnStyle={styles.buttonStyle}
          textStyle={styles.btnText}
          press={() => {
            handlePress("Buy");
          }}
        />

        <Button
          title="Want To Sell"
          btnStyle={styles.buttonStyle}
          textStyle={styles.btnText}
          press={() => {
            handlePress("Sell");
          }}
        />
      </View>
    </ScreenWrapper>
  );
}
