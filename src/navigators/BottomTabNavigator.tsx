import AntDesign from "@expo/vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import HomeScreen from "../screens/HomeScreen";
import MypageScreen from "../screens/MypageScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "검색",
          tabBarIcon(props) {
            return <AntDesign name="search1" size={24} color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "홈",
          tabBarIcon(props) {
            return <AntDesign name="home" size={24} color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          title: "마이페이지",
          tabBarIcon(props) {
            return <AntDesign name="user" size={24} color={props.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
