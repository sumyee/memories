import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Welcome from "@pages/welcome/index.jsx";
import Introduction from "@pages/introduction/index.jsx";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/introduction" component={Introduction} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
