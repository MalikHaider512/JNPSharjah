import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  moreIconView: {
    width: width(6),
    height: height(4),
    // backgroundColor: "rgba(19,232,144,.2)",
    backgroundColor: AppColors.lightGrey,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    // alignSelf: "flex-end",
  },
  menuStyle: {
    borderRadius: 10,
  },
  menuItem: {
    alignSelf: "center",
  },

  menuItemView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  menuItemIcon: {
    paddingLeft: 10,
  },
  menuItemText: {
    paddingLeft: 8,
  },
  deleteIcon: {
    color: AppColors.red,
  },
  modalView: {
    width: width(90),
    height: height(20),
    backgroundColor: AppColors.white,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: AppColors.lightGrey,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: height(2),
  },
  btnsView: {
    width: width(70),
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  cancelBtn: {
    width: width(30),
  },
  deleteBtn: {
    width: width(30),
    backgroundColor: AppColors.red,
  },
});
export default styles;
