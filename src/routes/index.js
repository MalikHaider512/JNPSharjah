import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import ScreenNames from "./routes";
import {
  AdPostScreen,
  CategoriesScreen,
  DetailScreen,
  FilterScreen,
  HomeScreen,
  MyAdsScreen,
  MyBiddingsScreen,
  ProfileScreen,
  SignInScreen,
  SignUpScreen,
} from "../screens";
import BottomTabs from "./bottom";
import { getCredentialValueFor } from "../utils/Methods";
import { logInUser } from "../api/user";
import { useDispatch } from "react-redux";
import { setIsLogin, setUserData } from "../redux/slices/user";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const navigationRef = createNavigationContainerRef();

  const dispatch = useDispatch();

  const getCredentials = async () => {
    const storedEmail = await getCredentialValueFor("Email");
    const storedPassword = await getCredentialValueFor("Password");

    if (storedEmail && storedPassword) {
      console.log("Email", storedEmail);
      console.log("Password", storedPassword);
      let loginResponse = await logInUser(storedEmail, storedPassword);
      if (navigationRef.isReady()) {
        console.log("Navigation Ready");
        console.log("Login Response", loginResponse);
        if (loginResponse?.email === storedEmail) {
          console.log("Set redux");
          dispatch(setUserData(loginResponse));
          dispatch(setIsLogin(true));
        }
      }
    }
  };

  useEffect(() => {
    getCredentials();
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.TABHOME} component={BottomTabs} />
        <Stack.Screen name={ScreenNames.FILTER} component={FilterScreen} />
        <Stack.Screen name={ScreenNames.SIGNIN} component={SignInScreen} />
        <Stack.Screen name={ScreenNames.SIGNUP} component={SignUpScreen} />
        <Stack.Screen
          name={ScreenNames.CATEGORIES}
          component={CategoriesScreen}
        />
        <Stack.Screen name={ScreenNames.ADPOST} component={AdPostScreen} />
        <Stack.Screen name={ScreenNames.DETAILS} component={DetailScreen} />
        <Stack.Screen name={ScreenNames.MYADS} component={MyAdsScreen} />
        <Stack.Screen
          name={ScreenNames.MYBIDDINGS}
          component={MyBiddingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
