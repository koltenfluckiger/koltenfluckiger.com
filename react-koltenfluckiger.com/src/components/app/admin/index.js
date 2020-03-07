import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";
import {Grid, GridItem, Sidebar} from "../../common";
import {Error} from "../../common/routing";

import AdminLinks from "../../../static/admin-links";

import Login from "./login";
import Dashboard from "./dashboard";
import Projects from "./projects";
import Skills from "./skills";

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isExtended: false
    }
    this.extendSidebar = this.extendSidebar.bind(this);
  };

  extendSidebar() {
    this.setState({
      isExtended: !this.state.isExtended
    });
  }

  render() {

    const {pathname} = this.props.location;

    if (pathname.includes("login")) {
      return (<Router>
        <Route exact path={`${this.props.match.path}/login`} component={Login}/>
      </Router>)
    }

    return (<Router>
      <Grid variant={{classes: "two-fixed"}}>
          <Sidebar isExtended={this.state.isExtended} extendSidebar={this.extendSidebar} items={AdminLinks}/>
          <Switch>
            <Route strict path={`${this.props.match.path}/dashboard`} component={Dashboard}/>
            <Route strict path={`${this.props.match.path}/projects`} component={Projects}/>
            <Route strict path={`${this.props.match.path}/skills`} component={Skills}/>
            <Route component={Error}/>
          </Switch>
      </Grid>
    </Router>)
  }
}

export default withRouter(Admin);
