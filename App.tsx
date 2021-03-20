import React from "react";
import { ThemeProvider } from "styled-components";
import themes from "./src/styles/themes";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";

import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || themes.dark;

  console.log(deviceTheme);

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Routes />
    </ThemeProvider>
  );
}
