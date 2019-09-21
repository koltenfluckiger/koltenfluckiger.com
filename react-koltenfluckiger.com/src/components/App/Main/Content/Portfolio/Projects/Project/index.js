import React, {Component} from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

class Project extends Component {

  static propTypes = {
    title: PropTypes.string,
    frameworks: PropTypes.array,
    date: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.title = props.title;
    this.frameworks = props.frameworks;
    this.date = props.date;
  }

  render() {
    return (
      <div className='project-container'>
      <img alt={this.title} src='/images/portfolio-screenshot.png' className='project-screenshot-icon'/>
      <div className='project-details-container'>
        <h5 className='project-title'>{this.title} This Portfolio</h5>
        <div className='project-frameworks'>
          <p>HTML CSS Javascript React</p>
        </div>
      </div>
      <div className='project-date-container'>
        <p className='project-date'>Sept 18th 2019</p>
      </div>
    </div>
  )
  }
}

export default Project;
