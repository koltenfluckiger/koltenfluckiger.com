import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from "./project-description.module.css";

class ProjectDescription extends React.PureComponent {

  constructor(props) {
    super(props);
    this.content = props.content;
  }

  render() {
    return (<div className={styles.container}>
      <p>{this.content}</p>
    </div>)
  }
}

export default ProjectDescription;
