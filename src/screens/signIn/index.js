import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import {
  BackIcon,
  Button,
  Header,
  InputText,
  Loading,
  SingleCheckBox,
} from "../../components";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import { logInUser } from "../../api/user";
import Modal from "react-native-modal";
import {
  getCredentialValueFor,
  infoMessage,
  saveCredentials,
} from "../../utils/Methods";
import Images from "../../images";
import { setIsLogin, setUserData } from "../../redux/slices/user";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailGiven, setEmailGiven] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordGiven, setPasswordGiven] = useState(true);
  const [loadingModal, setLoadingModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const EmailChecking = () => {
    if (email === "") {
      setEmailGiven(false);
    } else {
      setEmailGiven(true);
    }
  };

  const PasswordChecking = () => {
    if (password === "") {
      setPasswordGiven(false);
    } else {
      setPasswordGiven(true);
    }
  };

  const openPasswordModal = () => {
    // setEmail(email);
    setPasswordModal(true);
  };

  const handleRememberMe = () => {
    const newRememberMe = !rememberMe;
    setRememberMe(newRememberMe);
  };

  const handleSignup = () => {
    console.log("Sign Up");
    navigation.navigate(ScreenNames.SIGNUP);
  };

  const handleSignIn = async () => {
    console.log("Remember Me", rememberMe);

    if (email && password) {
      setLoadingModal(true);
      let loginResponse = await logInUser(email, password);
      if (loginResponse?.email === email) {
        dispatch(setUserData(loginResponse));
        dispatch(setIsLogin(true));

        if (rememberMe) {
          console.log("Saving Credentials");
          saveCredentials("Email", email.toString());
          saveCredentials("Password", password.toString());
        } else {
          console.log("Not Saving Credentials");

          saveCredentials("Email", "");
          saveCredentials("Password", "");
        }
        setLoadingModal(false);
        navigation.navigate(ScreenNames.HOME);
      } else {
        setLoadingModal(false);
      }
    } else {
      console.log("Required");
      setLoadingModal(false);
      if (!email) {
        setEmailGiven(false);
      }

      if (!password) {
        setPasswordGiven(false);
      }
      infoMessage(
        "Login Credentials",
        "Please insert your login credentials to access your account"
      );
    }
  };

  const getCredentials = async () => {
    const storedEmail = await getCredentialValueFor("Email");
    const storedPassword = await getCredentialValueFor("Password");

    if (storedEmail && storedPassword) {
      setRememberMe(true);
    }

    console.log("Email", storedEmail);
    console.log("Password", storedPassword);
    console.log("Remember Me", rememberMe);

    setEmail(storedEmail ? storedEmail : "");
    setPassword(storedPassword ? storedPassword : "");
  };

  useEffect(() => {
    getCredentials();
  }, []);

  // const handleClear = async () => {
  //   let emailRes = await clearData("email");
  //   let passRes = await clearData("password");
  //   console.log("Email Response", emailRes);
  //   console.log("Password Response", passRes);
  // };

  // useEffect(() => {
  //   handleClear();
  // }, []);

  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      barStyle="dark-content"
      scrollType="keyboard"
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
    >
      <View style={styles.parentView}>
        <Header back={true} />

        {/* Logo */}
        <View style={styles.logoView}>
          {/* <Text style={styles.logoJNPText}>JNP </Text>
          <Text style={styles.logoSharjahText}>Sharjah</Text> */}
          <Image
            style={styles.logoImageStyle}
            resizeMode="contain"
            source={Images.JNPLOGO}
          />
        </View>

        {/* WelCome Text */}
        <Text style={styles.welcomeText}>Welcome Back</Text>

        {/* Detail Text */}
        <Text style={styles.detailsText}>Please enter credentials</Text>

        {/* Email */}
        <InputText
          label="Email"
          placeholder="JohnDoe@something.com"
          value={email}
          setState={setEmail}
          keyType="email-address"
          editingEnd={EmailChecking}
          email={true}
        />

        {/* Required */}
        {!emailGiven && !email && (
          <Text style={styles.errorText}>Required*</Text>
        )}

        {/* Password */}
        <InputText
          label="Password"
          placeholder="******"
          value={password}
          setState={setPassword}
          password={true}
          editingEnd={PasswordChecking}
        />

        {!passwordGiven && !password && (
          <Text style={styles.errorText}>Required*</Text>
        )}

        <View style={styles.rememberMeView}>
          <SingleCheckBox
            state={rememberMe}
            title="Remember Me"
            onPress={handleRememberMe}
            textStyle={styles.rememberMeText}
          />

          {/* Forget Password */}
          <TouchableOpacity
            style={styles.forgetTouch}
            onPress={openPasswordModal}
          >
            <Text style={styles.forgetPassword}>Forget Password!</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Login"
          btnStyle={styles.loginBtnStyle}
          press={handleSignIn}
        />

        <View style={styles.accountView}>
          <Text style={styles.accountText}>Don't have an account? </Text>
          <Text style={styles.signupText} onPress={handleSignup}>
            Sign up!
          </Text>
        </View>
      </View>

      <Modal isVisible={loadingModal}>
        <Loading />
      </Modal>
    </ScreenWrapper>
  );
}
