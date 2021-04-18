import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import FirstOnboarding from "../screens/FirstOnboarding";
import SecondOnboarding from "../screens/SecondOnboarding";
import { RegisterProvider } from "../contexts/register";
import { AccessProvider } from "../contexts/access";
const { Navigator, Screen } = createStackNavigator();

export default function OnboardingRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#f2f3f5" },
      }}
    >
      <Screen name="FirstOnboarding" component={FirstOnboarding} />
      <Screen name="SecondOnboarding" component={SecondOnboarding} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
