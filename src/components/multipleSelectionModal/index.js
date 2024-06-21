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
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import AppColors from "../../utils/AppColors";
import Button from "../button";
// import Input from "../input";

export default function MultipleSelectionModal({
  isVisible = false,
  closeModal,
  data,
  setValue,
  setModalState,
  title,
  viewStyle,
  searching = true,
  list,
}) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!isVisible) {
      setSearch("");
    }
  }, [isVisible]);
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
                if (setValue) {
                  setValue((prev) => {
                    // Remove "choose" from the previous state
                    const filteredPrev = prev.filter(
                      (i) => i.toLowerCase() !== "choose"
                    );

                    // Check if the item exists in the filtered state
                    if (filteredPrev.includes(item)) {
                      // Remove the item if it exists
                      return filteredPrev.filter((i) => i !== item);
                    } else {
                      // Add the item if it doesn't exist
                      return [...filteredPrev, item];
                    }
                  });
                }
              }}
              style={styles.textIconView}
            >
              <Text style={styles.textStyle}>{item}</Text>
              {list && list.includes(item) && <Entypo name="check" size={20} />}
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Button
          title="Confirm"
          press={() => {
            if (setModalState) {
              setModalState(false);
            }
          }}
        />
      </View>
    </Modal>
  );
}
