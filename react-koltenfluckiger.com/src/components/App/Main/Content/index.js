import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Portfolio from './Portfolio';
import About from '../About';
import Contact from '../Contact';
import Error from '../../../Routing/Error';

class Content extends Component {

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Portfolio}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route component={Error}/>
      </Switch>
    )
  }
}

export default Content;
