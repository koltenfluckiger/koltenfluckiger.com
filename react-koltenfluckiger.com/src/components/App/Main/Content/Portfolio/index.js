import React, {Component} from 'react';

import Projects from './Projects';
import Skills from './Skills';

import './style.scss';

class Portfolio extends Component {

  render() {
    return (
      <div className='portfolio-container'>
        <div className='projects-skills-container'>
          <Projects />
          <Skills />
        </div>
      </div>
    )
  }
}

export default Portfolio;
