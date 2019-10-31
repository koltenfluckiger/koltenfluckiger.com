import React, {Component} from "react";
import {Icon} from "../../../common";
import PropTypes from "prop-types";

import "./style.scss";

class Menu extends Component {

  static propTypes = {
    variant: PropTypes.string,
    extendSidebar: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.variant = props.variant;
    this.handleClick = this.handleClick.bind(this);
    this.extendSidebar = props.extendSidebar.bind(this);
  }

  handleClick(){
    this.setState({active: !this.state.active});
  }

  render() {
    return (<li>
      <a onClick={() => {this.extendSidebar(); this.handleClick();}} style={{cursor: "pointer"}} className="sidebar-links">
          <Icon variant={this.state.active ? "fa sidebar-icon fa-times" : this.variant}/>
      </a>
    </li>)
  }
}

export default Menu;
