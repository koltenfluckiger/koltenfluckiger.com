import React, {Component} from 'react';

import Projects from './Projects';

import './style.scss';

class Portfolio extends Component {

  render() {
    return (
      <div className='portfolio-container'>
        <div className='projects-tags-container'>
          <Projects />
        </div>
      </div>
    )
  }
}

export default Portfolio;
