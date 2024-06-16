import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";

export default function ProfileContent({
  iconName,
  text,
  press,
  language,
  forwardIcon = true,
}) {
  return (
    <TouchableOpacity style={styles.parentView} onPress={press}>
      <View style={styles.iconTextView}>
        <View style={styles.iconView}>
          {language ? (
            <FontAwesome
              name={iconName}
              size={20}
              color={AppColors.tangerine}
            />
          ) : (
            <Feather name={iconName} size={20} color={AppColors.tangerine} />
          )}
        </View>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      {forwardIcon && <MaterialIcons name="arrow-forward-ios" size={18} />}
    </TouchableOpacity>
  );
}
