import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  bidTitleView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  highlightView: {
    width: width(44),
    height: height(4),
    textAlign: "center",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  unHighlightView: {
    width: width(40),
    color: "white",
    textAlign: "center",
    lineHeight: 24,
  },
  signText: {
    fontSize: 18,
    fontWeight: "700",
    alignSelf: "center",
    textAlignVertical: "center",
  },
  inputView: {
    width: width(80),
    borderRadius: 10,
    borderColor: AppColors.gray,
    paddingLeft: 10,
  },

  inputStyle: {
    width: width(75),
    height: height(6),
    fontSize: 14,
  },
  biddingView: {
    backgroundColor: AppColors.white,
    padding: width(1),
  },

  bidView: {
    height: height(6),
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: height(1),
  },
  inCreaseBidTouch: {
    width: width(25),
    height: height(6),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.nebula,
    borderTopRightRadius: height(3),
    borderBottomRightRadius: height(3),
    borderLeftWidth: 1,
    borderLeftColor: AppColors.gray,
  },

  bidTouch: {
    width: width(25),
    height: height(6),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.nebula,
  },

  decreaseBidTouch: {
    width: width(25),
    height: height(6),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.nebula,
    borderRightWidth: 1,
    borderRightColor: AppColors.gray,
    borderTopLeftRadius: height(3),
    borderBottomLeftRadius: height(3),
  },
  bidText: {
    fontSize: 16,
    fontWeight: "600",
  },
  btnView: {
    width: width(75),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
    marginTop: height(1),
    marginBottom: height(1),
  },
  btnStyle: {
    width: width(30),
    height: height(6),
    backgroundColor: AppColors.nebula,
    marginTop: 0,
    padding: 0,
    borderRadius: height(3),
  },
  btnTextStyle: {
    color: AppColors.black,
    fontSize: 14,
  },
});
export default styles;
