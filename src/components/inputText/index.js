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
  inputStyles,
  passwordViewStyle,
  passwordInputStyle,
  email,
  multiline = false,
}) {
  const [secure, setSecure] = useState(password);
  return (
    <View style={{ alignSelf: "center" }}>
      {label && <Text style={styles.textStyle}>{label}</Text>}
      <View style={[styles.iconInputView, viewStyle]}>
        <TextInput
          style={[
            password ? styles.iconInputStyle : styles.inputStyle,
            inputStyles,
          ]}
          value={value}
          secureTextEntry={secure}
          editable={edit}
          placeholder={placeholder}
          onChangeText={setState}
          onEndEditing={editingEnd}
          keyboardType={keyType}
          autoCapitalize={email && "none"}
          multiline={multiline}
        />
        {password && (
          <TouchableOpacity
            onPress={() => {
              setSecure(!secure);
            }}
            style={styles.iconView}
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
