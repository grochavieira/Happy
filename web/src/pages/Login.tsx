import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, RememberContainer } from "../styles/pages/login";
import { InputBlock, ConfirmButton, Fieldset, Form } from "../styles/global";
import Panel from "../components/Panel";
import GoBack from "../components/GoBack";
import AuthContext from "../contexts/auth";
import crypto from "crypto-js";

export default function Login() {
  const { signIn, signed } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginSaved, setIsLoginSaved] = useState(false);
  console.log(signed);

  useEffect(() => {
    function getUserLogin() {
      const storagedLoginEmail = localStorage.getItem("@happy-login-email");
      const storagedLoginPassword = localStorage.getItem(
        "@happy-login-password"
      );

      if (storagedLoginEmail && storagedLoginPassword) {
        const crypto_key = process.env.REACT_APP_CRYPTO_KEY || "";
        const bytes = crypto.AES.decrypt(
          JSON.parse(storagedLoginPassword),
          crypto_key
        );
        const decryptedPassword = bytes.toString(crypto.enc.Utf8);
        setEmail(JSON.parse(storagedLoginEmail));
        setPassword(decryptedPassword);
        setIsLoginSaved(true);
      }
    }

    getUserLogin();
  }, []);

  async function handleLogin() {
    const isLoginSucceded = await signIn({ email, password });
    if (isLoginSucceded) {
      if (isLoginSaved) {
        const crypto_key = process.env.REACT_APP_CRYPTO_KEY || "";
        const encryptedPassword = crypto.AES.encrypt(
          password,
          crypto_key
        ).toString();
        localStorage.setItem("@happy-login-email", JSON.stringify(email));
        localStorage.setItem(
          "@happy-login-password",
          JSON.stringify(encryptedPassword)
        );
      } else {
        localStorage.removeItem("@happy-login-email");
        localStorage.removeItem("@happy-login-password");
      }
    }
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
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                id="email"
              />
            </InputBlock>
            <InputBlock>
              <label htmlFor="password">Senha</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
              />
            </InputBlock>
          </Fieldset>
          <RememberContainer>
            <span>
              <input
                checked={isLoginSaved}
                onChange={(e) => setIsLoginSaved(e.target.checked)}
                type="checkbox"
                name="remember"
                id="remember"
              />
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
