import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from "../styles/screens/Success";
import SuccessImg from "../images/Success/Success.png";

export default function Sucess() {
  const navigation = useNavigation();

  const handleSuccessNavigation = () => {
    navigation.navigate("OrphanagesMap");
  };

  return (
    <>
      <Container>
        <Image source={SuccessImg} />
        <Title>Ebaaa!</Title>
        <Description>
          O cadastro deu certo e foi enviado ao administrador para ser aprovado.
          Agora é só esperar :)
        </Description>
        <OkButton onPress={handleSuccessNavigation}>
          <OkButtonText>Ok</OkButtonText>
        </OkButton>
      </Container>
    </>
  );
}
