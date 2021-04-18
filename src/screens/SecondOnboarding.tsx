import React from "react";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  GoForward,
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
          <GoForward>
            <Feather name="arrow-right" size={24} color="#2AB5D1" />
          </GoForward>
        </Footer>
      </Container>
    </>
  );
}
