import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Portfolio from "./portfolio";
import About from "./about";
import Contact from "./contact";

class Content extends Component {

  render() {
    return (<Switch>
      <Route path="/" exact component={Portfolio}/>
      <Route path="/about" exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
    </Switch>)
  }
}

export default Content;
