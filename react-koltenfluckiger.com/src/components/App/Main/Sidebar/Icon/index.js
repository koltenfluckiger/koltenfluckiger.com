import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Icon extends Component {

  static propTypes = {
    variant: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.variant = props.variant;
  }

  render() {
    return (<span>
      <i className={this.variant}></i>
    </span>)
  }
}

export default Icon;
