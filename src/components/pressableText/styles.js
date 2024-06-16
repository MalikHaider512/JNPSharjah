import { StyleSheet } from "react-native";
import { height, width } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    width: width(90),
    alignSelf: "center",
    marginTop: height(2),
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: height(1),
  },
  pressableStyle: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
    marginTop: height(1),
  },
  valueStyle: {
    width: width(83),
    height: 30,
    fontSize: 16,
    color: AppColors.gray,
  },
});
export default styles;
