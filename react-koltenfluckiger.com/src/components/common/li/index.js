import React, {Component} from 'react';
import {withChildren} from "../../../higher-order-components";

import ClassMapper from "sass-css-modules-class-mapper";
import styles from "./li.module.css";

class Li extends React.PureComponent {

  constructor(props){
    super(props);
    this.variant = ClassMapper.map(styles, props.variant);
    this.onClick = props.onClick;
  }

  render() {
    return (<li onClick={this.onClick} className={this.variant}>{this.props.render}</li>)
  }
}

export default withChildren(Li);
