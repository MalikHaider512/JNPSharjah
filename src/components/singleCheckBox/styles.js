import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  checkBoxView: {
    flexDirection: "row",
    paddingLeft: width(5),
    // marginTop: height(1),
    // backgroundColor: "green",
    height: height(4),
    alignItems: "center",
  },
  checkBoxText: {
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: width(3),
  },
});
export default styles;
