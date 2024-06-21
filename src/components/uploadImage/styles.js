import { Platform, StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    width: width(90),
    minHeight: 220,
    backgroundColor: AppColors.blackHaze,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: AppColors.primary,
  },
  uploadView: {
    alignItems: "center",
  },

  cameraView: {
    width: width(28),
    height: height(11),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.wildSand,
    ...Platform.select({
      ios: {
        shadowColor: AppColors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  addText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  uptoText: {
    fontSize: 12,
    textAlign: "center",
  },
  sortableListStyle: {
    width: width(90),
    height: 120,
    marginBottom: 0,
    paddingBottom: 0,
    alignSelf: "center",
  },
  imageRowView: {
    marginBottom: height(1),
  },
  renderImageView: {
    backgroundColor: AppColors.gray,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  renderImageStyle: {
    width: 100,
    height: 100,
    borderWidth: 1,
    margin: 2,
  },
});
export default styles;
