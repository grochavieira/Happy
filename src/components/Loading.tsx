import React from "react";
import { ActivityIndicator } from "react-native";

import { Container } from "../styles/components/Loading";

export default function Loading() {
  return (
    <>
      <Container>
        <ActivityIndicator size="large" color="#00C7C7" />
      </Container>
    </>
  );
}
