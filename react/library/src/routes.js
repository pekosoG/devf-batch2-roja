import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import Libro from "./pages/Libro";

export default () => (
  <div>
    <Switch>
      <Route exact path="/libro" component={Libro} />
      <Route path="/" component={App} />
    </Switch>
  </div>
);
