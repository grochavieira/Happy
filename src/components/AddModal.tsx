import React from "react";
import { Image } from "react-native";

import { Container, Information } from "../styles/components/AddModal";
import AddCursor from "../images/AddCursor/AddCursor.png";
import { useAccess } from "../contexts/access";

interface AddModalProps {
  setIsCursorActive: (value: boolean) => void;
}

export default function AddModal({ setIsCursorActive }: AddModalProps) {
  const { cursorAccess } = useAccess();

  return (
    <>
      <Container
        onPress={() => {
          setIsCursorActive(false);
          cursorAccess();
        }}
      >
        <Image source={AddCursor} />
        <Information>Toque no mapa para adicionar um orfanato</Information>
      </Container>
    </>
  );
}
