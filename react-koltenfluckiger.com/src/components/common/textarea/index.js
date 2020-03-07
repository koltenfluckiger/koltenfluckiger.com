import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from "./textarea.module.css";

class TextArea extends React.PureComponent {

  constructor(props) {
    super(props);
    this.variant = styles[props.variant];
  }

  render() {
    const {name, rows, required, maxLength, placeholder, defaultValue} = this.props;

    if(required){
      return <textarea name={name} rows={rows} className={this.variant} autoComplete="off" maxLength={this.maxLength} placeholder={placeholder} required defaultValue={this.props.defaultValue} />
    }
    else{
      return <textarea name={name} rows={rows} className={this.variant} autoComplete="off" maxLength={maxLength} placeholder={placeholder} defaultValue={this.props.defaultValue} />
    }
  }
}

export default TextArea;
