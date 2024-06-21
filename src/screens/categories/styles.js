import { Platform, StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  categoryFlatListView: {
    paddingBottom: Platform.OS == "ios" ? height(7) : height(6),
    margin: height(1),
    flexDirection: "row",
  },
  categoryView: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",

    borderTopLeftRadius: height(1),
    borderBottomLeftRadius: height(1),
    marginBottom: height(0.5),
    paddingVertical: height(0.7),
    // width: width(33),
    // height: height(10),
    marginVertical: height(0.3),
  },
  categoryText: {
    fontSize: 16,
    color: AppColors.black,
  },
  subCategoryFlatListView: {
    backgroundColor: "#E5E8E8",
    width: width(60),
    padding: height(0.5),
  },
  subCategoryView: {
    width: width(63),
    alignSelf: "center",
    backgroundColor: AppColors.white,
    padding: width(4),
    elevation: 1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  subCategoryText: {
    fontSize: 14,
    color: AppColors.black,
  },
});
export default styles;
