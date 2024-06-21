import { View, Text } from "react-native";
import React from "react";
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
  ProfileScreen,
  SignInScreen,
  SignUpScreen,
} from "../screens";
import BottomTabs from "./bottom";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const navigationRef = createNavigationContainerRef();
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
