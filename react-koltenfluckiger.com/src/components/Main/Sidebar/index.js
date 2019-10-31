import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {InternalLink, ExternalLink} from "../../common";
import PropTypes from "prop-types";

import Avatar from "./avatar";
import Menu from "./menu";
import Divider from "./divider";

import InternalLinks from "../../../static/links-internal-config";
import ExternalLinks from "../../../static/links-external-config";

import "./style.scss";

class Sidebar extends Component {

  static propTypes = {
    state: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      isExtended: false
    };
  }

  extendSidebar = () => {
    this.setState({
      isExtended: !this.state.isExtended
    });
  }

  render() {
    return (<div className="sidebar-container">
      <div className={this.state.isExtended
          ? "sidebar-extended"
          : "sidebar"}>
        <Avatar/>
        <ul className="sidebar-items">
          <Menu variant="fas sidebar-icon fa-bars" extendSidebar={this.extendSidebar}/> {InternalLinks.map(link => (<InternalLink key={link.key} href={link.href} variant={link.variant} title={link.title}/>))}
          <Divider/> {ExternalLinks.map(link => (<ExternalLink key={link.key} href={link.href} variant={link.variant} title={link.title}/>))}
        </ul>
      </div>
    </div>)
  }
}

export default Sidebar;
