import React, {Component} from 'react';
import {withChildren} from "../../../higher-order-components";

import styles from "./container.module.css";

class Container extends React.PureComponent {

  render() {
    return (<div id="container" className={styles.container}>{this.props.render}</div>)
  }
}

export default withChildren(Container);
