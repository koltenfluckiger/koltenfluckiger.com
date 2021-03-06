import React, {Component} from 'react';
import ClassMapper from "sass-css-modules-class-mapper";

import {withChildren} from "../../../higher-order-components";

import styles from "./grid-item.module.css";

class GridItem extends React.PureComponent {

  constructor(props){
    super(props);
    this.variant = ClassMapper.map(styles, props.variant);
  }

  render() {
    return (<div className={this.variant}>{this.props.render}</div>)
  }
}

export default withChildren(GridItem);
