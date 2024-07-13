import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import { Button, Header, ProfileContent } from "../../components";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import Images from "../../images";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setIsLogin, setUserData } from "../../redux/slices/user";
import { saveCredentials } from "../../utils/Methods";

export default function Profile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  console.log("User Data", userData);

  const handleMyAds = () => {
    navigation.navigate(ScreenNames.MYADS);
  };

  const handleFavorites = () => {
    navigation.navigate(ScreenNames.MYFAVIROTES);
  };

  const handleMyBiddings = () => {
    navigation.navigate(ScreenNames.MYBIDDINGS);
  };

  const handleManageAccount = () => {
    navigation.navigate(ScreenNames.MANAGEACCOUNT);
  };

  const handleEditProfile = () => {
    navigation.navigate(ScreenNames.EDITPROFILE);
  };

  const handleLogOut = () => {
    dispatch(setUserData({}));
    dispatch(setIsLogin(false));
    saveCredentials("email", "");
    saveCredentials("password", "");
    navigation.navigate(ScreenNames.HOME);
  };

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header title="Profile" />
        {/* User Detail */}
        {/* <View style={styles.imageView}>
          <TouchableOpacity style={styles.imageStyle}>
            <Image
              source={Images.JNPLOGO}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.nameText}>{userData?.fullname}</Text>
          <Text style={styles.emailText}>{userData?.email}</Text>

          <Button
            title="Edit"
            btnStyle={styles.profileBtn}
            textStyle={styles.profileText}
          />
        </View> */}

        {/* <View style={styles.contentView}> */}
        {/* Change Password */}
        <ProfileContent
          iconName="lock"
          text="Change Password"
          // onPress={handleChangePassword}
        />

        {/* My Ads */}
        <ProfileContent
          iconName="hard-drive"
          text="My Ads"
          press={handleMyAds}
        />

        {/* Favorites */}
        <ProfileContent
          iconName="heart"
          text="My Favorites"
          press={handleFavorites}
        />

        {/* My Biddings */}
        <ProfileContent
          iconName="hard-drive"
          text="My Biddings"
          press={handleMyBiddings}
        />

        {/* Manage Account */}
        <ProfileContent
          iconName="lock"
          text="Manage Account"
          press={handleManageAccount}
        />

        {/* Manage Account */}
        <ProfileContent
          iconName="edit"
          text="Edit Profile"
          press={handleEditProfile}
        />

        {/* Contact Us */}
        <ProfileContent
          iconName="mail"
          text="Contact Us"
          forwardIcon={false}
          // onPress={handleContactUs}
        />

        {/* Log out */}
        <ProfileContent
          iconName="log-out"
          text="Log out"
          press={handleLogOut}
          forwardIcon={false}
        />
        {/* </View> */}
      </View>
    </ScreenWrapper>
  );
}
