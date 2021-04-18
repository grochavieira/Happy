import React, { useContext, useEffect, useState } from "react";
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
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ThemeContext } from "styled-components/native";
import darkMap from "../styles/themes/darkMap.json";
import mapMarker from "../images/Local.png";
import api from "../services/api";

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const { title } = useContext(ThemeContext);
  const navigation = useNavigation();

  useFocusEffect(() => {
    async function loadOrphanages() {
      const { data } = await api.get("/orphanages?accepted=true");
      setOrphanages(data);
    }
    loadOrphanages();
  });

  function handleNavigateToOrphanageDetails(id: number) {
    navigation.navigate("OrphanageDetails", { id });
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate("SelectMapPosition");
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
        {orphanages.map((orphanage: Orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.8,
                y: 0.8,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            >
              <Callout
                tooltip
                onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
              >
                <CalloutContainer>
                  <CalloutText>{orphanage.name}</CalloutText>
                </CalloutContainer>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      <Footer>
        <FooterText>{orphanages.length} orfanatos encontrados</FooterText>

        <CreateOrphanage onPress={handleNavigateToCreateOrphanage}>
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
