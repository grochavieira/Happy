import React from "react";
import { Feather } from "@expo/vector-icons";

import { Container, NextButton } from "../styles/components/GoForward";

interface GoForwardProps {
  onAction: () => void;
}

export default function GoForward({ onAction }: GoForwardProps) {
  return (
    <>
      <Container>
        <NextButton onPress={onAction}>
          <Feather name="arrow-right" size={24} color="#2AB5D1" />
        </NextButton>
      </Container>
    </>
  );
}
