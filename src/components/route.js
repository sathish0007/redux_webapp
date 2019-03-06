import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./container";
import NoMatch from "./Notfoundpage";
import Clickedmovie from "./movieView";
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Container} />
          <Route path="/movies" component={Container} />
          <Route path="/clickedmovie" component={Clickedmovie} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}
