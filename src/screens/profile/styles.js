import { Platform, StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  imageView: {
    width: width(100),
    height: height(35),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height(1),
  },
  imageStyle: {
    width: width(40),
    height: height(20),
    borderRadius: height(20),
    backgroundColor: "black",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: height(1),
  },
  emailText: {
    fontSize: 14,
    // marginTop: height(0.5),
  },
  profileBtn: {
    backgroundColor: AppColors.defaultbackground,
    borderColor: AppColors.primary,
    borderWidth: 1,
    width: width(40),
    marginTop: height(1),
    marginBottom: height(1),
  },
  profileText: {
    color: AppColors.primary,
    fontSize: 15,
    fontWeight: "500",
  },
  contentView: {
    width: width(100),
    height: height(53),
    backgroundColor: AppColors.wildSand,
    borderTopLeftRadius: 40,
    borderTopEndRadius: 40,
    alignItems: "center",
    padding: width(8),
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
});
export default styles;
