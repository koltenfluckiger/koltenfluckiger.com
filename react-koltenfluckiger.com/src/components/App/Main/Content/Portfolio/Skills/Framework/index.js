import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';

import './style.scss';

class Framework extends Component {

  static propTypes = {
    title: PropTypes.string,
    subframeworks: PropTypes.array,
    variant: PropTypes.string,
    abbreviation: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.title = props.title;
    this.subframeworks = props.subframeworks;
    this.variant = props.variant;
    this.abbreviation = props.abbreviation;
  }

  render() {
    return (
      <div className='framework-container'>
      <Icon variant={this.variant} abbreviation={this.abbreviation} />
      <h6>{this.title}</h6>
      <ul>
        {this.subframeworks.map((subframework) =>
          <li key={subframework}>
            {subframework}
          </li>
        )}
      </ul>
    </div>
      )
  }
}

export default Framework;
