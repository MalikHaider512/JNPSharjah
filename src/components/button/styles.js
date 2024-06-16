import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  buttonView: {
    width: width(85),
    height: height(6),
    borderRadius: 30,
    alignItems: "center",
    alignSelf: "center",
    marginTop: height(3),
    padding: width(2),
    backgroundColor: AppColors.primary,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: AppColors.white,
  },
});
export default styles;
