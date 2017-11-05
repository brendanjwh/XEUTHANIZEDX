import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "react-bootstrap";

import Landing from "./Landing";
import Search from "./Search";
import About from "./About";
import Music from "./Music";
import Merch from "./Merch";
import Shows from "./Shows";
import Navigation from "./Navigation";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Route className="navbar" id="navigation" component={Navigation} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/About" component={About} />
        <Route path="/Music" component={Music} />
        <Route path="/Merch" component={Merch} />
        <Route path="/Shows" component={Shows} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
