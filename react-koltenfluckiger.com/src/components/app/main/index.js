import React, {Component} from "react";
import {Router, Route, Switch} from "react-router-dom";
import {Grid, GridItem, MobileSidebar,LoadingScreen, Sidebar} from "../../common";

import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Project from "./project";

import PublicLinks from "../../../static/public-links";

class Main extends Component {

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

    return (<Router>
      <Grid variant={{classes: "two-fixed"}}>
        <GridItem>
          <Sidebar isExtended={this.state.isExtended} extendSidebar={this.extendSidebar} items={PublicLinks}/>
        </GridItem>
        <GridItem variant={{classes: "overflow-y-scroll"}}>
          <MobileSidebar isExtended={this.state.isExtended} extendSidebar={this.extendSidebar} items={PublicLinks}/>
          <Switch>
            <Route path="/" exact component={Portfolio}/>
            <Route path="/about" exact component={About}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/project/:id" exact component={Project}/>
          </Switch>
        </GridItem>
      </Grid>
    </Router>)
  }
}

export default Main;
