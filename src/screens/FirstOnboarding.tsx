import React from "react";

import {
  Container,
  ImageContainer,
  Title,
  Description,
} from "../styles/screens/FirstOnboarding";
import Onboarding from "../images/Onboarding1.png";

export default function FirstOnboarding() {
  return (
    <>
      <Container>
        <ImageContainer source={Onboarding} />
        <Title>Leve felicidade para o mundo</Title>
        <Description>
          Visite orfanatos e mude o dia de muitas crianças.
        </Description>
      </Container>
    </>
  );
}
