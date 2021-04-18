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
  Description,
} from "../styles/screens/Onboarding/FirstOnboarding";
import Onboarding1 from "../images/Onboarding-1.png";

export default function FirstOnboarding() {
  return (
    <>
      <Container>
        <Image source={Onboarding1} />
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
