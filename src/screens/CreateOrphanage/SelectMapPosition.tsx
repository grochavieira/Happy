import React, { useContext, useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { MapEvent, Marker } from "react-native-maps";
import { ThemeContext } from "styled-components/native";

import AddModal from "../../components/AddModal";
import { useRegister } from "../../contexts/register";
import { useAccess } from "../../contexts/access";
import {
  Container,
  NextButton,
  NextButtonText,
} from "../../styles/screens/MapPosition";
import darkMap from "../../styles/themes/darkMap.json";
import mapMarkerImg from "../../images/Local.png";

export default function SelectMapPosition() {
  const navigation = useNavigation();
  const { title } = useContext(ThemeContext);
  const { position, setPosition } = useRegister();
  const { hasUsedMapSelection } = useAccess();
  const [isCursorActive, setIsCursorActive] = useState(true);

  function handleNextStep() {
    navigation.navigate("OrphanageData", {
      position,
    });
  }

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (
    <>
      {!hasUsedMapSelection && isCursorActive && (
        <AddModal setIsCursorActive={setIsCursorActive} />
      )}
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
    </>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
