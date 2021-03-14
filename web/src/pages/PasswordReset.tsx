import React, { useState } from "react";
import Panel from "../components/Panel";
import GoBack from "../components/GoBack";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Container, InputBlock } from "../styles/pages/password-reset";
import { Form, ConfirmButton, Fieldset } from "../styles/global";

export default function ForgotPassword() {
  const history = useHistory();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleForgotPassword = () => {
    history.push("/dashboard");
  };

  return (
    <>
      <GoBack />
      <Container>
        <Panel />
        <Form>
          <Fieldset>
            <legend>Redefinição de senha</legend>
            <p>
              Escolha uma nova senha para você acessar o dashboard do Happy.
            </p>
            <InputBlock>
              <label htmlFor="new-password">Nova Senha</label>
              <div>
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="new-password"
                />
                {showNewPassword ? (
                  <FiEyeOff
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    size={20}
                  />
                ) : (
                  <FiEye
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    color="#15C3D6"
                    size={20}
                  />
                )}
              </div>
            </InputBlock>
            <InputBlock>
              <label htmlFor="confirm-password">Confirmar Senha</label>
              <div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                />
                {showConfirmPassword ? (
                  <FiEyeOff
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    size={20}
                  />
                ) : (
                  <FiEye
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    color="#15C3D6"
                    size={20}
                  />
                )}
              </div>
            </InputBlock>
            <ConfirmButton onClick={handleForgotPassword}>Entrar</ConfirmButton>
          </Fieldset>
        </Form>
      </Container>
    </>
  );
}
