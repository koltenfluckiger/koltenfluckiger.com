import React, {Component} from 'react';
import ClassMapper from "sass-css-modules-class-mapper";

import SidebarItem from "../sidebar-item";
import Avatar from "../avatar";
import Menu from "../menu";
import Ul from "../ul";

import styles from "./sidebar.module.css";

class Sidebar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.items = props.items;
    this.isExtended = props.isExtended;
    this.extendSidebar = props.extendSidebar;
  }

  render() {
    return (<div className={this.props.isExtended
        ? ClassMapper.map(styles, {classes:"sidebar-extended"})
        : ClassMapper.map(styles, {classes:"sidebar"})}>
      <Ul variant={{classes: "sidebar-ul"}}>
        <Avatar/>
        <Menu variant={{classes: "sidebar-item"}} extendSidebar={this.props.extendSidebar}/>
        {this.items.map(item => (<SidebarItem key={item.title} title={item.title} href={item.href} clickable={item.clickable} isExternal={item.isExternal} variant={item.variant}/>))}
      </Ul>
    </div>)
  }
}

export default Sidebar;
