import React, {Component} from 'react';
import {withChildren} from "../../../higher-order-components";
import ClassMapper from "sass-css-modules-class-mapper";

import styles from "./ul.module.css";

class Ul extends React.PureComponent {

  constructor(props){
    super(props);
    this.variant = ClassMapper.map(styles, props.variant);
  }

  render() {
    return (<ul className={this.variant}>{this.props.render}</ul>)
  }
}

export default withChildren(Ul);
