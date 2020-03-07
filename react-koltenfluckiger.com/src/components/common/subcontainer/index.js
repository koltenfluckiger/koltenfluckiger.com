import React, {Component} from 'react';
import {withChildren} from "../../../higher-order-components";

import styles from "./subcontainer.module.css";

class SubContainer extends React.PureComponent {

  render() {
    return (<div id="subcontainer" className={styles.subcontainer}>{this.props.render}</div>)
  }
}

export default withChildren(SubContainer);
