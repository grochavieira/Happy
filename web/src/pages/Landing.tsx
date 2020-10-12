import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  Container,
  Content,
  Main,
  Location,
  Enter,
} from "../styles/pages/landing";
import { Link } from "react-router-dom";

import logoImg from "../images/logo.svg";

const Landing = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy" />
        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>
        <Location>
          <strong>São Paulo</strong>
          <span>São Bernardo do Campo</span>
        </Location>

        <Link to="/app">
          <Enter>
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />{" "}
          </Enter>
        </Link>
      </Content>
    </Container>
  );
};

export default Landing;
