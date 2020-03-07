import React, {Component} from 'react';
import ClassMapper from "sass-css-modules-class-mapper";

import styles from "./panel.module.css";

class Panel extends React.PureComponent {

  constructor(props){
    super(props);
    this.variant = ClassMapper.map(styles, props.variant);
  }

  render() {
    return (<div className={this.variant}>{this.props.children}</div>)
  }
}

export default Panel;
