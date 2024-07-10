import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import styles from "./styles";
import AppColors from "../../utils/AppColors";
import { Button, Header, InputText } from "../../components";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { errorMessage, storeData, successMessage } from "../../utils/Methods";
import ScreenNames from "../../routes/routes";
import { useNavigation } from "@react-navigation/native";
import { selectUser } from "../../redux/slices/user";
import { deleteUser } from "../../api/user";

export default function ManageAccount() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const loginUser = useSelector(selectUser);

  const [deleteModal, setDeleteModal] = useState(false);
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const handleDelete = async () => {
    console.log("Deleting User");
    setLoading(true);

    const res = await deleteUser(loginUser?._id, password);

    console.log("Delete User Response", res);

    if (res === "User and their items deleted successfully") {
      //   dispatch(addUser({}));
      //   dispatch(setFavorite([]));
      //   dispatch(setLogin(false));
      //   storeData("");
      successMessage("Success", "Account deleted succeessfully.");
      //   setDeleteModal(false);
      navigation.navigate(ScreenNames.HOME);
    } else if (res?.error === "Wrong password") {
      errorMessage("Password", "Incorrect Password");
    } else {
      errorMessage("Error", "Account not delete");
    }
    setLoading(false);
  };

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        {/* Header */}
        <Header title="Manage Account" back={true} />

        {/* Delete Button */}
        <TouchableOpacity
          style={styles.deleteAccountBtn}
          onPress={openDeleteModal}
        >
          <AntDesign name="delete" size={20} color={AppColors.black} />
          <Text style={styles.deleteAccountText}>Delete Account</Text>
        </TouchableOpacity>

        <Modal
          visible={deleteModal}
          animationIn="fadeInUpBig"
          animationInTiming={500}
          backdropColor={AppColors.black}
          transparent={true}
          hasBackdrop={true}
          onBackdropPress={closeDeleteModal}
        >
          <View style={styles.modalView}>
            <InputText
              text="Enter Password"
              placeholder="Enter Password"
              viewStyle={styles.passwordInputView}
              setState={setPassword}
              password={true}
              ViewStyle={styles.passwordInputView}
              inputStyles={styles.passwordInput}
            />

            <View style={styles.buttonsView}>
              <Button
                title="Cancel"
                btnStyle={styles.cancelBtn}
                textStyle={styles.cancelText}
                press={closeDeleteModal}
              />

              <Button
                title={
                  loading ? (
                    <ActivityIndicator size="small" color={AppColors.white} />
                  ) : (
                    "Delete"
                  )
                }
                btnStyle={styles.deleteBtn}
                textStyle={styles.deleteText}
                press={handleDelete}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScreenWrapper>
  );
}
