import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../components/About";
import Lab1 from "../components/Lab1";
import Lab2 from "../components/Lab2";
import Lab3 from "../components/Lab3";
import Lab4 from "../components/Lab4";
import Result from "../components/Result";

export default class RouterURL extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/About" component={About} />
          <Route exact path="/Lab1" component={Lab1} />
          <Route exact path="/Lab2" component={Lab2} />
          <Route exact path="/Lab3" component={Lab3} />
          <Route exact path="/Lab4" component={Lab4} />
          <Route exact path="/Result" component={Result} />
        </div>
      </Router>
    );
  }
}
