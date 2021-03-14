import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";
import Login from "./pages/Login";

interface Props {
  toggleTheme: () => void;
}

const Routes: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Landing toggleTheme={toggleTheme} />}
        />
        <Route exact path="/app" component={OrphanagesMap} />
        <Route exact path="/orphanages/create" component={CreateOrphanage} />
        <Route exact path="/orphanages/:id" component={Orphanage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
