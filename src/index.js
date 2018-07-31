import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import "./index.css";
import Home from "./Home";

import registerServiceWorker from "./registerServiceWorker";
import "../node_modules/grommet-css";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Home />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
