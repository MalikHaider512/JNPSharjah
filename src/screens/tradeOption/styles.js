import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    alignItems: "center",
  },
  imageStyle: {
    width: width(80),
    height: height(40),
  },
  buttonStyle: {
    width: width(60),
    height: height(13),
    backgroundColor: AppColors.alto,
  },

  btnText: {
    color: AppColors.black,
  },
});
export default styles;
