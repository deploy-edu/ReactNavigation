import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import RootStackNavigator from "./src/navigators/RootStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
