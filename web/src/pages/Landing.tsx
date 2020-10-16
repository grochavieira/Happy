import React, { useContext } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  Container,
  Content,
  Main,
  Location,
  Enter,
  RegisterButton,
} from "../styles/pages/landing";
import Switch from "react-switch";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";

import logoImg from "../images/logo.svg";

interface Props {
  toggleTheme: () => void;
}

const Landing: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy" />
        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          {/* <Link to="/register">
            <RegisterButton>Cadastre-se</RegisterButton>
          </Link> */}
        </Main>
        <Location>
          <Switch
            onChange={toggleTheme}
            checked={title === "light"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor="#00C7C7"
            onColor="#1C110A"
          />
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
