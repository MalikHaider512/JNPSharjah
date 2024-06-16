import { Platform, StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },

  listShimmer: {
    width: width(96),
    height: height(16),
    marginVertical: 5,
    borderRadius: 10,
    marginTop: height(1),
    ...Platform.select({
      ios: {
        shadowColor: AppColors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});
export default styles;
