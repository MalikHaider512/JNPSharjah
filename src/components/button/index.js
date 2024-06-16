import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function Button({ title, btnStyle, textStyle, onPress }) {
  return (
    <TouchableOpacity style={[styles.buttonView, btnStyle]} onPress={onPress}>
      <Text style={{ ...styles.buttonText, ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
}
