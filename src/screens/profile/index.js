import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import AppColors from "../../utils/AppColors";
import styles from "./styles";
import { Button, Header, ProfileContent } from "../../components";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../../routes/routes";
import Images from "../../images";

export default function Profile() {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  // const userData = useSelector(selectUser);
  const userData = {};

  const handleMyAds = () => {
    // navigation.navigate(ScreenNames.MYADS);
  };

  const handleLogOut = () => {
    // dispatch(setUserData({}));
    // dispatch(setIsLogin(false));
    // saveCredentials("email", "");
    // saveCredentials("password", "");
    navigation.navigate(ScreenNames.HOME);
  };

  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
      <View style={styles.parentView}>
        <Header title="Profile" />
        {/* User Detail */}
        <View style={styles.imageView}>
          <TouchableOpacity style={styles.imageStyle}>
            <Image
              source={Images.JNPLOGO}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.nameText}>
            {/* {userData?.firstname} {userData?.lastname} */}
            Haider
          </Text>
          <Text style={styles.emailText}>
            {/* {userData?.email} */}
            Ali
          </Text>

          <Button
            title="Edit"
            btnStyle={styles.profileBtn}
            textStyle={styles.profileText}
          />
        </View>

        <View style={styles.contentView}>
          {/* Change Password */}
          <ProfileContent
            iconName="lock"
            text="Change Password"
            // onPress={handleChangePassword}
          />

          {/* My Ads */}
          {/* <ProfileContent
            iconName="hard-drive"
            text="My Ads"
            onPress={handleMyAds}
          /> */}

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
            onPress={handleLogOut}
            forwardIcon={false}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
