import React, { useContext } from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanage,
  Container,
} from "../styles/screens/Map";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "styled-components/native";
import darkMap from "../styles/themes/darkMap.json";
import mapMarker from "../images/Local.png";

export default function OrphanagesMap() {
  const { title } = useContext(ThemeContext);
  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails() {
    navigation.navigate("OrphanageDetails");
  }

  return (
    <Container>
      <MapView
        customMapStyle={title === "dark" ? darkMap : []}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.688435,
          longitude: -46.5696544,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.8,
            y: 0.8,
          }}
          coordinate={{
            latitude: -23.688435,
            longitude: -46.5696544,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <CalloutContainer>
              <CalloutText>Lar das Crianças</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </MapView>

      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>

        <CreateOrphanage>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanage>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
  },
});
