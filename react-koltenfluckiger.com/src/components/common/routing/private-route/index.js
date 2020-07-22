import React, {Component} from "react";
import PropTypes from "prop-types";
import {Router, Route, Link, Redirect} from "react-router-dom";

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
    return (<div>
      {
        true
          ? <Route to={this.path} component={this.component}/>
          : <Redirect to={this.redirect}/>
      }
    </div>)
  }
}

export default PrivateRoute;
