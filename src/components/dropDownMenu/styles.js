import { StyleSheet } from "react-native";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    bottom: 10,
    position: "absolute",
    width: "95%",
    height: 120,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    borderRadius: 10,
    backgroundColor: AppColors.white,
    width: "95%",
    height: 100,
    justifyContent: "space-evenly",
  },
  smallButtonContainer: {
    borderRadius: 10,
    backgroundColor: AppColors.white,
    width: "95%",
    height: 50,
    justifyContent: "space-evenly",
  },
  button: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },

  cancelBtn: {
    marginTop: "2%",
    alignSelf: "center",
    width: "85%",
    height: 40,
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: AppColors.white,
    alignItems: "center",
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: AppColors.blue,
  },
  cancel_Text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: AppColors.red,
  },
  line: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: AppColors.black,
    height: 0.5,
  },
});

export default styles;
