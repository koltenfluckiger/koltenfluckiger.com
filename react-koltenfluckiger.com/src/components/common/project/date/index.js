import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from "./project-date.module.css";

class ProjectDate extends React.PureComponent {

  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return (
      <div className={styles.container}><h6>Last updated: {this.text}</h6></div>
    )
  }
}

export default ProjectDate;
