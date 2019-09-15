import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Sidebar from './Sidebar';
import Content from './Content';

class Main extends Component {

  render() {
    return (<Router>
      <Sidebar/>
      <Content/>
    </Router>
    )
  }
}

export default Main;
