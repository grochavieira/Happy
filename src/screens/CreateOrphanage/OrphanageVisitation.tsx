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

export default function OrphanageVisitation() {
  const [instructions, setInstructions] = useState("");
  const [opening_hours, setOpeningHours] = useState("");
  const [open_on_weekends, setOpenOnWeekends] = useState(false);

  // async function handleCreateOrphanage() {
  //     const { latitude, longitude } = params.position;

  //     console.log({
  //       name,
  //       about,
  //       instructions,
  //       opening_hours,
  //       open_on_weekends,
  //       latitude,
  //       longitude,
  //     });

  //     const data = new FormData();

  //     data.append("name", name);
  //     data.append("about", about);
  //     data.append("latitude", String(latitude));
  //     data.append("longitude", String(longitude));
  //     data.append("instructions", instructions);
  //     data.append("opening_hours", opening_hours);
  //     data.append("open_on_weekends", String(open_on_weekends));
  //     data.append("whatsapp", whatsapp);

  //     images.forEach((image, index) => {
  //       data.append("images", {
  //         name: `image_${index}.jpg`,
  //         type: "image/jpg",
  //         uri: image,
  //       } as any);
  //     });

  //     await api.post("orphanages", data);

  //     navigation.navigate("OrphanagesMap");
  //   }

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

        <NextButton onPress={() => {}}>
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
