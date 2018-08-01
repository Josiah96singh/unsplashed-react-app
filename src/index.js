import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Result from "./Components/SearchedImages";
import SearcComp from "./Components/SearchComp";

import registerServiceWorker from "./registerServiceWorker";
import "../node_modules/grommet-css";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <SearcComp />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/result" component={Result} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
