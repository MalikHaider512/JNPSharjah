import { StyleSheet } from "react-native";
import { width, height } from "../../utils/Dimensions";
import AppColors from "../../utils/AppColors";

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  logoView: {
    width: width(80),
    height: height(22),
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
    height: height(20),
    alignSelf: "center",
    marginBottom: height(1),
  },
  errorText: {
    color: AppColors.red,
    marginStart: width(10),
  },
  continueAsText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  companyBtnView: {
    width: width(90),
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  buttonStyle: {
    width: width(40),
    height: height(13),
    backgroundColor: AppColors.alto,
  },

  btnText: {
    color: AppColors.black,
  },
  describeYouText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: height(4),
  },
  deliverybtnStyle: {
    width: width(80),
    height: height(13),
    backgroundColor: AppColors.alto,
  },
  contactText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  chooseFileView: {
    flexDirection: "row",
    width: width(90),
    height: height(5),
    alignSelf: "center",
    marginTop: height(3),
    marginBottom: height(3),
    borderRadius: 10,
  },
  choseFileTouch: {
    width: width(35),
    height: height(5),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.gray,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  choseFileText: {
    color: AppColors.white,
    fontSize: 14,
    fontWeight: "bold",
  },

  uriText: {
    width: width(55),
    height: height(5),
    fontSize: 16,
    paddingStart: width(2),
    paddingEnd: width(2),
    textAlignVertical: "center",
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: AppColors.gray,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  noteText: {
    fontSize: 14,
    textAlign: "center",
    width: width(90),
    alignSelf: "center",
  },

  accountView: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: height(2.5),
    marginBottom: height(5),
  },
  accountText: {
    fontSize: 16,
    color: AppColors.boulder,
  },
  signInText: {
    fontSize: 16,
    color: AppColors.midNightBlue,
  },
});
export default styles;
