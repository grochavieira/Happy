import React from "react";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import GoForward from "../components/GoForward";
import {
  Footer,
  CurrentOnboarding,
  ActiveOnboarding,
  InactiveOnboarding,
} from "../styles/screens/Onboarding";
import {
  Container,
  Title,
} from "../styles/screens/Onboarding/SecondOnboarding";
import Onboarding2 from "../images/Onboarding-2.png";

export default function SecondOnboarding() {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Image source={Onboarding2} />
        <Title>Escolha um orfanato no mapa e faça uma visita</Title>
        <Footer>
          <CurrentOnboarding>
            <InactiveOnboarding />
            <ActiveOnboarding />
          </CurrentOnboarding>
          <GoForward onAction={() => navigation.navigate("Home")} />
        </Footer>
      </Container>
    </>
  );
}
