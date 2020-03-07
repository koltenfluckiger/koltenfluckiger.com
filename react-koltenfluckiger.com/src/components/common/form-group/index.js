import React, {Component} from 'react';
import {withChildren} from "../../../higher-order-components";

import styles from "./form-group.module.css";

class FormGroup extends React.PureComponent {

  render() {
    return (<div className={styles.formGroup}>{this.props.render}</div>)
  }
}

export default withChildren(FormGroup);
