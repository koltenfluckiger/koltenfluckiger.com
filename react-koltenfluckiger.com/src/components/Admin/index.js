import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { withRouter } from "react-router";

import Login from "./Login";
import Dashboard from "./Dashboard";

import {Error} from "../Routing";

class Admin extends Component {

  render() {
    return (
      <Switch>
        <Route exact path={`${this.props.match.path}/login`} component={Login}/>
        <Route strict path={`${this.props.match.path}/dashboard`} component={Dashboard}/>
        <Route component={Error}/>
      </Switch>
    )
  }
}

export default withRouter(Admin);
