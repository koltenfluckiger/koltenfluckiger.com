import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';

import Error from '../../Routing/Error';
import PrivateRoute from '../../Routing/PrivateRoute';

import './style.scss';

class Admin extends Component {

  render() {
    return (
      <Switch>
        <Route path={`${this.props.match.path}/login`} exact component={Login}/>
        <PrivateRoute path={`${this.props.match.path}/dashboard`} component={Dashboard} redirect='/admin/login'/>
        <Route component={Error}/>
      </Switch>
    )
  }
}



export default Admin;
