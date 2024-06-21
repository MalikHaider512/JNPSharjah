import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  counterView: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: height(0.8),
    paddingRight: width(2),
    alignItems: "center",
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
  },
  valueText: {
    fontSize: 16,
  },
});
export default styles;
