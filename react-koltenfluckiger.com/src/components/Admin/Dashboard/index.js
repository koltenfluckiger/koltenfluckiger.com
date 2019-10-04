import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Sidebar from './Sidebar';
import Board from './Board';

import "./style.scss";

class Dashboard extends Component {

  render() {
    return (<Router>
      <Sidebar/>
      <Board/>
    </Router>
    )
  }
}

export default Dashboard;
