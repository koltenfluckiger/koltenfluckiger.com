import React, {Component} from 'react';
import {withChildren} from "../../../higher-order-components";

import styles from "./column.module.css";

class Column extends React.PureComponent {

  render() {
    return (
      <div className={styles.column}>{this.props.render}</div>)
  }
}

export default withChildren(Column);
