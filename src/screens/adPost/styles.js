import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  inputView: {
    width: width(90),
    borderRadius: 10,
    borderColor: AppColors.lightGrey,
    paddingLeft: 10,
  },

  inputStyle: {
    width: width(85),
    height: height(6),
    fontSize: 14,
  },
  descriptionInput: {
    height: height(10),
    maxHeight: height(20),
    textAlignVertical: "top",
    padding: width(1),
    width: width(85),
  },

  modalStyle: {
    height: height(70),
  },
  errorText: {
    color: AppColors.red,
    marginStart: width(5),
  },
});
export default styles;
