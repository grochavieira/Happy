import React from "react";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import GlobalSyle from "./styles/global";

import Routes from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalSyle />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
