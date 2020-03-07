import React, {Component} from 'react';
import ClassMapper from "sass-css-modules-class-mapper";

import SidebarItem from "../sidebar-item";
import Avatar from "../avatar";
import Menu from "../menu";
import Ul from "../ul";

import PropTypes from 'prop-types';

import styles from "./mobile-sidebar.module.css";

class MobileSidebar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.variant = ClassMapper.map(styles, {classes: "mobile-sidebar-toggle"});
    this.items = props.items;
    this.extendSidebar = props.extendSidebar;
  }

  render() {
    return (<div className={this.variant}>
      <Menu mobile variant={{classes: "sidebar-item"}} extendSidebar={this.extendSidebar}/>
    </div>)
  }
}

export default MobileSidebar;
