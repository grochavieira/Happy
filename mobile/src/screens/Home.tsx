import React, { useContext } from "react";
import { Dimensions } from "react-native";
import {
  Container,
  Title,
  Logo,
  Description,
  NextButton,
  ThemeSwitcher,
} from "../styles/screens/Home";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeContext } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import themes from "../styles/themes";
import logotipo from "../images/Logotipo.png";

export default function Home() {
  const { title } = useContext(ThemeContext);
  const navigation = useNavigation();

  function handleNavigateToOrphanagesMap() {
    navigation.navigate("OrphanagesMap");
  }

  return (
    <Container>
      <LinearGradient
        colors={
          title === "light"
            ? [themes.light.colors.primaryLight, themes.light.colors.primary]
            : [themes.dark.colors.primaryLight, themes.dark.colors.primary]
        }
        start={[0, 0]}
        end={[1, 1]}
        style={{
          position: "absolute",
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height + 100,
        }}
      />
      <ThemeSwitcher>
        <Feather
          name={title === "light" ? "sun" : "moon"}
          size={30}
          color="#fff"
        />
      </ThemeSwitcher>
      <Title>Bem-Vindo ao </Title>
      <Logo source={logotipo} />
      <Description>Visite orfanatos e mude o dia das crianças!</Description>
      <NextButton onPress={handleNavigateToOrphanagesMap}>
        <Feather name="arrow-right" size={30} color="#fff" />
      </NextButton>
    </Container>
  );
}
