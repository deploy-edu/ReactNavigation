import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import NewsViewScreen from "../screens/NewsViewScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Article } from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import BottomTabNavigator from "./BottomTabNavigator";

export type RootStackParamList = {
  BottomTab: undefined;
  Notifications: undefined;
  Profile: undefined;
  Settings: undefined;
  NewsView: {
    article: Article;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen
        name="NewsView"
        component={NewsViewScreen}
        options={{
          title: "뉴스 보기",
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
