import React, {Component} from "react";
import {BrowserRouter as Route, NavLink} from "react-router-dom";
import PropTypes from "prop-types";

import Icon from "../Icon";

import "./style.scss";

class InternalLink extends Component {

  static propTypes = {
    href: PropTypes.string,
    variant: PropTypes.string,
    title: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.href = props.href;
    this.variant = props.variant;
    this.title = props.title;
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
