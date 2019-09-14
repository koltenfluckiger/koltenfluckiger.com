import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Project extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='project-container'>
      <img src='/images/portfolio-screenshot.png' className='project-screenshot-icon'/>
      <div className='project-details-container'>
        <h5 className='project-title'>This Portfolio</h5>
        <p className='project-frameworks'>HTML CSS JS</p>
      </div>
      <div className='project-date-container'>
        <p className='project-date'>June 18th 2019</p>
      </div>
    </div>)
  }
}

export default Project;
