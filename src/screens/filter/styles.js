import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  attributeTitleText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: height(1),
    marginTop: height(2),
    paddingLeft: width(5),
  },
  checkBoxView: {
    width: width(90),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  submitBtn: {
    borderRadius: 5,
    marginBottom: height(3),
    marginTop: height(3),
  },
  modalStyle: {
    height: height(70),
  },
});
export default styles;
