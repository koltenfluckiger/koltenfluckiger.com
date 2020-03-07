import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import Icon from "../icon";
import Li from "../li";

import styles from "./sidebar-item.module.css";

class SidebarItem extends React.PureComponent {

  constructor(props) {
    super(props);
    this.title = props.title;
    this.href = props.href;
    this.isExternal = props.isExternal;
    this.variant = props.variant;
    this.clickable = props.clickable;
  }

  render() {
    return (
      <Li variant={{classes: "sidebar-li"}}>
        {this.clickable ? this.isExternal ? <a href={this.href} className={this.clickable ? styles.sidebarItem : styles.sidebarDividerItem}>
            <Icon sidebarIcon variant={this.variant}/>
            <span>{this.title}</span>
        </a> : <NavLink exact to={this.href} className={styles.sidebarItem} activeClassName={styles.active}>
            <Icon sidebarIcon variant={this.variant}/>
            <span>{this.title}</span>
        </NavLink> : <div className={styles.sidebarDividerItem}><Icon sidebarIcon variant={this.variant}/></div>
      }
    </Li>
    )
  }
}

export default SidebarItem;
