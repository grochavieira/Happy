import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, RememberContainer } from "../styles/pages/login";
import { InputBlock, ConfirmButton, Fieldset, Form } from "../styles/global";
import Panel from "../components/Panel";
import GoBack from "../components/GoBack";

export default function Login() {
  const history = useHistory();

  function handleLogin() {
    history.push("/dashboard");
  }

  return (
    <>
      <GoBack />
      <Container>
        <Panel />
        <Form>
          <Fieldset>
            <legend>Fazer Login</legend>
            <InputBlock>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" />
            </InputBlock>
            <InputBlock>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" />
            </InputBlock>
          </Fieldset>
          <RememberContainer>
            <span>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember"> Lembrar-me</label>
            </span>
            <p>
              <Link to="forgot-password"> Esqueci minha senha </Link>{" "}
            </p>
          </RememberContainer>
          <ConfirmButton onClick={handleLogin}>Entrar</ConfirmButton>
        </Form>
      </Container>
    </>
  );
}
