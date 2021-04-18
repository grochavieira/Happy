import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  CancelBlock,
  CancelBlockText,
  Title,
  Description,
  ConfirmContainer,
  ConfirmButton,
  ConfirmButtonText,
} from "../styles/screens/CancelRegister";
import { useNavigation } from "@react-navigation/core";

export default function CancelRegister() {
  const navigation = useNavigation();

  const handleCancelRegisterNavigation = () => {
    navigation.navigate("OrphanagesMap");
  };

  return (
    <>
      <Container>
        <CancelBlock>
          <CancelBlockText>X</CancelBlockText>
        </CancelBlock>
        <Title>Cancelar cadastro</Title>
        <Description>Tem certeza que quer cancelar esse cadastro?</Description>
        <ConfirmContainer>
          <ConfirmButton onPress={() => navigation.goBack()}>
            <ConfirmButtonText>Não</ConfirmButtonText>
          </ConfirmButton>
          <ConfirmButton onPress={handleCancelRegisterNavigation}>
            <ConfirmButtonText>Sim</ConfirmButtonText>
          </ConfirmButton>
        </ConfirmContainer>
      </Container>
    </>
  );
}
