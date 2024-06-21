import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  gridView: {
    flexDirection: "row",
    marginBottom: height(1),
  },
  gridAttributeText: {
    width: width(43),
    maxWidth: width(44),
    fontSize: 16,
    fontWeight: "500",
  },
  gridText: {
    width: width(43),
    maxWidth: width(44),
    fontSize: 16,
  },
});
export default styles;
