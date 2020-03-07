import React, {Component} from 'react';
import ClassMapper from "sass-css-modules-class-mapper";
import PropTypes from 'prop-types';

import styles from "./project-title.module.css";

class ProjectTitle extends React.PureComponent {

  constructor(props) {
    super(props);
    this.text = props.text;
    this.variant = ClassMapper.map(styles, props.variant);
  }

  render() {
    return (<div className={styles.container}>
      <h3>{this.text}</h3>
    </div>
    )
  }
}

export default ProjectTitle;
