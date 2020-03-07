import React, {Component} from 'react';
import {withChildren} from "../../../higher-order-components";

import styles from "./column-card.module.css";

class ColumnCard extends React.PureComponent {

  render() {
    return (
      <div className={styles.columnCard}>{this.props.render}</div>
    )
  }
}

export default withChildren(ColumnCard);
