import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";

import AccessContext, { AccessProvider } from "../contexts/access";
import { RegisterProvider } from "../contexts/register";
import AppRoutes from "./app.routes";
import OnboardingRoutes from "./onboarding.routes";

export default function Routes() {
  const { hasAccessed } = useContext(AccessContext);
  console.log({ hasAccessed });

  return hasAccessed ? <AppRoutes /> : <OnboardingRoutes />;
}
