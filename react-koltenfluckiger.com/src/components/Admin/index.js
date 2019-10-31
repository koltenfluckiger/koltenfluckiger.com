import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { withRouter } from "react-router";

import Login from "./login";
import Dashboard from "./dashboard";

import {Error} from "../common/routing";

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
