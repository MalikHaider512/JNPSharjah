import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ViewProps,
  ViewStyle,
} from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";

export default function CustomModal({
  isVisible = false,
  closeModal,
  data,
  setValue,
  setModalState,
  title,
  viewStyle,
  searching = true,
}) {
  const [search, setSearch] = useState("");

  //   useEffect(() => {
  //     if (!isVisible) {
  //       setSearch("");
  //     }
  //   }, [isVisible]);
  return (
    <Modal
      isVisible={isVisible}
      hasBackdrop={true}
      backdropColor={AppColors.black}
      onBackdropPress={closeModal}
    >
      <View style={{ ...styles.modalView, ...viewStyle }}>
        {/* Title */}
        <Text style={styles.titleText}>{title}</Text>

        {/* Search Input */}
        {/* {searching && (
          <Input
            inputStyle={styles.searchInput}
            placeholder="Search"
            setState={setSearch}
          />
        )} */}

        {/* Render Data */}
        <FlatList
          data={
            data && data.length > 0
              ? data?.filter((item) =>
                  item.toLowerCase().includes(search.toLowerCase())
                )
              : []
          }
          style={styles.flatListStyle}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (setValue && setModalState && setSearch) {
                  setValue(item);
                  setModalState(false);
                  setSearch("");
                } else {
                  console.error("One or more functions are undefined");
                }
              }}
              style={styles.textView}
            >
              <Text style={styles.textStyle}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </Modal>
  );
}
