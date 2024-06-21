import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  modalView: {
    // flex: 1,
    backgroundColor: AppColors.white,
    padding: 20,
    borderRadius: 10,
    alignSelf: "center",
    width: width(90),
    height: height(100),
    alignItems: "center",
    justifyContent: "center",
    marginTop: height(6),
  },
  headerView: {
    width: width(90),
    height: height(6),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  closeIcon: {
    width: width(10),
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
    paddingLeft: width(5),
  },
  searchInput: {
    alignSelf: "center",
    marginLeft: 0,
  },
  flatListStyle: {
    width: width(80),
  },
  textView: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
    paddingVertical: 10,
  },

  textIconView: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.lightGrey,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height: height(6),
  },

  textStyle: {
    fontSize: 16,
    textAlign: "center",
  },
});
export default styles;
