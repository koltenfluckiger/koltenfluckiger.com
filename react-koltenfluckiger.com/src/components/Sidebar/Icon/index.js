import React, {Component} from 'react';

import './style.scss';

class Icon extends Component {

  constructor(props) {
    super(props);
    this.iconClass = props.iconClass;
  }

  render() {
    return (<span>
      <i className={this.iconClass}></i>
    </span>
    )
  }
}

export default Icon;
