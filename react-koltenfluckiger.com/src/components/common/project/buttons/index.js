import React, {Component} from 'react';
import Button from "../../button";
import PropTypes from 'prop-types';

import styles from "./project-buttons.module.css";

class ProjectButtons extends React.PureComponent {

  constructor(props) {
    super(props);
    this.sourceCodeLink = props.sourceCodeLink;
    this.hostedLink = props.hostedLink;
    this.hostedStatus = props.hostedStatus;
  }

  render() {
    return (<div className={styles.container}>
      <Button type="button" variant={{classes: "mdm button red"}} onClick={() => {
          window.location.href = this.sourceCodeLink
        }} text="Source Code"></Button>
      <Button type="button" variant={{classes: "mdm button green space-left"}} onClick={() => {
          window.location.href = this.hostedLink
        }} text="Live Demo"></Button>
    </div>)
  }
}

export default ProjectButtons;
