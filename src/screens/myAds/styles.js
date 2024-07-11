import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  noAdView: {
    flex: 1,
    justifyContent: "center",
  },
  noAdImage: {
    width: width(90),
    height: height(70),
    alignSelf: "center",
  },
  noAdtext: {
    position: "absolute",
    alignSelf: "center",
    top: height(47),
    fontSize: 16,
    alignContent: "center",
    textAlign: "center",
    width: width(60),
    fontWeight: "600",
  },
});
export default styles;
