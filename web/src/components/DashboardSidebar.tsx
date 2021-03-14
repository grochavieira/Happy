import React from "react";
import { FiMapPin, FiInfo } from "react-icons/fi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import mapMarkerImg from "../images/map-marker.svg";

import {
  Container,
  Main,
  Footer,
} from "../styles/components/dashboard-sidebar";

export default function DashboardSidebar() {
  const { goBack } = useHistory();

  return (
    <Container>
      <img src={mapMarkerImg} alt="Happy" />

      <Main>
        <button className="highlight" type="button" onClick={goBack}>
          <FiMapPin size={24} />
        </button>
        <button type="button" onClick={goBack}>
          <FiInfo size={24} />
        </button>
      </Main>

      <Footer>
        <button type="button" onClick={goBack}>
          <AiOutlinePoweroff size={24} color="#FFF" />
        </button>
      </Footer>
    </Container>
  );
}
