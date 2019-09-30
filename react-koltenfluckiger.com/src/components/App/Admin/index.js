import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";

import {Error, PrivateRoute} from "../../Routing";

import "./style.scss";

class Admin extends Component {

  render() {
    return (
      <Router>
      <Switch>
        <Route exact path={`${this.props.match.path}/login`} component={Login}/>
        <Route exact path={`${this.props.match.path}/dashboard`} component={Dashboard}/>
        <Route component={Error}/>
      </Switch>
    </Router>
    )
  }
}

export default Admin;
