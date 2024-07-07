import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Menu, MenuDivider, MenuItem } from "react-native-material-menu";
import { AntDesign, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppColors from "../../utils/AppColors";
import Modal from "react-native-modal";
import Button from "../button";
import ScreenNames from "../../routes/routes";

export default function MoreMenu({ item }) {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  const handleEdit = () => {
    setVisible(false);
    navigation.navigate(ScreenNames.ADPOST, {
      edit: true,
      category: item?.category,
      data: item,
    });
  };

  const handleRefresh = async () => {
    //   let res = await refreshAd(item?._id);
    //   console.log("Refresh Ad Response", res);

    //   if (res?.message === `Item 'createdAt' timestamp refreshed`) {
    //     successMessage("Refresh", "Ad Refreshed");
    //     const query = {
    //       addedBy: user._id,
    //     };
    //     let res = await getMyAds(query);
    //     dispatch(setMyAds(res?.items));
    //   } else {
    //     infoMessage("Refresh", "You can refresh ad after 3 Hours");
    //   }

    setVisible(false);
  };

  const handleMute = async () => {
    //   let res = await muteItem(item?._id);

    //   if (res?.message === "Item hidden successfully") {
    //     successMessage("Mute", "Item Muted successfully");
    //     const query = {
    //       addedBy: user._id,
    //     };
    //     let res = await getMyAds(query);
    //     dispatch(setMyAds(res?.items));
    //   } else {
    //     errorMessage("Mute", "Item Not Muted");
    //   }
    setVisible(false);
  };

  const handleUNMute = async () => {
    //   let res = await unMuteItem(item?._id);
    //   if (res?.message === "Item unhidden successfully") {
    //     successMessage("Unmute", "Item Unmuted successfully");
    //     const query = {
    //       addedBy: user._id,
    //     };
    //     let res = await getMyAds(query);
    //     dispatch(setMyAds(res?.items));
    //   } else {
    //     errorMessage("Unmute", "Item Not Unmuted");
    //   }
    setVisible(false);
  };

  const deleteAd = () => {
    setVisible(false);
    setTimeout(openModal, 500);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDelete = async () => {
    setModalVisible(false);

    // let res = await deleteItem(item?._id);
    // deleteItemFromfirebase();
    // if (res?.message === "Item and associated images successfully deleted") {
    //   successMessage("Item Delete", "Item Deleted Successfully");

    //   const query = {
    //     addedBy: user._id,
    //   };
    //   let res = await getMyAds(query);
    //   dispatch(setMyAds(res));
    // } else {
    //   errorMessage("Item Delete", "Error in deleting item");
    // }
    setVisible(false);
  };

  return (
    <View>
      <Menu
        visible={visible}
        onRequestClose={closeMenu}
        anchor={
          <TouchableOpacity style={styles.moreIconView} onPress={openMenu}>
            <Feather name="more-vertical" size={15} />
          </TouchableOpacity>
        }
        style={styles.menuStyle}
      >
        <MenuItem onPress={handleEdit}>
          <View style={styles.menuItemView}>
            <Feather style={styles.menuItemIcon} name="edit" size={15} />
            <Text style={styles.menuItemText}>Edit</Text>
          </View>
        </MenuItem>

        <MenuDivider color={AppColors.gray} />

        {!item?.hidden && (
          <MenuItem onPress={handleRefresh}>
            <View style={styles.menuItemView}>
              <SimpleLineIcons
                style={styles.menuItemIcon}
                name="refresh"
                size={15}
              />
              <Text style={styles.menuItemText}>Refresh</Text>
            </View>
          </MenuItem>
        )}

        <MenuDivider color={AppColors.gray} />

        <MenuItem onPress={item?.hidden ? handleUNMute : handleMute}>
          <View style={styles.menuItemView}>
            <AntDesign
              name={item?.hidden ? "playcircleo" : "pause"}
              size={15}
              style={styles.menuItemIcon}
            />

            <Text style={styles.menuItemText}>
              {item?.hidden ? "Unmute" : "Mute"}
            </Text>
          </View>
        </MenuItem>

        <MenuDivider color={AppColors.gray} />

        <MenuItem onPress={deleteAd}>
          <View style={styles.menuItemView}>
            <AntDesign
              style={{ ...styles.menuItemIcon, ...styles.deleteIcon }}
              name="delete"
              size={15}
            />
            <Text style={{ ...styles.menuItemText, ...styles.deleteIcon }}>
              Delete
            </Text>
          </View>
        </MenuItem>
      </Menu>

      <Modal
        backdropColor={AppColors.black}
        hasBackdrop={true}
        transparent={true}
        isVisible={modalVisible}
        animationType="fade"
        onBackdropPress={closeModal}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Do you want to delete?</Text>

          <View style={styles.btnsView}>
            <Button
              title="Cancel"
              press={closeModal}
              btnStyle={styles.cancelBtn}
            />

            <Button
              title="Delete"
              press={handleDelete}
              btnStyle={styles.deleteBtn}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
