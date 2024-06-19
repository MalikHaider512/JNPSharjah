import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import {
  HomeScreen,
  ProfileScreen,
  StartScreen,
  TradeOptionScreen,
} from "../../screens";
import AppColors from "../../utils/AppColors";
import Images from "../../images";
import styles from "./styles";
import ScreenNames from "../routes";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../redux/slices/user";

const Tabs = createBottomTabNavigator();

export default function BottomTabs() {
  const isLogin = useSelector(selectIsLogin);
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name={ScreenNames.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? AppColors.primary : AppColors.black}
            />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name={ScreenNames.TRADEOPTION}
        component={isLogin ? TradeOptionScreen : StartScreen}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={Images.PLUS}
                style={styles.plusIcon}
                resizeMode="contain"
              />
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name={ScreenNames.PROFILE}
        component={isLogin ? ProfileScreen : StartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={25}
              color={focused ? AppColors.primary : AppColors.black}
            />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs.Navigator>
  );
}
