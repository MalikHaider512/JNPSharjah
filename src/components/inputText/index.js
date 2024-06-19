import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";

export default function InputText({
  label,
  placeholder,
  setState,
  value,
  edit = true,
  keyType = "text",
  password = false,
  editingEnd,
  viewStyle,
  passwordViewStyle,
  passwordInputStyle,
  email,
}) {
  const [secure, setSecure] = useState(password);
  return (
    <View style={{ alignSelf: "center" }}>
      {label && <Text style={styles.textStyle}>{label}</Text>}
      <View style={[styles.iconInputView, viewStyle]}>
        <TextInput
          style={[password ? styles.iconInputStyle : styles.inputStyle]}
          value={value}
          secureTextEntry={secure}
          editable={edit}
          placeholder={placeholder}
          onChangeText={setState}
          onEndEditing={editingEnd}
          inputMode={keyType}
          autoCapitalize={email && "none"}
        />
        {password && (
          <TouchableOpacity
            onPress={() => {
              setSecure(!secure);
            }}
          >
            <Entypo
              name={!secure ? "eye" : "eye-with-line"}
              size={18}
              color={AppColors.gray}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
