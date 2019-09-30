import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Portfolio from "./Portfolio";
import About from "../About";
import Contact from "../Contact";

class Content extends Component {

  render() {
    return (<Switch>
      <Route path="/" exact="exact" component={Portfolio}/>
      <Route path="/about" exact="exact" component={About}/>
      <Route path="/contact" exact="exact" component={Contact}/>
    </Switch>)
  }
}

export default Content;
