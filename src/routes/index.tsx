import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AccessProvider } from "../contexts/access";
import { RegisterProvider } from "../contexts/register";
import Routes from "./routes";

const App: React.FC = () => {
  console.log("app");
  return (
    <>
      <NavigationContainer>
        <AccessProvider>
          <RegisterProvider>
            <Routes />
          </RegisterProvider>
        </AccessProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
