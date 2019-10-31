import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

import Icon from "../icon";
import PropTypes from "prop-types";

import './internal-link.module.scss';

class InternalLink extends Component {

  static propTypes = {
    href: PropTypes.string,
    variant: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.href = props.href;
    this.variant = props.variant;
  }

  render() {
    return (<li>
      <NavLink exact to={this.href} className="sidebar-links" activeClassName="active">
          <Icon variant={this.variant}/>
      </NavLink>
    </li>)
  }
}

export default InternalLink;
