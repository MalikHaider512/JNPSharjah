import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  counterView: {
    flexDirection: "row",
    // justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: height(0.8),
    paddingRight: width(2),
    alignItems: "center",
    // backgroundColor: "red",
  },
  labelText: {
    width: width(41),
    maxWidth: width(42),
    fontSize: 16,
    fontWeight: "500",
    // color: AppColors.gray,
    // backgroundColor: "blue",
  },
  valueText: {
    width: width(41),
    maxWidth: width(43),
    fontSize: 16,
    // backgroundColor: "green",
  },
});
export default styles;
