import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Container,
  Aside,
  Header,
  Footer,
  CreateOrphanage,
} from "../styles/pages/orphanages";
import { ThemeContext } from "styled-components";

import mapMarkerImg from "../images/map-marker.svg";

function OrphanagesMap() {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Aside>
        <Header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>São Paulo</strong>
          <span>São Bernado do Campo</span>
        </Footer>
      </Aside>

      <Map
        center={[-23.7104846, -46.5521557]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="">
        <CreateOrphanage>
          <FiPlus size={32} color="#fff" />
        </CreateOrphanage>
      </Link>
    </Container>
  );
}

export default OrphanagesMap;
