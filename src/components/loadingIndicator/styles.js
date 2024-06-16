import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: width(30),
    height: height(40),
    alignSelf: "center",
  },
});
export default styles;
