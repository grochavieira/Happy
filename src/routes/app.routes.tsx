import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import OrphanagesMap from "../screens/OrphanagesMap";
import OrphanageDetails from "../screens/OrphanageDetails";
import SelectMapPosition from "../screens/CreateOrphanage/SelectMapPosition";
import OrphanageData from "../screens/CreateOrphanage/OrphanageData";
import Header from "../components/Header";
import Success from "../screens/Success";
import CancelRegister from "../screens/CancelRegister";
import OrphanageVisitation from "../screens/CreateOrphanage/OrphanageVisitation";

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#f2f3f5" },
      }}
    >
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen name="Success" component={Success} />
      <Screen name="CancelRegister" component={CancelRegister} />
      <Screen
        name="OrphanageDetails"
        component={OrphanageDetails}
        options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Orfanato" />,
        }}
      />
      <Screen
        name="SelectMapPosition"
        component={SelectMapPosition}
        options={{
          headerShown: true,
          header: () => <Header title="Selecione no Mapa" />,
        }}
      />
      <Screen
        name="OrphanageData"
        component={OrphanageData}
        options={{
          headerShown: true,
          header: () => <Header title="Informe os Dados" />,
        }}
      />
      <Screen
        name="OrphanageVisitation"
        component={OrphanageVisitation}
        options={{
          headerShown: true,
          header: () => <Header title="Informe os Dados" />,
        }}
      />
    </Navigator>
  );
}
