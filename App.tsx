import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import themes from "./src/styles/themes";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";

import { AccessProvider } from "./src/contexts/access";
import { RegisterProvider } from "./src/contexts/register";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";

export default function App() {
  const deviceTheme = useColorScheme();
  // const theme = themes[deviceTheme] || themes.dark;
  const theme = themes.light;

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AccessProvider>
        <RegisterProvider>
          <ThemeProvider theme={theme}>
            <StatusBar />
            <Routes />
          </ThemeProvider>
        </RegisterProvider>
      </AccessProvider>
    </NavigationContainer>
  );
}
