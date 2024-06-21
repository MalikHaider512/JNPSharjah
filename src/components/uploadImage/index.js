import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import AppColors from "../../utils/AppColors";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import DropDownMenu from "../dropDownMenu";
import * as ImagePicker from "expo-image-picker";
import SortableList from "react-native-sortable-list";
import { infoMessage } from "../../utils/Methods";

export default function UploadImage({
  list,
  setList,
  press,
  parent,
  img,
  size,
  addText,
  uptoText,
}) {
  const [imageModal, setImageModal] = useState(false);

  const openImageModal = () => {
    if (list.length < 9) {
      setImageModal(true);
    } else {
      infoMessage("Limit Exceeded", "You can select up to 9 images.");
    }
  };

  const openCamera = async () => {
    setImageModal(false);
    try {
      let result = await ImagePicker.launchCameraAsync({})
        .then((a) => {
          const selectedImages = a?.assets.map((imageUri) => {
            if (list?.length < 5) {
              return Platform.OS === "android"
                ? imageUri.uri
                : imageUri.uri.replace("file://", "");
            }
          });

          setList([...list, ...selectedImages]);
        })
        .catch((e) => console.log("my log", e));
    } catch (error) {
      "Image picker error:", error;
    }
  };

  const openGallery = async () => {
    setTimeout(async () => {
      setImageModal(false);
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        selectionLimit: 9 - list.length,
      })
        .then((result) => {
          if (result.cancelled) {
            return;
          }

          const selectedImages = result.assets.map((imageUri) => {
            return Platform.OS === "android"
              ? imageUri.uri
              : imageUri.uri.replace("file://", "");
          });

          setList([...list, ...selectedImages]);
        })
        .catch((e) => console.log("Error selecting images from gallery:", e));
    }, 1000);
  };

  function openPicker(type = 0) {
    setImageModal(false);
    setTimeout(type == 0 ? openCamera : openGallery, 1000);
  }

  const renderRow = ({ data, index, active }) => {
    return (
      <View style={styles.imageRowView}>
        <TouchableOpacity
          style={styles.renderImageView}
          onPress={() => {
            let temp;
            temp = list.filter((i) => i !== data);
            setList(temp);
          }}
        >
          <MaterialIcons name="close" size={12} color="white" />
        </TouchableOpacity>
        <Image
          style={styles.renderImageStyle}
          source={{ uri: data }}
          // resizeMode="contain"
          key={index}
        />
      </View>
    );
  };

  const onReleaseRow = (_, currentOrder) => {
    setList(currentOrder.map((key) => list[key]));
  };

  useEffect(() => {
    ImagePicker.requestCameraPermissionsAsync();
  }, []);
  return (
    <View style={styles.parentView}>
      {/* Upload Images */}
      <View style={styles.uploadView}>
        {/* <LinearGradient
          colors={[
            AppColors.primary,
            AppColors.caribbeanGreen,
            AppColors.java,
            AppColors.nebula,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.cameraView}
        > */}
        <TouchableOpacity style={styles.cameraView} onPress={openImageModal}>
          <Entypo name="camera" size={50} color={AppColors.primary} />
        </TouchableOpacity>
        {/* </LinearGradient> */}
        <Text
          style={{ ...styles.addText, fontSize: list.length > 0 ? 14 : 18 }}
        >
          Add Images
        </Text>
        <Text
          style={{ ...styles.uptoText, fontSize: list.length > 0 ? 11 : 14 }}
        >
          You can upload upto 9 images
        </Text>
      </View>

      {/* Render Images */}

      {list.length > 0 && (
        <SortableList
          data={list}
          renderRow={renderRow}
          onReleaseRow={onReleaseRow}
          horizontal={true}
          style={styles.sortableListStyle}
        />
      )}

      <DropDownMenu
        isVisible={imageModal}
        firstBtnText="Take Photo"
        secondBtnText="Choose from Library"
        onPressFirstBtn={() => {
          openPicker(0);
        }}
        onPressSecondBtn={() => {
          openPicker(1);
        }}
        onClose={() => setImageModal(false)}
      />
    </View>
  );
}
