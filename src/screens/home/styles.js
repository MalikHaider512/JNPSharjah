import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  logoView: {
    paddingStart: width(2),
  },

  jnpLogo: {
    width: width(40),
    height: height(10),
  },

  headerView: {
    width: width(93),
    height: height(6),
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },

  searchView: {
    width: width(80),
    height: height(6),
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: AppColors.white,
  },

  searchInput: {
    width: width(70),
    paddingLeft: 10,
  },
  filterIcon: {
    width: width(10),
    height: height(6),
    borderWidth: 1,
    borderColor: AppColors.primary,
    borderRadius: 5,
    marginLeft: width(4),
    alignItems: "center",
    justifyContent: "center",
  },

  searchIcon: {
    width: width(12),
    height: height(6),
    alignItems: "center",
    justifyContent: "center",
  },

  resultView: {
    width: width(94),
    flexDirection: "row",
    alignSelf: "center",
    marginTop: height(2),
    maxWidth: width(98),
    justifyContent: "space-between",
    alignItems: "center",
  },
  resultText: {
    fontSize: 12,
    maxWidth: width(55),
  },
  sortingView: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuStyle: {
    borderRadius: 10,
  },
  menuAnchorView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  menuAnchorText: {
    fontSize: 12,
  },

  flatListStyle: {
    flex: 1,
    width: width(96),
    alignSelf: "center",
    backgroundColor: "red",
  },
  gridCardView: {
    width: width(48),
    alignItems: "center",
    alignSelf: "center",
  },
  noAdView: {
    flex: 1,
    justifyContent: "center",
  },
  noAdImage: {
    width: width(90),
    height: height(70),
    alignSelf: "center",
  },
  noAdtext: {
    position: "absolute",
    alignSelf: "center",
    top: height(47),
    fontSize: 16,
    alignContent: "center",
    textAlign: "center",
    width: width(60),
    fontWeight: "600",
  },
  emptyText: {
    marginBottom: height(2),
  },
});
export default styles;
