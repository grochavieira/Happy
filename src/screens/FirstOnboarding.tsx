import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  ImageContainer,
  Title,
  Description,
  GoForward,
  Footer,
  CurrentOnboarding,
  ActiveOnboarding,
  InactiveOnboarding,
} from "../styles/screens/FirstOnboarding";
import Onboarding1 from "../images/Onboarding-1.png";

export default function FirstOnboarding() {
  return (
    <>
      <Container>
        <ImageContainer source={Onboarding1} />
        <Title>Leve felicidade para o mundo</Title>
        <Description>
          Visite orfanatos e mude o dia de muitas crianças.
        </Description>
        <Footer>
          <CurrentOnboarding>
            <ActiveOnboarding />
            <InactiveOnboarding />
          </CurrentOnboarding>
          <GoForward>
            <Feather name="arrow-right" size={24} color="#2AB5D1" />
          </GoForward>
        </Footer>
      </Container>
    </>
  );
}
