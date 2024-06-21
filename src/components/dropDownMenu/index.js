import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import AppColors from "../../utils/AppColors";
import styles from "./styles";

export default function DropDownMenu({
  isVisible = false,
  onClose = () => {},
  onPressFirstBtn = () => {},
  onPressSecondBtn = () => {},
  firstBtnText = "",
  secondBtnText = "",
  thirdText = "",
  onPressThirdBtn = () => {},
}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="fadeInUpBig"
      animationInTiming={500}
      backdropColor={AppColors.black}
    >
      <View style={styles.modalContainer}>
        <View
          style={[
            firstBtnText && !secondBtnText && !thirdText
              ? styles.smallButtonContainer
              : styles.buttonContainer,
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={onPressFirstBtn}
          >
            <Text style={styles.btnText}>{firstBtnText}</Text>
          </TouchableOpacity>

          {secondBtnText !== "" && (
            <>
              <View style={styles.line} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={onPressSecondBtn}
              >
                <Text style={styles.btnText}>{secondBtnText}</Text>
              </TouchableOpacity>
            </>
          )}
          {thirdText !== "" && (
            <>
              <View style={styles.line} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={onPressThirdBtn}
              >
                <Text style={styles.btnText}>{thirdText}</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cancelBtn}
          onPress={onClose}
        >
          <Text style={styles.cancel_Text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
