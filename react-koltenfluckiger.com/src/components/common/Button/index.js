import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './button.module.scss';

class Button extends Component {

  constructor(props) {
    super(props);
    this.type = props.type;
    this.variant = props.variant;
    this.text = props.text;
  }

  render() {
    return (
      <button type={this.type} className={this.variant}> {this.text}
      </button>
    )
  }
}

export default Button;
