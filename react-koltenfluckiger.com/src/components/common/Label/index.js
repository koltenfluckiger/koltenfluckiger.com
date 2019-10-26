import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Label extends Component {

  constructor(props) {
    super(props);
    this.variant = props.variant;
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
