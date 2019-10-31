import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './title.module.scss';

class Title extends Component {

  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return (
      <div className='title-container'>
        <h2>{this.text}</h2>
      </div>
    )
  }
}

export default Title;
