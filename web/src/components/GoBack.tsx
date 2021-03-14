import React from "react";
import { Container } from "../styles/components/go-back";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

export default function GoBack() {
  const { goBack } = useHistory();
  return (
    <>
      <Container onClick={goBack}>
        <FiArrowLeft size={24} />
      </Container>
    </>
  );
}
