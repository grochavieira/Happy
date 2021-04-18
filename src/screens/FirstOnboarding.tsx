import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
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
import GoForward from "../components/GoForward";
import Onboarding1 from "../images/Onboarding-1.png";

export default function FirstOnboarding() {
  const navigation = useNavigation();

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
          <GoForward onAction={() => navigation.navigate("SecondOnboarding")} />
        </Footer>
      </Container>
    </>
  );
}
