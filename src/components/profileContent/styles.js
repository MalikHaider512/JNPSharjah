import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    width: width(90),
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: height(1),
    alignSelf: "center",
  },
  iconTextView: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconView: {
    width: 35,
    height: 30,
    backgroundColor: AppColors.alto,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: width(10),
  },
});
export default styles;
