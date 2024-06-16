import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { subString } from "../../utils/Methods";

export default function Header({ back, title, press, right }) {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      {back ? (
        <View style={styles.iconHeaderView}>
          <TouchableOpacity
            style={styles.iconView}
            onPress={back && press ? press : handleBack}
          >
            <MaterialIcons name="arrow-back-ios" size={20} />
          </TouchableOpacity>
          <Text style={styles.titleText}> {title}</Text>
          <Text style={styles.iconView}>{right}</Text>
        </View>
      ) : (
        <View style={styles.headerView}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
    </View>
  );
}
