import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from "./status.module.css";

class Status extends React.PureComponent {

  constructor(props) {
    super(props);
    this.text = props.text;
    this.type = props.type;
  }

  render() {
    return (
      this.type === "error"
      ? <div className={styles.error}>
        {this.text}
      </div>
      : <div className={styles.success}>
        {this.text}
      </div>)
  }
}

export default Status;
