import React from "react";

import { useAccess } from "../contexts/access";
import AppRoutes from "./app.routes";
import OnboardingRoutes from "./onboarding.routes";

export default function Routes() {
  const { hasAccessed } = useAccess();

  return hasAccessed ? <AppRoutes /> : <OnboardingRoutes />;
}
