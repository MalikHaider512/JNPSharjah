import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  plusIcon: {
    width: width(20),
    height: height(7),
    marginBottom: height(3.5),
  },
  tabBarLabelStyle: {
    fontSize: 10,
    color: AppColors.black,
    paddingBottom: height(0.5),
  },
  tabBarStyle: {
    borderTopColor: AppColors.primary,
    borderTopWidth: 2,
  },
});
export default styles;
