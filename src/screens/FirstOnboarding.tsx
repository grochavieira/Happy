import React from "react";

import {
  Container,
  ImageContainer,
  Title,
  Description,
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
      </Container>
    </>
  );
}
