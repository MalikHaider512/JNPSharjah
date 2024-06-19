import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import ScreenNames from "./routes";
import {
  FilterScreen,
  HomeScreen,
  ProfileScreen,
  SignInScreen,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
