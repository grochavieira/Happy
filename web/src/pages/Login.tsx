import React from "react";

import { Container } from "../styles/pages/login";
import Sidebar from "../components/Sidebar";

export default function Login() {
  return (
    <Container>
      <Sidebar />
      <h1>Login</h1>
    </Container>
  );
}
