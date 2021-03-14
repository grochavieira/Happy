import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
  Container,
  PanelSection,
  LoginSection,
  GoBack,
  RememberContainer,
} from "../styles/pages/login";
import { InputBlock, ConfirmButton, Fieldset } from "../styles/global";

import logoImg from "../images/panel_logo.svg";

export default function Login() {
  return (
    <>
      <GoBack>
        <FiArrowLeft size={24} />
      </GoBack>
      <Container>
        <PanelSection>
          <img src={logoImg} alt="Happy" />
          <strong>São Paulo</strong>
          <span>São Bernardo do Campo</span>
        </PanelSection>
        <LoginSection>
          <Fieldset>
            <legend>Fazer Login</legend>
            <InputBlock>
              <label htmlFor="instructions">E-mail</label>
              <input type="text" id="instructions" />
            </InputBlock>
            <InputBlock>
              <label htmlFor="instructions">Senha</label>
              <input type="text" id="instructions" />
            </InputBlock>
          </Fieldset>
          <RememberContainer>
            <span>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember"> Lembrar-me</label>
            </span>
            <p>Esqueci minha senha</p>
          </RememberContainer>
          <ConfirmButton>Entrar</ConfirmButton>
        </LoginSection>
      </Container>
    </>
  );
}
