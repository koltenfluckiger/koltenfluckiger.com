import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Error} from "../common/routing";

import Main from "../main";
import Admin from "../admin";

import "./style.scss";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/admin" strict component={Admin}/>
        <Route component={Error}/>
      </Switch>
      </Router>)
  }
}

export default App;
