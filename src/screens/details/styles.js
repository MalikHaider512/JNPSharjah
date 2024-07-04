import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  detailsParentView: {
    width: width(90),
    alignSelf: "center",
    elevation: 10,
  },
  swiperView: {
    width: width(100),
  },
  swiperStyle: {
    height: height(30),
    marginTop: height(1),
  },
  imageStyle: {
    width: width(90),
    height: height(30),
  },

  titleText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: height(1),
    marginTop: height(1),
  },

  detailView: {
    width: width(90),
    alignSelf: "center",
    marginTop: height(2),
    backgroundColor: AppColors.lightBlue,
    borderRadius: 10,
    padding: width(3),
  },
  detailText: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: height(2),
  },

  descriptionView: {
    width: width(90),
    alignSelf: "center",
    marginTop: height(2),
  },

  descriptionTitleText: {
    fontSize: 22,
    fontWeight: "600",
  },
  descriptionText: {
    backgroundColor: AppColors.white,
    padding: width(2),
    borderRadius: 10,
    color: "black",
  },

  readMoreLessBtn: {
    flexDirection: "row",
    width: width(30),
    height: 25,
    backgroundColor: AppColors.primary,
    borderRadius: 20,
    alignItems: "center",
    marginTop: height(1),
    justifyContent: "center",
  },
  emptyText: {
    marginBottom: height(2),
  },

  imageModalView: {
    alignSelf: "center",
    // flex: 1,
    height: height(100),
    width: width(100),
    backgroundColor: AppColors.black,
  },
  imageCloseIcon: {
    width: width(12),
    alignItems: "flex-start",
    alignSelf: "flex-end",
    marginTop: height(5),
    marginRight: width(3),
    padding: width(2),
  },
  imageModalSwipper: {
    height: height(70),
    alignSelf: "center",
  },
  selectedImageStyle: {
    width: width(98),
    height: height(80),
    alignSelf: "center",
    // backgroundColor: "red",
  },
  gridView: {
    marginBottom: height(1),
    justifyContent: "center",
    flexDirection: "row",
    // backgroundColor: "red",
  },
  gridAttributeText: {
    width: width(41),
    maxWidth: width(42),
    fontSize: 16,
    fontWeight: "500",
    // color: AppColors.gray,
    // backgroundColor: "blue",
  },
  gridText: {
    width: width(43),
    maxWidth: width(44),
    fontSize: 16,
    // backgroundColor: "green",
  },
});
export default styles;
