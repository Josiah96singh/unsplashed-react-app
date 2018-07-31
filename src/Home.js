import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import App from "./App";
import Result from "./Components/SearchedImages";

const Home = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/result" component={Result} />
    </Switch>
  );
};

export default Home;
