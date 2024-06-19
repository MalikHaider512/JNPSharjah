import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function Button({ title, btnStyle, textStyle, press }) {
  return (
    <TouchableOpacity style={[styles.buttonView, btnStyle]} onPress={press}>
      <Text style={{ ...styles.buttonText, ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
}
