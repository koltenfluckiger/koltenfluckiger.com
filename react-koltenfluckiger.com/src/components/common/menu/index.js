import React, {Component, Fragment} from "react";
import ClassMapper from "sass-css-modules-class-mapper";
import Icon from "../icon";
import Li from "../li";

import styles from "./menu.module.css";

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.variant = ClassMapper.map(styles, props.variant);
    this.mobile = props.mobile;
    this.handleClick = this.handleClick.bind(this);
    this.extendSidebar = props.extendSidebar;
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (<Fragment>
      {
        this.mobile
          ? (<a onClick={() => {
              this.extendSidebar();
              this.handleClick()
            }} style={{
              cursor: "pointer"
            }} className={this.variant}>
            <Icon key={this.state.active} sidebarIcon="sidebarIcon" variant={{
                classes: this.state.active
                ? "sidebar-icon fas fa-chevron-left"
                : "sidebar-icon fas fa-chevron-right"
              }}/>
          </a>)
          : (<Li variant={{
              classes: "sidebar-li mobile"
            }}>
            <a onClick={() => {
                this.extendSidebar();
                this.handleClick()
              }} style={{
                cursor: "pointer"
              }} className={this.variant}>
              <Icon key={this.state.active} sidebarIcon="sidebarIcon" variant={{
                  classes: this.state.active
                  ? "sidebar-icon fas fa-chevron-left"
                  : "sidebar-icon fas fa-chevron-right"
                }}/>
              <span>Menu</span>
            </a>
          </Li>)
      }
    </Fragment>)
  }
}

export default Menu;
