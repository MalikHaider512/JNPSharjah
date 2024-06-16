import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";

export default function PressableText({ title, value, press }) {
  return (
    <View style={styles.parentView}>
      <Text style={styles.titleStyle}>{title}</Text>

      <Pressable style={styles.pressableStyle} onPress={press}>
        <Text style={styles.valueStyle} numberOfLines={1}>
          {value}
        </Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={20}
          color={AppColors.gray}
        />
      </Pressable>
    </View>
  );
}
