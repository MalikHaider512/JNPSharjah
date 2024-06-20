import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  splitView: {
    flex: 1,
    flexDirection: "row",
  },
  categoryListView: {
    width: width(35),
    marginStart: 10,
  },
  subCategoryListView: {
    width: width(57),
    marginStart: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    padding: 10,
    backgroundColor: AppColors.alto,
    marginBottom: 10,
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: "#6e3b6e",
  },
  itemText: {
    fontSize: 18,
    color: "#000",
  },
});
export default styles;
