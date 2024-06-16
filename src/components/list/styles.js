import { Platform, StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    width: width(95),
    backgroundColor: AppColors.white,
    padding: width(2),
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 2,
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
  imageStyle: {
    width: width(33),
    height: height(17),
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: AppColors.primary,
  },
  listView: {
    width: width(95),
    flexDirection: "row",
    alignItems: "center",
  },

  contentView: {
    width: width(55),
    marginStart: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 3,
  },
  counterView: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: height(0.8),
    paddingRight: width(2),
    alignItems: "center",
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
  },
  valueText: {
    fontSize: 16,
  },
  countryView: {
    minWidth: width(19),
    height: height(4),
    borderWidth: 1,
    marginRight: width(2),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderColor: AppColors.primary,
    marginBottom: height(0.5),
    paddingStart: width(2),
    paddingEnd: width(2),
  },
  countryText: {
    fontSize: 16,
  },
  extendIconTouch: {
    width: width(10),
    alignSelf: "flex-end",
    marginRight: width(2),
    alignItems: "center",
  },
});
export default styles;
