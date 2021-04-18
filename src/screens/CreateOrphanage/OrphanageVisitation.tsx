import React, { useState } from "react";
import { Switch, StyleSheet } from "react-native";

import {
  Container,
  SwitchContainer,
} from "../../styles/screens/Register/Visitation";
import {
  Title,
  Label,
  Input,
  NextButton,
  NextButtonText,
} from "../../styles/screens/Register";
import { useRegister } from "../../contexts/register";
import { useNavigation } from "@react-navigation/core";

export default function OrphanageVisitation() {
  const navigation = useNavigation();
  const {
    instructions,
    setInstructions,
    opening_hours,
    setOpeningHours,
    open_on_weekends,
    setOpenOnWeekends,
    handleCreateOrphanage,
  } = useRegister();

  async function handleRegister() {
    const response = await handleCreateOrphanage();
    if (response) {
      navigation.navigate("Success");
    }
  }

  return (
    <>
      <Container contentContainerStyle={{ padding: 24 }}>
        <Title>Visitação</Title>

        <Label>Instruções</Label>
        <Input
          value={instructions}
          onChangeText={setInstructions}
          style={[styles.input, { height: 110 }]}
          multiline
        />

        <Label>Horario de visitas</Label>
        <Input
          value={opening_hours}
          onChangeText={setOpeningHours}
          style={styles.input}
        />

        <SwitchContainer>
          <Label>Atende final de semana?</Label>
          <Switch
            value={open_on_weekends}
            onValueChange={setOpenOnWeekends}
            thumbColor="#fff"
            trackColor={{ false: "#ccc", true: "#39CC83" }}
          />
        </SwitchContainer>

        <NextButton onPress={handleRegister}>
          <NextButtonText>Cadastrar</NextButtonText>
        </NextButton>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    textAlignVertical: "top",
  },

  uploadedImagesContainer: {
    flexDirection: "row",
  },

  uploadedImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
  },

  imagesInput: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderStyle: "dashed",
    borderColor: "#96D2F0",
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
});
