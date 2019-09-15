import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

import Dashboard from '../../App/Admin/Dashboard';

function fakeAuth(callback){
  var isAuthenicated = true;
  callback(isAuthenicated);
}

class PrivateRoute extends Component {

  static propTypes = {
    state: PropTypes.object,
    path: PropTypes.string,
    redirect: PropTypes.string,
    component: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      isAuthenicated: false
    }
    this.path = props.path;
    this.redirect = props.redirect;
    this.component = props.component;
  }

  render() {
    return (
      <div>
      {fakeAuth(function(status){
        status ? <Route path={this.props.path} exact="exact" component={this.props.component}/>
        : <Redirect to={this.redirect}/>
    }
  )
  }
  </div>
    )
  }
}

export default PrivateRoute;
