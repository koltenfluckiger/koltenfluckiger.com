import React, {Component} from 'react';

import './style.scss';

class Icon extends Component {

  constructor(props) {
    super(props);
    this.variant = props.variant;
  }

  render() {
    return (<span>
      <i className={this.variant}></i>
    </span>
    )
  }
}

export default Icon;
