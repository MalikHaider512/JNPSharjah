import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  logoView: {
    width: width(80),
    height: height(25),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: height(1),
  },
  logoJNPText: {
    fontSize: 50,
    fontWeight: "bold",
    color: AppColors.primary,
  },

  logoSharjahText: {
    fontSize: 50,
    fontWeight: "bold",
    color: AppColors.tangerine,
  },
  logoImageStyle: {
    width: width(80),
    height: height(25),
    alignSelf: "center",
    marginBottom: height(1),
  },

  welcomeText: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "700",
  },
  detailsText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
    marginBottom: height(1),
  },
  errorText: {
    color: AppColors.red,
    marginStart: width(10),
  },
  loginBtnStyle: {
    marginTop: height(3),
  },

  forgetTouch: {
    height: height(4),
    justifyContent: "center",
    marginTop: height(1),
    alignSelf: "flex-end",
    marginRight: width(11),
    // backgroundColor: "blue",
  },
  forgetPassword: {
    fontSize: 14,
    color: AppColors.boulder,
    // backgroundColor: "blue",
  },
  accountView: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: height(2.5),
  },
  accountText: {
    fontSize: 16,
    color: AppColors.boulder,
  },
  signupText: {
    fontSize: 16,
    color: AppColors.midNightBlue,
  },
  rememberMeView: {
    flexDirection: "row",
    width: width(90),
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    marginStart: width(5),
  },
  rememberMeText: {
    fontSize: 14,
    color: AppColors.boulder,
  },
});
export default styles;
