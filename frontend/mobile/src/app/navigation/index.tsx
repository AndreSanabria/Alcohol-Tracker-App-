import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
