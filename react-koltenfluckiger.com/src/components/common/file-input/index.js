import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';

import styles from './file-input.module.css';

class FileInput extends React.PureComponent {

  constructor(props) {
    super(props);
    this.id = props.id;
    this.variant = props.variant;
    this.required = props.required;
    this.name = props.name;
    this.accept = props.accept;
    this.multiple = props.multiple;
  }

  render() {
    return (<Fragment> {
      this.required
        ? <input className={this.variant} name={this.name} multiple={this.multiple ? "multiple" : ""} type="file" id={this.id} accept={this.accept} required/>
        : <input className={this.variant} name={this.name} multiple={this.multiple ? "multiple" : ""} type="file" id={this.id} accept={this.accept}/>
    }
  </Fragment>)
  }
}

export default FileInput;
