import React from "react";
import { Image } from "react-native";

import { Container, Information } from "../styles/components/AddModal";
import AddCursor from "../images/AddCursor/AddCursor.png";

interface AddModalProps {
  setIsCursorActive: (value: boolean) => void;
}

export default function AddModal({ setIsCursorActive }: AddModalProps) {
  return (
    <>
      <Container onPress={() => setIsCursorActive(false)}>
        <Image source={AddCursor} />
        <Information>Toque no mapa para adicionar um orfanato</Information>
      </Container>
    </>
  );
}
