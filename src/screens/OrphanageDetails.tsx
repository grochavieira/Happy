import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  Linking,
  ActivityIndicator,
} from "react-native";
import {
  ContactButton,
  ContactButtonText,
  Container,
  Description,
  DetailsContainer,
  ImagesContainer,
  MapContainer,
  RoutesContainer,
  RoutesText,
  ScheduleContainer,
  ScheduleItemBlue,
  ScheduleItemGreen,
  ScheduleItemRed,
  ScheduleTextBlue,
  ScheduleTextGreen,
  ScheduleTextRed,
  Separator,
  Title,
} from "../styles/screens/Details";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { Feather, FontAwesome } from "@expo/vector-icons";
import mapMarkerImg from "../images/Local.png";
import darkMap from "../styles/themes/darkMap.json";
import api from "../services/api";
import { ThemeContext } from "styled-components/native";

interface OrphanageDetailsRouteParams {
  id: number;
}

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  whatsapp: string;
  images: Array<{ _id: string; url: string }>;
}

export default function OrphanageDetails() {
  const route = useRoute();
  const { title } = useContext(ThemeContext);
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [isLoading, setIsLoading] = useState(true);
  const params = route.params as OrphanageDetailsRouteParams;

  useEffect(() => {
    async function loadOrphanage() {
      setIsLoading(true);
      const { data } = await api.get(`/orphanages/${params.id}`);
      setIsLoading(false);
      setOrphanage(data);
    }
    loadOrphanage();
  }, [params.id]);

  function handleOpenGoogleMapRoutes() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`
    );
  }

  function handleOpenWhatsapp() {
    Linking.openURL(
      `https://api.WhatsApp.com/send?phone=${orphanage?.whatsapp}`
    );
  }

  if (!orphanage || isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `${title === "dark" ? "#00000011" : "#00000011"}`,
        }}
      >
        <ActivityIndicator size="large" color="#00C7C7" />
      </View>
    );
  }

  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {orphanage.images.map((image) => {
            return (
              <Image
                key={image._id}
                style={styles.image}
                source={{
                  uri: image.url,
                }}
              />
            );
          })}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            customMapStyle={title === "dark" ? darkMap : []}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </MapView>

          <RoutesContainer onPress={handleOpenGoogleMapRoutes}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItemBlue>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleTextBlue>{orphanage.opening_hours}</ScheduleTextBlue>
          </ScheduleItemBlue>

          {orphanage.open_on_weekends ? (
            <ScheduleItemGreen>
              <Feather name="info" size={40} color="#39CC83" />
              <ScheduleTextGreen>Atendemos fim de semana</ScheduleTextGreen>
            </ScheduleItemGreen>
          ) : (
            <ScheduleItemRed>
              <Feather name="info" size={40} color="#FF669D" />
              <ScheduleTextRed>Não atendemos no fim de semana</ScheduleTextRed>
            </ScheduleItemRed>
          )}
        </ScheduleContainer>

        <ContactButton onPress={handleOpenWhatsapp}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: 240,
    resizeMode: "cover",
  },

  mapStyle: {
    width: "100%",
    height: 150,
  },
});
