import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import { Button, Header } from "../../components";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import { MaterialIcons } from "@expo/vector-icons";
import Images from "../../images";

export default function Start() {
  const navigation = useNavigation();

  const handleSign = () => {
    navigation.navigate(ScreenNames.SIGNIN);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        {/* Back Icon */}
        <Header back={true} />

        <Image
          style={styles.imageStyle}
          resizeMode="contain"
          source={Images.JNPLOGO}
        />

        <Text style={styles.continueText}>You must login to continue</Text>

        <Button title="Login or Sign Up" press={handleSign} />
      </View>
    </ScreenWrapper>
  );
}
