import React, {Component} from 'react';
import ClassMapper from "sass-css-modules-class-mapper";
import PropTypes from 'prop-types';

import styles from './label.module.css';

class Label extends React.PureComponent {

  constructor(props) {
    super(props);
    this.variant = ClassMapper.map(styles, props.variant);
    this.for = props.for;
    this.text = props.text;
  }

  render() {
    return (
      <label className={this.variant} htmlFor={this.for}>{this.text}</label>
    )
  }
}

export default Label;
