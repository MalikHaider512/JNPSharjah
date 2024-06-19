import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },

  imageStyle: {
    width: width(80),
    height: height(40),
    alignSelf: "center",
    marginTop: height(5),
    marginBottom: height(5),
  },
  continueText: {
    fontSize: 18,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: height(1.5),
  },
});
export default styles;
