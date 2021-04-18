import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Container, ImagesInput } from "../../styles/screens/Register/Data";
import {
  Input,
  Label,
  NextButton,
  NextButtonText,
  Title,
} from "../../styles/screens/Register";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

interface OrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  };
}

export default function OrphanageData() {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const navigation = useNavigation();
  const route = useRoute();

  const params = route.params as OrphanageDataRouteParams;

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== "granted") {
      alert("Eita, precisamos de acesso ás suas fotos...");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    console.log(result);

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
  }

  function handleOrphanageDataNavigation() {
    navigation.navigate("OrphanageVisitation");
  }

  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input value={name} onChangeText={setName} style={styles.input} />

      <Label>Sobre</Label>
      <Input
        value={about}
        onChangeText={setAbout}
        style={[styles.input, { height: 110 }]}
        multiline
      />

      <Label>Whatsapp</Label>
      <Input value={whatsapp} onChangeText={setWhatsapp} style={styles.input} />

      <Label>Fotos</Label>

      <View style={styles.uploadedImagesContainer}>
        {images.map((image) => {
          return (
            <Image
              key={image}
              source={{ uri: image }}
              style={styles.uploadedImage}
            />
          );
        })}
      </View>

      <ImagesInput onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <NextButton onPress={handleOrphanageDataNavigation}>
        <NextButtonText>Próximo</NextButtonText>
      </NextButton>
    </Container>
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
