import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  iconHeaderView: {
    width: width(100),
    height: height(6),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  iconView: {
    width: width(10),
    height: height(6),
    paddingLeft: width(4),
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "600",
  },
  headerView: {
    width: width(90),
    height: height(6),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});
export default styles;
