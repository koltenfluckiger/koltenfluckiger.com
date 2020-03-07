import React, {Component} from 'react';
import ClassMapper from "sass-css-modules-class-mapper";
import PropTypes from 'prop-types';

import styles from './button.module.css';

class Button extends React.PureComponent {


  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.id = props.id;
    this.type = props.type;
    this.variant = ClassMapper.map(styles, props.variant);
    this.text = props.text;
    this.onClick = props.onClick;
  }

  render() {
    return (<button id={this.id} onClick={this.onClick} type={this.type} className={this.variant}>
      {this.text}
    </button>)
  }
}

export default Button;
