import React, {Component} from 'react';
import {withChildren} from "../../../higher-order-components";
import ClassMapper from "sass-css-modules-class-mapper";
import PropTypes from 'prop-types';

import styles from "./span.module.css";

class Span extends React.PureComponent {

  static propTypes = {
    variant: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.variant = ClassMapper.map(styles, props.variant);
    this.text = props.text;
  }
  render() {
    return (
      <span className={this.variant}>{this.props.render}</span>
    )
  }
}

export default withChildren(Span);
