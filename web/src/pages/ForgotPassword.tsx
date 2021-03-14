import React from "react";
import Panel from "../components/Panel";
import GoBack from "../components/GoBack";
import { Container } from "../styles/pages/forgot-password";
import { Form, InputBlock, ConfirmButton, Fieldset } from "../styles/global";

export default function ForgotPassword() {
  return (
    <>
      <GoBack />
      <Container>
        <Panel />
        <Form>
          <Fieldset>
            <legend>Esqueci a senha</legend>
            <p>
              Sua redefinição de senha será enviada para o e-mail cadastrado
            </p>
            <InputBlock>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" />
            </InputBlock>
            <ConfirmButton>Enviar</ConfirmButton>
          </Fieldset>
        </Form>
      </Container>
    </>
  );
}
