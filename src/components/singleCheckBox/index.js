import { View, Text } from "react-native";
import React from "react";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import CheckBox from "react-native-check-box";

export default function SingleCheckBox({ state, onPress, title, textStyle }) {
  return (
    <View style={styles.checkBoxView}>
      <CheckBox
        onClick={onPress}
        isChecked={state}
        checkBoxColor={AppColors.primary}
      />
      <Text style={{ ...styles.checkBoxText, ...textStyle }}>{title}</Text>
    </View>
  );
}
