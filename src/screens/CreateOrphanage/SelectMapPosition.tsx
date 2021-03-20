import React, { useContext, useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import {
  Container,
  NextButton,
  NextButtonText,
} from "../../styles/screens/MapPosition";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import MapView, { MapEvent, Marker } from "react-native-maps";
import darkMap from "../../styles/themes/darkMap.json";
import mapMarkerImg from "../../images/Local.png";
import { ThemeContext } from "styled-components/native";

export default function SelectMapPosition() {
  const navigation = useNavigation();
  const { title } = useContext(ThemeContext);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleNextStep() {
    navigation.navigate("OrphanageData", {
      position,
    });
  }

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: -23.688435,
          longitude: -46.5696544,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        customMapStyle={title === "dark" ? darkMap : []}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </MapView>

      {position.latitude !== 0 && (
        <NextButton onPress={handleNextStep}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
