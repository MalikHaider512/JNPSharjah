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
import { deleteAd } from "../../api/ads";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setMyAdsList } from "../../redux/slices/user";
import { errorMessage, successMessage } from "../../utils/Methods";

export default function MoreMenu({ item }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(selectUser);

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

  const deletAd = () => {
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

    let res = await deleteAd(item?._id);
    console.log("Delete Item Response", res);
    if (res?.message === "Item and associated data successfully deleted") {
      successMessage("Item Delete", "Item Deleted Successfully");

      let res = await getMyAds(user._id);
      dispatch(setMyAdsList(res));
    } else {
      errorMessage("Item Delete", "Error in deleting item");
    }
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

        <MenuItem onPress={deletAd}>
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
