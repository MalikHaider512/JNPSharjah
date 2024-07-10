import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },

  deleteAccountBtn: {
    width: width(90),
    height: height(6),
    backgroundColor: AppColors.yellow,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: height(1.5),
    alignSelf: "center",
    marginTop: height(2),
  },
  deleteAccountText: {
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: "4%",
  },
  modalView: {
    backgroundColor: AppColors.white,
    padding: 20,
    borderRadius: 10,
    alignSelf: "center",
    width: width(80),
    height: height(27),
    borderWidth: 1,
    borderColor: AppColors.primary,
  },
  passwordInputView: {
    width: width(65),
    marginBottom: height(1),
  },
  passwordInput: {
    width: width(53),
    marginBottom: height(1),
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cancelBtn: {
    width: width(30),
    height: height(6),
    backgroundColor: AppColors.white,
    borderWidth: 1,
    borderColor: AppColors.gray,
  },
  deleteBtn: {
    width: width(30),
    height: height(6),
    backgroundColor: AppColors.red,
  },
  deleteText: {
    fontSize: 16,
    fontWeight: 600,
    color: AppColors.white,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: 600,
    color: AppColors.black,
  },
});
export default styles;
