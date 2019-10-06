import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from 'prop-types';

import Projects from '../Projects';
import Frameworks from '../Frameworks';

import './style.scss';

class Board extends Component {

  render() {
    return (

        <Switch>
        <Route exact path='/admin/dashboard/projects' component={Projects}/>
        <Route exact path='/admin/dashboard/frameworks' component={Frameworks}/>
      </Switch>
    )
  }
}

export default withRouter(Board);